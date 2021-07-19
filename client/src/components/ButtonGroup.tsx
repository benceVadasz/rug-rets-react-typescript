import React from "react";
import Swal from "sweetalert2";
import {useHistory} from 'react-router-dom';
import {OrderButton, SaveButton, ButtonContainer} from './ButtonGroup.styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import {setAlertState, toggleAlertNeeded} from "../state/actions/alert";
import {Color} from "../types";
import {saveDesign} from "../state/actions/designs";

const ButtonGroup = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const initColors = useSelector((state: RootState) => state.shapeColorArray)
    const shape = useSelector((state:RootState) => state.shape)

    const save = () => {
        if (!localStorage.getItem('profile')) {
            Swal.fire({
                title: 'Please log in or sign up to save design',
                showDenyButton: true,
                confirmButtonText: `Log in`,
                denyButtonText: `Sign up`,
                denyButtonColor: '#424642',
                confirmButtonColor: '#424642'
            }).then(res => {
                if (res) {

                    if (res.isConfirmed) {
                        history.push('login')
                    } else if (!res.isConfirmed && !res.isDismissed) {
                        history.push('register')
                    }
                }
            })
        }
        else {
            if (shape.length > 0) {
                Swal.fire({
                    title: 'Please enter a name for your design:',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off',
                    },
                    confirmButtonText: 'Save',
                }).then(r => {
                        const name = r.value;
                        const colors = replaceEmptyValues(initColors)
                        dispatch(saveDesign({shape, colors, name}))
                        dispatch(setAlertState({text: "Your shape has been successfully saved!", severity: 'success'}))
                        dispatch(toggleAlertNeeded())
                        closeAlertIn5()
                    }
                )
            }
        }
        // todo: else, ask name for shape, dispatch save and show alert
    }

    const replaceEmptyValues = (colorList: string[]) => {
        const fin = []
        for (let colorCode of colorList) {
            if (!colorCode) {
                fin.push("white")
            } else {
                fin.push(colorCode)
            }
        }
        return fin
    }

    const closeAlertIn5 = () => {
        setTimeout(() => {
            dispatch(toggleAlertNeeded())
        }, 5000)
    }

    return (
        <ButtonContainer>
            <OrderButton className={'lower-case white'}>
                Order
            </OrderButton>
            <SaveButton onClick={save} className={'lower-case'}>
                Save
            </SaveButton>
        </ButtonContainer>
    );
}

export default ButtonGroup;
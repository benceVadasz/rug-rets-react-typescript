import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {saveDesign} from "../actions/designs";
// import {toggleAlertNeeded} from '../actions/alert'
// import {setAlertState} from "../actions/alert";
import Swal from "sweetalert2";
import {useHistory} from 'react-router-dom';
import {OrderButton, SaveButton} from '../styles/ButtonGroup.styles';

const ButtonGroup = () => {

    const history = useHistory()
    const dispatch = useDispatch();
    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    // const shape = useSelector((state => state.shape))
    // const initColors = useSelector((state => state.shapeColorArray))
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
        } else {
            // if (shape.length > 0) {
            //     Swal.fire({
            //         title: 'Please enter a name for your design:',
            //         input: 'text',
            //         inputAttributes: {
            //             autocapitalize: 'off',
            //         },
            //         confirmButtonText: 'Save',
            //     }).then(r => {
            //             const name = r.value;
            //             // const colors = replaceEmptyValues(initColors)
            //             // dispatch(saveDesign({shape, colors, name}))
            //             // dispatch(setAlertState({text: "Your shape has been successfully saved!", severity: 'success'}))
            //             // dispatch(toggleAlertNeeded())
            //             closeAlertIn5()
            //         }
            //     )
            // }
        }
    }

    const closeAlertIn5 = () => {
        setTimeout(() => {
            // dispatch(toggleAlertNeeded())
        }, 5000)
    }

    // const replaceEmptyValues = colorList => {
    //     const fin = []
    //     for (let colorCode of colorList) {
    //         if (!colorCode) {
    //             fin.push("white")
    //         } else {
    //             fin.push(colorCode)
    //         }
    //     }
    //     return fin
    // }

    return (
        <>
            <OrderButton className={'lower-case white'}>
                Order
            </OrderButton>
            <SaveButton onClick={save} className={'lower-case'}>
                Save
            </SaveButton>
        </>
    );
}

export default ButtonGroup;
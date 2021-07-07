import React from "react";
import Swal from "sweetalert2";
import {useHistory} from 'react-router-dom';
import {OrderButton, SaveButton, ButtonContainer} from '../styles/ButtonGroup.styles';

const ButtonGroup = () => {
    const history = useHistory()

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
        // todo: else, ask name for shape, dispatch save and show alert
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
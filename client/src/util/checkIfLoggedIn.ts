import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";


export const userAction = () => {
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
            } else if (!res.isConfirmed && !res.isDismissed) {
                return 'register'
            }
        }
    })
}
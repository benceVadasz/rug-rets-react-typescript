import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import Rug from "../Rug";
// import SizeDropDown from "../SizeDropDown";
import Swal from "sweetalert2";
import {useHistory} from 'react-router-dom';
import {DesignData} from "../../types";

type DesignProp = {
    design: DesignData
}

const Design = ({design} : DesignProp) => {
    const useStyles = makeStyles(() => ({
        paper: {
            width: 250,
            height: 130,
            borderRadius: 5,
            cursor: 'pointer',
            border: '1px solid black',
            margin: '0 30px 15px 0'
        },
        flexBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexFlow: 'column',
            margin: '20px 0 0 20px'
        },
        vertical: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '77%'
        },
        column: {
            display: 'flex',
            flexFlow: 'column',
            width: 200
        }
    }));
    const classes = useStyles();
    const history = useHistory();


    const fill = () => {
        console.log('fill')
    }

    const handleDesignOption = () => {
        Swal.fire({
            title: '',
            showDenyButton: true,
            confirmButtonText: `Edit`,
            denyButtonText: `Order`,
            denyButtonColor: '#424642',
            confirmButtonColor: '#424642'
        }).then(res => {
            if (res) {
                if (res.isConfirmed) {
                    history.push('design')
                } else if (!res.isConfirmed && !res.isDismissed) {
                    history.push('order')
                }
            }
        })
    }

    return (
        <div className={classes.container}>
            <Typography className="lower-case" variant="h6" color="primary"
                        align="left">{design.name}</Typography>
            <div className={classes.vertical}>

                <Button onClick={handleDesignOption} className={classes.paper}>
                    <div className={classes.flexBox}>
                        <Rug size={100} file={design.shape} onFill={fill} fillColors={design.colors}/>
                    </div>
                </Button>
                {/*<SizeDropDown/>*/}
            </div>
        </div>
    );
}

export default Design;
import React, {useState} from "react";
import {GoogleLogin} from "react-google-login";
import {makeStyles} from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
// import {signIn} from '../actions/auth';
// import Icon from '../assets/icon';
// import {useDispatch} from "react-redux";
// import {useHistory} from 'react-router-dom';

const Login = () => {
    const useStyles = makeStyles(() => ({
        paperStyle: {
            padding: "30px 20px",
            height: 340,
            width: 500,
            margin: "70px auto",
        },
        mobilePaperStyle: {
            padding: "30px 20px",
            height: 300,
            width: '90%',
            margin: "170px auto",
        },
        formStyle: {
            height: 220,
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "space-between",
        },
        mobileFormStyle: {
            height: 220,
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "space-between",
        },
        headerStyle: {margin: 0, fontFamily: "'IBM Plex Mono', monospace"},
        avatarStyle: {backgroundColor: "#edede9",},
        button: {backgroundColor: "#edede9", marginBottom: 20},
        passwordStyle: {marginBottom: 30},
        invalid: {color: 'red'},
        load: {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}
    }));

    const classes = useStyles();
    const [email, setEmailState] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    // const dispatch = useDispatch();
    // const history = useHistory();

    const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvalidCredentials(false)

        setEmailState(e.target.value)
    }

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // dispatch(signIn({email, password}, history))
    };

    // const googleSuccess = async (res) => {
    //     const result = res?.profileObj;
    //     const token = res?.tokenId;
    //     try {
    //         dispatch({type: 'AUTH', data: {result, token}})
    //         history.push('/')
    //     } catch (e) {
    //         console.log(e)
    //     }
    // };

    const googleFailure = () => {
        console.log('google sign in was unsuccessful. Please refresh and start again.')
    };

    return (
        <div>
            <Grid>
                <Paper elevation={20} className={classes.paperStyle}>
                    <div>
                        <Avatar className={classes.avatarStyle}>
                            <AddCircleOutlineOutlinedIcon/>
                        </Avatar>
                        <h2 className={classes.headerStyle}>Log in</h2>
                        {!invalidCredentials ?
                            <Typography className={classes.headerStyle} variant="caption" gutterBottom>
                                Please fill this form to log in!
                            </Typography> : <Typography className={classes.invalid} variant="caption" gutterBottom>
                                Invalid credentials
                            </Typography>}
                    </div>
                    <form onSubmit={submit} className={classes.formStyle}>
                        <TextField
                            error={invalidCredentials}
                            fullWidth
                            label="Email"
                            placeholder="Enter your email"
                            onChange={setEmail}
                        />
                        <TextField
                            error={invalidCredentials}
                            fullWidth
                            className={classes.passwordStyle}
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" variant="contained" className={classes.button + ' lower-case'}>
                            Log in
                        </Button>
                        {/* <GoogleLogin
                            clientId='525017423702-622ugttvcve20rljokq90t37rdl8m4bc.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button className={'lower-case white ' + classes.googleBtn} color="primary"
                                        fullWidth onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<Icon/>}
                                        variant="contained"
                                >
                                    Sign in with Google
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        /> */}
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Login;
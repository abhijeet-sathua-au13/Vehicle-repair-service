import useStyles from "../AuthStyles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import PATHS from "../../../config/webPath";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import mechanicAuthActions from "../../../redux/actions/mechanicAuthActions/mechanicAuthActions";
import mechanicAlertActions from "../../../redux/actions/mechanicAlertActions/mechanicAlertActions";
import loaderActions from "../../../redux/actions/loaderActions/loaderActions";
import Alert from '@material-ui/lab/Alert';


const MechanicLogin = () => {
    const classes = useStyles();
    const history = useHistory()


    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    const [longitude,setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [isLoggedin, setIsLoggedIn] = useState(false)

    const dispatch = useDispatch();
    const mechanicAuthLogin = useSelector(state => state.mechanicLogin)
    const mechanicAuthMessage = useSelector(state => state.mechanicAuthAlert.mechanicAuthAlert)
    
    const preventDefault = (event) => {
        event.preventDefault();
        history.push(PATHS.MECHANIC_SIGNUP)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLongitude(position.coords.longitude)
            setLatitude(position.coords.latitude)
        });
    },[])

    useEffect(() => {
        if(isLoggedin && mechanicAuthLogin){
            fetch(`https://service-anywhere.herokuapp.com/api/service-location-save/${longitude}/${latitude}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
            }).then(res => {
                return res.json()
            }).then(resp => {
                console.log(resp)
            }).catch((err) => {
                console.log(err)
            })
        }
    },[isLoggedin, mechanicAuthLogin,longitude, latitude])

    const mechanicLoginHandler = (event) => {
        event.preventDefault();

        if(email.trim() === ''){
            setIsInvalidEmail(true)
            return
        }
        if(password.trim() === ''){
            setIsInvalidPassword(true)
            return
        }

        dispatch(mechanicAlertActions.clearMechanicAlertMessage())

        const mechanicData = { email,password }

        dispatch(loaderActions.start())

        fetch('https://service-anywhere.herokuapp.com/api/serviceman-login', {
            method: 'POST',
            body: JSON.stringify(mechanicData),
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            },
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(resData => {
            if(resData.errors.length >= 1){
                dispatch(mechanicAlertActions.mechanicLoginFailureMsg(resData.errors[0].msg))
                dispatch(loaderActions.stop())
            }else{
                setIsLoggedIn(true)
                dispatch(mechanicAuthActions.mechanicAuthLogin(resData.data.token));
                dispatch(mechanicAlertActions.mechanicLoginSuccessMsg(resData.message))
                dispatch(loaderActions.stop())
                history.push(PATHS.MECHANIC_PROFILE)
            }
        }).catch(err => {
            console.log(err)
        })
    } 

    return (
        <>
            <Typography align="right" className={classes.navigateToSingup}>Not a member?
                <Link onClick={preventDefault} color="inherit" style={{cursor: "pointer"}}>
                        {' Register'}
                </Link>
            </Typography>
            <Grid container direction="column" justify="center" alignItems="center" spacing={0} className={classes.mechanicAuthLogin}>
                <form className={classes.mechanicAuthForm} onSubmit={mechanicLoginHandler}>
                    <Typography variant="h4" color="inherit" style={{color: "#ffffff", marginBottom: "2rem"}}>
                        Login to EasyRepair
                    </Typography>

                    <TextField 
                        variant="outlined"
                        label="Email"
                        name="email"
                        error={isInvalidEmail ? true : false}
                        type="email"
                        id="email"
                        fullWidth 
                        className={classes.authTextField}
                        autoComplete="off"
                        helperText={isInvalidEmail ? 'Invalid Email' : ''}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setIsInvalidEmail(false)
                        }}
                        InputProps={{
                            classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            },
                        }}
                        InputLabelProps={{
                            classes: {
                            root: classes.cssLabel,
                            },
                        }}
                    />
                    <TextField 
                        variant="outlined"
                        label="Password"
                        type="password"
                        name="password"
                        error={isInvalidPassword ? true : false}
                        fullWidth 
                        id="password"
                        className={classes.authTextField}
                        helperText = {isInvalidPassword ? 'Invalid Password': ''}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setIsInvalidPassword(false)
                        }}
                        autoComplete="off"
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                            },
                        }}
                        InputLabelProps={{
                            classes: {
                            root: classes.cssLabel,
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        color="default"
                        className={classes.submitButton}
                    >
                        Login
                    </Button>
                </form>
                <br/>

                {!mechanicAuthLogin && mechanicAuthMessage && <div style={{width: "100%", display:"flex", justifyContent:"center", marginTop: "3rem"}} className={classes.alertRoot}>
                    <Alert severity="error" style={{width: "23rem", textAlign: "center"}}>{mechanicAuthMessage}</Alert>
                </div>}

            </Grid>
        </>
    )
}

export default MechanicLogin;
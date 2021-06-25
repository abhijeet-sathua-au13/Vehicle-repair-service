import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../AuthStyles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import PATHS from "../../../config/webPath";
import mechanicRegisterActions from "../../../redux/actions/mechanicRegisterActions/mechanicRegisterActions";
import mechanicAlertActions from "../../../redux/actions/mechanicAlertActions/mechanicAlertActions";

const MechanicSignup = () => {
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();
  const mechanicRegistered = useSelector(state => state.mechanicRegister.registered);
  const mechanicRegAlert = useSelector(state => state.mechanicAuthAlert.mechanicAuthAlert)

  const [name, setName] = useState('');
  const [ email, setEmail ] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPhone, setIsInvalidPhone] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  

  const preventDefault = (event) => {
    event.preventDefault();
    history.push(PATHS.MECHANIC_LOGIN);
  };

  const mechanicRegisterHandler = (event) => {
      event.preventDefault();

      if(name.trim() === ''){
        setIsInvalidName(true);
        return
      }
      if(email.trim() === ''){
          setIsInvalidEmail(true)
          return
      }
      if(phone.trim() === ''){
          setIsInvalidPhone(true)
          return
      }
      if(password.trim() === ''){
        setIsInvalidPassword(true)
        return
    }

      const mechanic = { email, name, phone, password }

      fetch("https://service-anywhere.herokuapp.com/api/serviceman-signup", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                "Access-Control-Allow-Credentials" : "true",
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(mechanic)
        }).then(res => {
            return res.json()
        }).then(resData => {
            if(resData.errors.length >= 1){
                dispatch(mechanicRegisterActions.mechanicRegisterFailure());
                dispatch(mechanicAlertActions.mechanicRegSuccessMsg(resData.errors[0].msg))
            }else{
                dispatch(mechanicRegisterActions.mechanicRegisterSucceed());
                dispatch(mechanicAlertActions.mechanicRegSuccessMsg(resData.message))
            }
        }).catch(err => {
            console.log(err)
            dispatch(mechanicRegisterActions.mechanicRegisterFailure());
        })
  }

  return (
    <>
        <Typography align="right" className={classes.navigateToSingup}>Already a member?
          <Link onClick={preventDefault} color="inherit" style={{cursor: "pointer"}}>
                  {' Login'}
          </Link>
        </Typography>
        {!mechanicRegistered && mechanicRegAlert && <div style={{width: "100%", display:"flex", justifyContent:"center", marginBottom: "3rem"}} className={classes.alertRoot}>
              <Alert severity="error" style={{width: "23rem", textAlign: "center"}}>{mechanicRegAlert}</Alert>
            </div>}
            {mechanicRegistered && mechanicRegAlert && <div style={{width: "100%", display:"flex", justifyContent:"center", marginBottom: "3rem"}} className={classes.alertRoot}>
              <Alert severity="success" style={{width: "23rem", textAlign: "center"}}>{mechanicRegAlert}</Alert>
            </div>}
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className={classes.mechanicAuthSignup}
            spacing={0}
        >
            <form className={classes.mechanicAuthForm} onSubmit={mechanicRegisterHandler}>
            <Typography variant="h4" color="inherit" style={{color: "#ffffff", marginBottom: "1rem"}}>
                Register with EasyRepair
            </Typography>
            <br/>

            <TextField 
                variant="outlined" 
                label="Name" 
                name="name"
                error={isInvalidName ? true : false}
                fullWidth 
                id="name"
                className={classes.authTextField}
                autoComplete="off"
                helperText={isInvalidName ? 'Invalid Name': ''}
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                    setIsInvalidName(false)
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
            <TextField variant="outlined" 
                type="email" 
                label="Email" 
                name="email"
                error={isInvalidEmail ? true : false}
                fullWidth 
                id="email"
                className={classes.authTextField}
                helperText={isInvalidEmail ? 'Invalid Email' : ''}
                autoComplete="off"
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
            {/* <Grid container direction="row" justify="flex-start" spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    variant="outlined" 
                    label="GST ID Number" 
                    className={classes.authTextField}

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
                    fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={6} >
                <TextField 
                    variant="outlined" 
                    label="UID Number" 
                    className={classes.authTextField}

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
                        fullWidth
                />
                </Grid>
            </Grid> */}
            <TextField variant="outlined" 
                label="Mobile" 
                name="phone"
                error={isInvalidPhone ? true: false}
                fullWidth 
                id="phone"
                className={classes.authTextField}
                helperText={isInvalidPhone ? 'Invalid Mobile Number' : ''}
                autoComplete="off"
                value = {phone}
                onChange = {(e) => {
                    setPhone(e.target.value)
                    setIsInvalidPhone(false)
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
            <TextField variant="outlined" 
                type="password" 
                label="Create Password" 
                name="password"
                error={isInvalidPassword ? true : false}
                fullWidth 
                id="password"
                className={classes.authTextField}
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    setIsInvalidPassword(false)
                }}
                autoComplete="off"
                helperText={isInvalidPassword ? 'Invalid Password' : ''}
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
                Register
              </Button>
            </form>

            
      </Grid>
      
    </>
  );
};

export default MechanicSignup;

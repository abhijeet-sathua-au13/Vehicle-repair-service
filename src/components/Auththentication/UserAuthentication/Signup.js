import { useState } from "react";

import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import google from "../../../assets/images/search.svg";  
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
// import Icon from "@material-ui/core/Icon";
import Link from '@material-ui/core/Link';
import Divider from "../Divider";
import useStyles from '../AuthStyles';
import PATHS from "../../../config/webPath";
import { useHistory } from "react-router-dom";
// import LoginButton from "../GoogleAuthButton/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import userRegisterAction from "../../../redux/actions/userRegisterActions/userRegisterActions";
import Alert from '@material-ui/lab/Alert';

const Signup = () => {

    const classes = useStyles();

    const history = useHistory();

    const [checked, setChecked] = useState(true);

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [phone, setPhone] = useState('');

    const [password, setPassword] = useState('');

    const [error,setError] = useState('');

    const [isError, setIsError] = useState(false);

    const [invalidName, setInvalidName] = useState(false);

    const [invalidEmail, setInvalidEmail] = useState(false);

    const [invalidMobile, setInvalidmobile] = useState(false);

    const [invalidPassword, setInvalidPassword] = useState(false);

    const dispatch = useDispatch();

    const registered = useSelector(state => state.userAuth.registered)

    const regStatus = useSelector(state => state.userAuth.registerStatus)


    const userFormHandler = (event) => {
      event.preventDefault();

      if(name.trim() === ''){
        setInvalidName(true)
        return
      }
      if(email.trim() === ''){
        setInvalidEmail(true)
        return
      }
      if(phone.trim() === ''){
        setInvalidmobile(true)
        return
      }
      if(password.trim() === ''){
        setInvalidPassword(true)
        return
      }

      const user = { email, name, phone, password }
 
      fetch("https://service-anywhere.herokuapp.com/api/customer-signup", {
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
        body: JSON.stringify(user)
      }).then(res => {
        console.log(res)
        if(res.status === 400){
          setIsError(true)
          setError('User already Exists! Try with a different email')
          dispatch(userRegisterAction.registerFailed())
        }
        else if(res.status === 200){
          dispatch(userRegisterAction.registerSuccess())
          setIsError(false)
          setError('')
          setInvalidmobile(false)
          setInvalidName(false)
          setInvalidPassword(false)
          setInvalidEmail(false)
          setName('');
          setEmail('');
          setPhone('');
          setPassword('');
        }else{
          dispatch(userRegisterAction.registerFailed())
        }    
      }).catch(err => {
        console.log(err);
      })   
    }

    const preventDefault = (event) => {
      event.preventDefault();
      history.push(PATHS.USER_LOGIN)
    }

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
      <>
      <Typography align="right" className={classes.navigateToSingin}>Already a member?
          <Link onClick={preventDefault} color="inherit" style={{cursor: "pointer"}}>
                  {'Sign in'}
          </Link>
      </Typography>
      {registered && <div style={{width: "100%", display:"flex", justifyContent:"center", marginBottom: "3rem"}} className={classes.alertRoot}>
       <Alert severity="success" style={{width: "23rem", textAlign: "center"}}>{regStatus}</Alert>
      </div> }
      {!registered && regStatus && <div style={{width: "100%", display:"flex", justifyContent:"center", marginBottom: "3rem"}} className={classes.alertRoot}>
       <Alert severity="error" style={{width: "23rem", textAlign: "center"}}>{regStatus}</Alert>
      </div> }
       
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="flex-start"
            className={classes.authSignup}
            spacing={0}
          >
            <form className={classes.userAuthForm} onSubmit={userFormHandler} noValidate>
              <Typography
                variant="h4"
                align="left"
                style={{ color: "#ffffff" }}
              >
                Sign up to EasyRepair
              </Typography>
              {/* <LoginButton /> */}
              <Divider className={classes.divider} align="center">
                Or
              </Divider>

              <TextField
                variant="outlined"
                name="name"
                label="Name"
                error={invalidName ? true : false}
                fullWidth
                id="name"
                required
                className={classes.authTextField}
                helperText={invalidName? "Invalid Name" : ''}
                autoComplete="off"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setInvalidName(false)
                }
              }
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
                type="email"
                label="Email"
                name="email"
                error={isError || invalidEmail ? true : false}
                id="outlined-error-helper-text"
                required
                fullWidth
                className={classes.authTextField}
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                    setIsError(false);
                    setError('')
                    setInvalidEmail(false)
                  }
                }
                helperText={isError ? error : `${invalidEmail ? 'Invalid Email' : ''}` }
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
                label="Mobile"
                name="phone"
                error={invalidMobile ? true : false}
                fullWidth
                required
                id="phone"
                className={classes.authTextField}
                helperText={invalidMobile ? "Invalid Mobile Number" : ''}
                value={phone}
                onChange={(e) => {
                    setPhone(e.target.value)
                    setInvalidmobile(false)
                  }
                }
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
                type="password"
                label="Password"
                name="password"
                required
                error = {invalidPassword ? true : false}
                fullWidth
                id="password"
                className={classes.authTextField}
                helperText= {invalidPassword ? "Invalid Password" : ''}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setInvalidPassword(false)
                }
              }
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    style={{ color: "black" }}
                    onChange={handleChange}
                  />
                }
                label={
                  <Typography style={{ color: "#a0a0a0" }}>
                    I agree with terms and use
                  </Typography>
                }
              />
              <br />
              <Button
                variant="contained"
                type="submit"
                color="default"
                className={classes.submitButton}
              >
                Create Account
              </Button>
            </form>
          </Grid>
          </>
    )
}

export default Signup;
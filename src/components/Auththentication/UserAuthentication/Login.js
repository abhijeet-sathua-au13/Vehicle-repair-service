import { useState } from "react";

import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import Icon from "@material-ui/core/Icon";
import Link from '@material-ui/core/Link';
import TextField from "@material-ui/core/TextField";

// import Divider from '../Divider';
import useStyles from '../AuthStyles';
// import google from '../../../assets/images/search.svg';
import PATHS from "../../../config/webPath";
import { useHistory } from "react-router-dom";
// import LoginButton from "../GoogleAuthButton/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import customerAuthActions from "../../../redux/actions/customerAuthActions/customerAuthActions";
import alertAuthActions from "../../../redux/actions/alertAuthActions/alertAuthActions";
import Alert from '@material-ui/lab/Alert';
import loaderActions from "../../../redux/actions/loaderActions/loaderActions";



const Login = () => {

    const classes = useStyles();

    const history = useHistory();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const[isInvalidEmail, setIsInvalidEmail] = useState(false);

    const [isInvalidPassword, setIsInvalidPassword] = useState(false)

    const dispatch = useDispatch()

    const alertMessage = useSelector(state => state.authAlert.authStatus)
    const IsCustomerLoggedin = useSelector(state => state.customerLogin)

    const preventDefault = (event) => {
      event.preventDefault()
      history.push(PATHS.USER_SIGNUP)
    };

    const customerLoginFormHandler = (event) => {
      event.preventDefault();
      if(email.trim() === ''){
        setIsInvalidEmail(true)
        return
      }
      if(password === ''){
        setIsInvalidPassword(true)
        return
      }

      const customerData = { email, password } 

      dispatch(loaderActions.start())

      fetch('https://service-anywhere.herokuapp.com/api/customer-login', {
        method: 'POST',
        body: JSON.stringify(customerData),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(resp => {
        return resp.json();
      }).then(resData => {
        if(resData.errors.length){
          dispatch(alertAuthActions.loginFailureMessage(resData.errors[0].msg))
          dispatch(loaderActions.stop())
        }else{
          setIsInvalidEmail(false)
          setIsInvalidPassword(false)
          dispatch(customerAuthActions.customerAuthLogin(resData.data.token));
          dispatch(alertAuthActions.clearAlertMessage())
          dispatch(loaderActions.stop())
          history.push('/')
        }
      }).catch(err => {
        console.log(err)
      })
    }
    

    return (
      <>
      <Typography align="right" className={classes.navigateToSingup}>Not a member?
          <Link onClick={preventDefault} color="inherit" style={{cursor: "pointer"}}>
                  {'Sign up'}
          </Link>
      </Typography>
        <Grid container direction="column" justify="center" alignItems="center" className={classes.authSignin} spacing={0}>
            <form className={classes.userAuthForm} onSubmit={customerLoginFormHandler}>
                <Typography variant="h4" align="left" style={{color: "#ffffff", marginBottom: "2rem"}}>Login to EasyRepair</Typography>
                {/* <LoginButton /> */}
                {/* <Divider className={classes.divider} align="center">
                    Or
                </Divider> */}
                <TextField
                variant="outlined"
                type="email"
                name="email"
                error={isInvalidEmail ? true : false}
                label="Email"
                id="email"
                fullWidth
                className={classes.authTextField}
                helperText={isInvalidEmail ? 'Invalid Email' : ''}
                autoComplete="off"
                onChange = {(e) => {
                  setEmail(e.target.value)
                  setIsInvalidEmail(false)
                }}
                value={email}
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
                error={isInvalidPassword ? true : false}
                name="password"
                fullWidth
                id="password"
                className={classes.authTextField}
                helperText={isInvalidPassword ? 'Invalid Password' : ''}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setIsInvalidPassword(false)
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
              <Button
                variant="contained"
                type="submit"
                color="default"
                className={classes.submitButton}
              >
                Login
              </Button>
            </form>

            {!IsCustomerLoggedin && alertMessage && <div style={{width: "100%", display:"flex", justifyContent:"center", marginTop: "3rem"}} className={classes.alertRoot}>
              <Alert severity="error" style={{width: "23rem", textAlign: "center"}}>{alertMessage}</Alert>
            </div>}
        </Grid>
      </>
    )
}

export default Login;
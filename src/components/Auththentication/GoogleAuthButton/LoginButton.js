// import { GoogleLogin } from 'react-google-login';
// import Button from "@material-ui/core/Button";
// import Icon from "@material-ui/core/Icon";
// import googleConfig from '../../../config/google.json'
// import google from "../../../assets/images/search.svg";
// import { makeStyles } from '@material-ui/core';
// import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//     googleButton: {
//         padding: theme.spacing(1),
//         marginTop: theme.spacing(4),
//         marginBottom: theme.spacing(3),
//         textTransform: "none",
//         backgroundColor: "#f0f0f0"
//     },
//     imageIcon: {
//         height: "100%",
//     },
// }))

// const LoginButton = () => {

//     const classes = useStyles();

//     const onLogin = (response) => {
//         console.log(response);
//         axios({
//             method: "POST",
//             url: "http://localhost:4001/api/googlelogin",
//             data: {tokenId: response.tokenId}
//         }).then(resp => {
//             console.log("Google login successful",resp) 
//         })
//     }

//     return (
//         <GoogleLogin
//             clientId={googleConfig.clientId}
//             onSuccess={onLogin}
//             onFailure={onLogin}
//             buttonText="Login"
//             isSignedIn={true}
//             cookiePolicy={'single_host_origin'}
//             render = {(renderProps) => (
//                 <Button variant="contained" 
//                     color = "default" 
//                     className = {classes.googleButton} 
//                     fullWidth
//                     onClick = {renderProps.onClick}
//                     disabled = {renderProps.disabled}
//                 >
//                     <Icon style={{ marginRight: "0.8rem" }}>
//                         <img src={google} alt="google" className={classes.imageIcon} />
//                     </Icon>
//                         Sign in with Google
//                 </Button>
//             )} 
//         />
//     )
// }

// export default LoginButton;
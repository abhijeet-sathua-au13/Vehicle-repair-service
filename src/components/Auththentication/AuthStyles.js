import { makeStyles } from "@material-ui/core";

const AuthStyles = makeStyles((theme) => ({
    authImageContainer: {
        height: "100%"
    },
    authTitle: {
        fontWeight: "bolder",
        color: "#222630"
    },
    authImageSec: {
        backgroundColor: "#f0f0f0",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "80vh"
    },
    authSignup: {
        height: "95%",
        width: "100%",
        backgroundColor: "#222630",
    },
    mechanicAuthSignup: {
        height: "80%",
        width: "100%",
        backgroundColor: "#222630",
    },
    mechanicAuthLogin: {
        height: "80%",
        width: "100%",
        backgroundColor: "#222630",
    },
    authSignin: {
        height: "80%",
        width: "100%",
        backgroundColor: "#222630",
    },
    userAuthForm: {
        width: "25rem",
        [theme.breakpoints.down("md")]: {
            width: "19rem"
        }
    },
    mechanicAuthForm: {
        width: "25rem",
        [theme.breakpoints.down("md")]: {
            width: "19rem"
        }
    },
    googleButton: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3),
        textTransform: "none"
    },
    imageIcon: {
        height: "100%",
    },
    divider: {
        color: "#a0a0a0", 
        marginBottom: theme.spacing(3),

    },
    authTextField: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f0f0f0",
            borderRadius: "5px",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f0f0f0",
            color: "#a0a0a0"
          },
          marginBottom: theme.spacing(3),
    },
    cssOutlinedInput: {
        color: "#a0a0a0"
       
    },
    cssFocused: {
        backgroundColor: "#121212",
        color: "white"
    },
    cssLabel: {
            color: "#a0a0a0",
        "&.Mui-focused": {
            color: "#ffffff"
        }
    },
    submitButton: {
        textTransform: "none",
        marginTop: theme.spacing(2),
        minWidth: "12rem",
        fontSize: '1.2em'
    },
    navigateToSingup: {
        marginRight: "2rem", 
        color: "#a0a0a0", 
        marginBottom: "2rem",
        marginTop: "2em"
    },
    navigateToSingin: {
        marginRight: "2rem", 
        color: "#a0a0a0", 
        marginBottom: "2rem",
        marginTop: "1em"
    },
    alertRoot: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }
}));

export default AuthStyles;
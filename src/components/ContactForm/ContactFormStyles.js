import { makeStyles } from "@material-ui/core";
import location from '../../assets/images/officeLoc.png';


const ContactFormStyles = makeStyles((theme) => ({
    contactFormRoot: {
        padding: 0
    },
    contactForm: {
        backgroundColor: "#222630",
        paddingLeft: theme.spacing(6)
    },
    locationInfo: {
        backgroundImage: `url(${location})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        width: "100%"
    },
    formHeading: {
        fontWeight: "bolder",
        marginBottom: theme.spacing(3),
        color: "#f0f0f0"
    },
    formCaption: {
        fontSize: '1em',
        color: "#a0a0a0",
        marginBottom: theme.spacing(4)
    },
    contactTextFieldRoot: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#f0f0f0",
          borderRadius: "0px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#f0f0f0",
          boxShadow: '0 0 6px 0 rgba(240, 240, 240, 0.5)'
        },
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            width: "20rem"
        }
    },
    contactTextField: {
        color: "#f0f0f0"
    },
    
    contactButton: {
        marginTop: theme.spacing(2),
        color: "#222630",
        textTransform: "none",
        borderRadius: "0px",
        width: "18rem",
        padding: theme.spacing(1.5),
        fontSize: "1.15em"
    },
    contactFormFieldRoot: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    }
    
}));

export default ContactFormStyles;
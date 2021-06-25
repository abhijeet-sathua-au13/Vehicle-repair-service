import { makeStyles } from "@material-ui/core";


const ProfileStyles = makeStyles((theme) => ({
    profileRoot: {
        padding: theme.spacing(4),
        input: {
            display: "none",
        },
    },
    profileCard: {
        padding: theme.spacing(2),
        backgroundColor: "#222630"
    },
    large: {
        width: "8rem",
        height: "8rem",
        marginBottom: "0.8em"
    },
    profileName: {
        color: "#ffffff",
        marginBottom: "0.8em"
    },
    profileEmail: {
        color: "#ffffff",
        opacity: "0.4",
        marginBottom: "0.3em"
    },
    profilePhone: {
        color: "#ffffff",
        opacity: "0.4"
    },
    profileFormCard: {
        padding: theme.spacing(3),
        backgroundColor: "#222630"
    },
    profileFormTextField: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f0f0f0",
            borderRadius: "5px",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f0f0f0",
            color: "#a0a0a0"
          },
        marginBottom: theme.spacing(3)
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

profileFormButton: {
    textTransform: "none",
    marginTop: theme.spacing(1),
    minWidth: "8rem",
    fontSize: '1.2em'
},

uploadFileButton: {
    textTransform: "none",
    marginBottom: "1em",
    padding: "0.4em",
    fontSize: "0.9em"
},

mechanicRating: {
    color: "#f0f0f0",
}


}))

export default ProfileStyles;
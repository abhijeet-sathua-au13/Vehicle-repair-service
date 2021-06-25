import { makeStyles } from "@material-ui/core";
import car from "../../assets/images/demoCar2.png";

const HomeStyles = makeStyles((theme) => ({
  root: {
    // minHeight: "100vh",
    // backgroundImage: `linear-gradient(to bottom, #212738, #1d1f22 25%)`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // flexGrow: 1
  },
  gridRoot: {
    paddingLeft: "4em",
    [theme.breakpoints.down("sm")]:{
      paddingLeft: "1em"
    },
    flexGrow: 1,
  },
  container: {
    padding: "1em",
  },
  landingSec: {
    marginTop: theme.spacing(-5),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
    },
    minHeight: "70vh"
  },
  formGrid: {
    width: "rem",
    // minWidth: "20.6rem",
  },
  cardRoot: {
    backgroundColor: "#4d5260",
    color: "white",
    padding: theme.spacing(0),
    maxWidth: '28em'
  },
  imageSec: {
    backgroundImage: `url(${car})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "80% 100%",
    backgroundPosition: "right",
    height: "28rem",
    width: "20rem",
  },
  formRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  themeHeading: {
    fontSize: '4rem',
    [theme.breakpoints.up("md")]: {
      fontSize: '6rem'
    },
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    }
  },

  textFieldRoot: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#BCBCBC"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f0f0f0",
      boxShadow: '0 0 6px 0 rgba(240, 240, 240, 0.5)'
    },
    marginBottom: theme.spacing(1)
  },

  carTypeRoot: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#BCBCBC"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: '#f0f0f0',
      boxShadow: '0 0 6px 0 rgba(240, 240, 240, 0.5)'
    },
    marginBottom: theme.spacing(2)
  },
 
  mobileTextRoot: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#BCBCBC"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: '#f0f0f0',
      boxShadow: '0 0 6px 0 rgba(240, 240, 240, 0.5)'
    },
    marginBottom: theme.spacing(4)
  },

  textField: {
    width: '100%',
    padding: '10px 8px',
    color: 'white',
  },
  locationLabel: {
    marginBottom: theme.spacing(1),
  },
  button: {
    marginBottom: theme.spacing(2)
  },
  submitButton: {
    marginBottom: theme.spacing(1)
  },
  sliderContainer: {
    backgroundColor: '#222630',
    padding: '5em'
  },
  sliderTitle: {
    color: '#ffffff',
    fontWeight: 500,
    marginBottom: theme.spacing(5)
  },
  serviceDetails: {
    padding: '6em',
    backgroundColor: '#1d1f22',
    color: '#f0f0f0'
  },
  contactField: {
    margin: 0,
    padding: 0
  },
  FooterSec: {
    
  }
}));

export default HomeStyles;

import { makeStyles } from "@material-ui/core";
import carRepair from '../../assets/images/repair.png';
import carInterrior from '../../assets/images/insideCar.png';

const ServiceDescStyles = makeStyles((theme) => ({
    serviceDescRoot: {

    },
    serviceDescImage1: {
        backgroundImage: `url(${carRepair})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        minHeight: "60vh",
        width: "100%"
    },
    serviceDescImage2: {
        backgroundImage: `url(${carInterrior})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        minHeight: "60vh",
        width: "100%",
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "-5em"
        }
    },
    serviceDescDetails2: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "1em"
        }
    },
    detailTitle: {
        marginBottom: theme.spacing(3)
    },

    buttonStyle: {
        marginTop: theme.spacing(3),
        color: '#f0f0f0',
        borderColor: '#f0f0f0',
        borderRadius: '0px',
        textTransform: 'none'
    }

}));

export default ServiceDescStyles;
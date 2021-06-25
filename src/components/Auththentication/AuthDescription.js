import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import useStyles from "./AuthStyles";
import authImage from "../../assets/images/authImage.png";
import userAuthImage from "../../assets/images/userAuthImage.png";

const userRoutes = ['/user/login', '/user/signup',]

const AuthDescription = () => {

    const classes = useStyles();

    const {pathname} = useLocation();

    return (
        <>
            <Grid container direction="column" justify="center" alignItems="center" className={classes.authImageContainer} spacing={0}>
                <Typography variant="h3" align="center" className={classes.authTitle}>
                    Car Repair Service
                </Typography>
                <Typography align="center" style={{ marginTop: "1em", color: "#212738", opacity: "0.7" }}>
                    Register to get the best service by connect with us
                </Typography>
                <Grid container 
                className={classes.authImageSec} 
                spacing={0}
                style={{ 
                    backgroundImage: `url(${userRoutes.some((item) => pathname.includes(item)) ? userAuthImage : authImage})`,
                    backgroundSize: `${userRoutes.some((item) => pathname.includes(item)) ? "90% 80%": "70% 80%"}`
             }}
                ></Grid>
            </Grid>
        </>
    )
}

export default AuthDescription;
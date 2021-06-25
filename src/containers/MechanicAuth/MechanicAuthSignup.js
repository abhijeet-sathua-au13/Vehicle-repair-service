import useStyles from './MechanicAuthStyles';
import { Grid } from "@material-ui/core";
import AuthDescription from '../../components/Auththentication/AuthDescription';
import MechanicSignup from "../../components/Auththentication/MechanicAuthentication/MechanicSignup";


const MechanicAuthSignup = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.authRoot} spacing={0}>
                <Grid item xs={12} md={6} className={classes.authDetailsSec}>
                    <AuthDescription />
                </Grid>
                <Grid item xs={12} md={6} className={classes.authSection}>
                   <MechanicSignup />
                </Grid>
            </Grid>   
        </>
    )
}

export default MechanicAuthSignup;
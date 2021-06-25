import { Container, Grid } from "@material-ui/core";
import useStyles from './MechanicAuthStyles';
import AuthDescription from '../../components/Auththentication/AuthDescription';
import MechanicLogin from '../../components/Auththentication/MechanicAuthentication/MechanicLogin';



const MechanicAuthLogin = () => {

    const classes = useStyles();

    return(
        <Container maxWidth={false}>
            <Grid container className={classes.authRoot} spacing={0}>
                <Grid item xs={12} md={6} className={classes.authDetailsSec}>
                    <AuthDescription />
                </Grid>
                <Grid item xs={12} md={6} className={classes.authSection}>
                   <MechanicLogin />
                </Grid>
            </Grid> 
        </Container>
    )
}

export default MechanicAuthLogin;
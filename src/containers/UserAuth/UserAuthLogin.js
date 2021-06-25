import useStyles from './UserAuthStyles';
import { Grid } from "@material-ui/core";
import AuthDescription from '../../components/Auththentication/AuthDescription';
import Login from '../../components/Auththentication/UserAuthentication/Login';


const UserAuthLogin = () => {

    const classes = useStyles();

    return(
        <>
            <Grid container spacing={0} className={classes.authRoot}>
                <Grid item xs={12} md={6} className={classes.authDetailsSec}>
                    <AuthDescription />
                </Grid>
                <Grid item xs={12} md={6} className={classes.authSection}>
                    <Login />
                </Grid>
            </Grid>   
        </>
    )
}

export default UserAuthLogin;
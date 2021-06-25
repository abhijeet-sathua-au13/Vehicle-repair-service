import useStyles from './UserAuthStyles';
import { Grid } from "@material-ui/core";
import AuthDescription from '../../components/Auththentication/AuthDescription';
import Signup from '../../components/Auththentication/UserAuthentication/Signup';

const UserAuthSignup = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={0} className={classes.authRoot}>
                <Grid item xs={12} sm={6} className={classes.authDetailsSec}>
                    <AuthDescription />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.authSection}>
                    <Signup />
                </Grid>
            </Grid>   
        </>
    )
}

export default UserAuthSignup;
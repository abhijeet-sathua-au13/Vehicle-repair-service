import { Container, Grid, CardContent } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from "@material-ui/core";
import avatar from '../../../assets/images/user.png';
import Button from "@material-ui/core/Button";
import useStyles from '../ProfileStyles';
import ProfileTable from '../../../components/ProfileDataTabel/ProfileDataTable';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import customerProfileActions from "../../../redux/actions/customerProfileActions/customerProfileActions";

const CustomerProfile = () => {
    const classes = useStyles();

    const dispatch = useDispatch()

    const customerAuthLogin = useSelector(state => state.customerLogin);

    const customerProfileInfo = useSelector(state => state.customerProfile);

    useEffect(() => {
        if(customerAuthLogin){
            fetch('http://localhost:5001/api/customer-profile', {
                method: 'GET',
                credentials: 'include'
            }).then(resp => {
                return resp.json()
            }).then(respData => {
                dispatch(customerProfileActions.getCustomerInfo(respData.data))
            }).catch(err => {
                console.log(err)
            })
        }
    }, [customerAuthLogin,dispatch])

    return (
        <Container maxWidth={false}>
            <Grid container spacing={2} className={classes.profileRoot}>
                <Grid item xs={12} md={3} className={classes.profileImageSec}>
                    <Card className={classes.profileCard} align="center">
                        <CardContent >
                            <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
                            <Button
                                variant="contained"
                                component="label"
                                className={classes.uploadFileButton}
                                >
                                Upload Photo
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                            <Typography variant="h6" className={classes.profileName}>{customerProfileInfo.customerName}</Typography>
                            <Typography className={classes.profileEmail}>{customerProfileInfo.customerEmail}</Typography>
                            <Typography className={classes.profilePhone}>+91 {customerProfileInfo.customerPhone}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={9}>
                    <ProfileTable />
                </Grid>
            </Grid>
        </Container>
    )
}

export default CustomerProfile;
import { Container, Grid, CardContent } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from "@material-ui/core";
import avatar from '../../../assets/images/user.png';
import Button from "@material-ui/core/Button";
import useStyles from '../ProfileStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import customerProfileActions from "../../../redux/actions/customerProfileActions/customerProfileActions";
import customerHistoryActions from "../../../redux/actions/customerHistoryActions/customerHistoryActions";

const CustomerProfile = () => {
    const classes = useStyles();

    const dispatch = useDispatch()

    const customerAuthLogin = useSelector(state => state.customerLogin);

    const customerProfileInfo = useSelector(state => state.customerProfile);

    const customerServices = useSelector(state => state.customerServices.servicesUsed);

    useEffect(() => {
        if(customerAuthLogin){
            fetch(`${process.env.REACT_APP_API_URL}/api/customer-profile`, {
                method: 'GET',
                credentials: 'include',
                withCredentials: true,
            }).then(resp => {
                return resp.json()
            }).then(respData => {
                dispatch(customerHistoryActions.getCustomerServicesUsed(respData.data.serviceslist))
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
                <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor: "#383c45" }}>
          <TableRow >
            <TableCell width="30%" style={{color: "#f0f0f0"}}>Service Name</TableCell>
            <TableCell width="30%" align="left" style={{color: "#f0f0f0"}}>Service Description</TableCell>
            <TableCell width="20%" align="left" style={{color: "#f0f0f0"}}>Price</TableCell>
            <TableCell width="20%" align="left" style={{color: "#f0f0f0"}}>Rating Gained</TableCell>
            {/* <TableCell align="left" style={{color: "#f0f0f0"}}>Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor: "#222630"}}>
          {customerServices.map((service,index) => (
            <TableRow key={index} className={classes.tableRow}>
              <TableCell component="th" scope="row" style={{color: "#a0a0a0"}}>
                {service.servicename}
              </TableCell>
              <TableCell align="left" style={{color: "#a0a0a0"}}>{service.description}</TableCell>
              <TableCell align="left" style={{color: "#a0a0a0"}}>{service.price}</TableCell>
              <TableCell align="left" style={{color: "#a0a0a0"}}>
                <Rating name="read-only" style={{color: '#a0a0a0'}} value={service.rating} readOnly />
              </TableCell>
              {/* <TableCell align="left" style={{color: "#a0a0a0"}}>{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CustomerProfile;
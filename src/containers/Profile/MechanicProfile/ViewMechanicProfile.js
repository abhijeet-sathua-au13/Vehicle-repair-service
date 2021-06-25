import { CardContent, Container, Grid } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import useStyles from "../ProfileStyles";
import Card from '@material-ui/core/Card';
import avatar from '../../../assets/images/user.png';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';


import ReadOnlyProfileTable from "../../../components/ProfileDataTabel/ReadOnlyProfileTable";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import mechanicDetailsActions from "../../../redux/actions/mechaniDetailsActions/mechanicDetailsActions";
import loaderActions from "../../../redux/actions/loaderActions/loaderActions";


const ViewMechanicProfile = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useHistory();

    const match = useRouteMatch();

    const mechanicProfileDetails = useSelector(state => state.mechanicProfileDetails.mechanicProfileDetails)
    const mechanicServicesDetails = useSelector(state => state.mechanicProfileDetails.mechanicProfileDetails.serviceslist)

    useEffect(() => {

        dispatch(loaderActions.start())

        const path = `https://service-anywhere.herokuapp.com/api/select-serviceman/${match.params.id}`;

            return fetch(path, {
                method: 'GET',
                credentials: 'include'
            })
                .then(resp => resp.json())
                .then(respData => {
                    console.log(respData)
                    dispatch(mechanicDetailsActions.mechanicDetails(respData.data[0]))
                    dispatch(mechanicDetailsActions.mechanicServices(respData.data[0].serviceslist))
                    dispatch(loaderActions.stop())
                }).catch(err => {
                    console.log(err);
                    dispatch(loaderActions.stop())
                })
    }, [match.params.id, dispatch])

    const showThisServiceDetails = (event, mechanicId, serviceId) => {
        event.preventDefault()
        history.push(`/service/${mechanicId}/${serviceId}`)
    }

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} className={classes.profileRoot}>
            <Grid item xs={12} md={3} className={classes.profileImageSec}>
                <Card className={classes.profileCard} align="center">
                    <CardContent>
                        <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
                            <Typography variant="h6" className={classes.profileName}>
                                {mechanicProfileDetails.name}
                            </Typography>
                            <Typography className={classes.profileEmail}>
                                {mechanicProfileDetails.email}
                            </Typography>
                            <Typography className={classes.profilePhone}>
                                {mechanicProfileDetails.phone}
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={9} className={classes.profileData}>
                <ReadOnlyProfileTable>
                    {mechanicServicesDetails.map((service, index) => {
                        return (
                            <TableRow className={classes.tableRow} key={index}>
                                <TableCell component="th" scope="row" style={{color: "#a0a0a0"}}>
                                        {service.name}
                                </TableCell>
                                <TableCell align="left" style={{color: "#a0a0a0"}}>{service.description}</TableCell>
                                <TableCell align="left" style={{color: "#a0a0a0"}}>&#8377; {service.price}</TableCell>
                                <TableCell align="left" style={{color: "#a0a0a0"}}>
                                    <Rating  name="read-only" readOnly style={{color: '#f0f0f0'}} className={classes.mechanicRating} value={service.rating} />
                                </TableCell>
                                <TableCell align="left" style={{color: "#a0a0a0"}}>
                                    <Button variant="contained" style={{textTransform: 'none'}} onClick={(e) => showThisServiceDetails(e, mechanicProfileDetails._id, service._id)}>See Service</Button>
                                </TableCell>
                            </TableRow>
                        )
                    }) 
                   
}
                </ReadOnlyProfileTable>
            </Grid>
        </Grid>
    </Container>
  );
};

export default ViewMechanicProfile;

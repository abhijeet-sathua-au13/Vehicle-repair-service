import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ServiceProvider from '../../components/ServiceProvider/ServiceProvider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { useDispatch, useSelector } from 'react-redux';
import serviceProvidersActions from '../../redux/actions/serviceProvidersActions/serviceProvidersActions';
import { useHistory } from 'react-router-dom';
import PATHS from '../../config/webPath';

const useStyles = makeStyles((theme) => ({
    serviceProvidersRoot: {
        padding: theme.spacing(3),
        paddingTop: theme.spacing(1)
    },
    buttonFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1em',
        alignItems: 'center'

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
        borderRadius: '8px',
    },
    rootFirstSelect: {
        paddingTop: "10px",
        paddingBottom: "10px"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
    mapView: {
        display: 'flex',
        width: "100%",
        height: "40vh",
        marginBottom: '2rem'
    },
    mapViewSnap: {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
    }
}));


const ServiceProviders = () => {
    const classes = useStyles();

    const [sortBy, setSortBy] = useState('');

    const[isRefreshed, setIsRefreshed] = useState(false)

    const dispatch = useDispatch();

    const history = useHistory();

    const nearByServiceProviders = useSelector(state => state.nearByServiceProviders.serviceProviders);

    useEffect(() => {
        fetch('https://service-anywhere.herokuapp.com/api/askforservice', {
            method: 'GET',
            credentials: 'include',
        }).then(response => {
            return response.json()
        }).then(responseData => {
            console.log(responseData)
            dispatch(serviceProvidersActions.getServiceProvidersList(responseData.data));
            setIsRefreshed(true)
        }).catch(err => {
            console.log(err)
        })
    },[dispatch,isRefreshed])

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    const showMechanicProfile = (event,id) => {
        event.preventDefault();
        history.push(`/view/mechanic/profile/${id}`)
    }

    return (
        <Container maxWidth={false} className={classes.serviceProvidersRoot}>
            <Typography variant="h4" style={{color: '#ffffff', fontWeight: 'bold', marginBottom: "1em"}}>Services Nearby</Typography>
            <Box className={classes.buttonFlex}>
                <Button type="button" variant="contained" style={{textTransform: 'none'}}>Map View</Button>
                <FormControl variant="filled" className={classes.formControl} style={{backgroundColor: '#383c45', }}>
                    <InputLabel id="demo-simple-select-outlined-label" style={{color: '#a0a0a0', marginTop: "-7px"}}>Sort By</InputLabel>
                    <Select
                     labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={sortBy}
                        onChange={handleChange}
                        label="Sort By"
                        disableUnderline={true}
                        classes={{root: classes.rootFirstSelect}}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className={classes.mapView}>
                <img src="https://wpuploads.appadvice.com/wp-content/uploads/2015/03/googlemaps.jpg" alt="google map" className={classes.mapViewSnap} />
            </Box>
            <Grid container spacing={3} >
                {nearByServiceProviders.map((serviceProvider, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <ServiceProvider servicemanName={serviceProvider.name} servicemanEmail={serviceProvider.email} servicemanPhone={serviceProvider.phone} servicemanrating={3} showMechanicProfile={(e) => showMechanicProfile(e,serviceProvider._id)} />
                        </Grid>
                    )
                })
                }
            </Grid>
        </Container>
    )
}

export default React.memo(ServiceProviders);
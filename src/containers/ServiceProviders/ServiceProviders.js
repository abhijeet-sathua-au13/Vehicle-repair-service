import React, { useEffect, useRef, useState } from 'react';
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

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import { useDispatch, useSelector } from 'react-redux';
import serviceProvidersActions from '../../redux/actions/serviceProvidersActions/serviceProvidersActions';
import { useHistory } from 'react-router-dom';
// import PATHS from '../../config/webPath';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGhhdmFsLWNoYW5nYW5pIiwiYSI6ImNrbjFpM3IxYTBtbnkybmxydzU2aTIxMjcifQ.Jl8-WAK10F9F3hLN_w3_Uw';

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
        height: "50vh",
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

    const [showMapView, setShowMapView] = useState(false);

    // eslint-disable-next-line
    const[isRefreshed, setIsRefreshed] = useState(false)

    const dispatch = useDispatch();

    const history = useHistory();

    const nearByServiceProviders = useSelector(state => state.nearByServiceProviders.serviceProviders);

    const mapContainer = useRef(null);


    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [70.774819, 22.323741],
            zoom: 9
        })

        const getStores = () => {
            fetch(`${process.env.REACT_APP_API_URL}/api/askforservice/100000`, {
                method: 'GET',
                credentials: 'include',
                withCredentials: true,
            }).then(response => {
                return response.json()
            }).then(respData => {
                const providers = Object.values(respData.data)
                dispatch(serviceProvidersActions.getServiceProvidersList(providers));
                setUserData(providers)
                setIsRefreshed(true)
            }).catch(err => {
                console.log(err)
            })
    
            const serviceMan = userData.map((store) => {
                return {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [
                        serviceMan.location.coordinates[0],
                        serviceMan.location.coordinates[1]
                        ]
                    },
                    properties: {
                        storeId: serviceMan.name,
                        icon: 'shop'
                    }
                };
            })

            serviceMan.forEach((store, i) => {
                store.properties.id = i;
            })
        
            loadMap(serviceMan)
        }

        const loadMap = (stores) => {
            map.on('load', () => {
                map.addLayer({
                    id: 'points',
                    type: 'symbol',
                    source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: stores
                    }
                    },
                    layout: {
                    'icon-image': '{icon}-15',
                    'icon-size': 2.5,
                    'text-field': '{storeId}',
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 0.9],
                    'text-anchor': 'top'
                    }
                });
                });
        }

        getStores();
    
        return () => map.remove();
        // eslint-disable-next-line
    },[mapContainer, dispatch])
    

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    const showMechanicProfile = (event,id) => {
        event.preventDefault();
        history.push(`/view/mechanic/profile/${id}`)
    }

    const showMapViewToUser = (event) => {
        event.preventDefault();
        setShowMapView(!showMapView);
    }


    return (
        <Container maxWidth={false} className={classes.serviceProvidersRoot}>
            <Typography variant="h4" style={{color: '#ffffff', fontWeight: 'bold', marginBottom: "1em"}}>Services Nearby</Typography>
            <Box className={classes.buttonFlex}>
                <Button type="button" variant="contained" style={{textTransform: 'none'}}onClick={(e) => showMapViewToUser(e)} >Map View</Button>
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
                    <MenuItem value="rating">Rating</MenuItem>
                    <MenuItem value="price">Price</MenuItem>
                    </Select>
                </FormControl>
            </Box>
           
                <div ref={mapContainer} className={classes.mapViewSnap} />

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
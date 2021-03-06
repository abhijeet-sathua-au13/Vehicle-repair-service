import { Typography } from "@material-ui/core";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    serviceDetailsRoot: {
        height: '100vh'
    },
    serviceName: {
        backgroundColor: '#222630',
        padding: theme.spacing(3),
        color: '#f0f0f0',
    },
    service: {
        marginTop: theme.spacing(3),
        fontSize: '1.2em',
        color: "#a0a0a0"
    },
    servicePrice: {
        backgroundColor: '#222630',
        padding: theme.spacing(3),
        color: '#f0f0f0',
    },
    price: {
        marginTop: theme.spacing(3),
        fontSize: '1.2em',
        color: "#a0a0a0"
    },
    serviceDescription: {
        backgroundColor: '#222630',
        padding: theme.spacing(3),
        color: '#f0f0f0',
        minHeight: 270
    },
    serviceDesc: {
        color: '#a0a0a0',
        marginTop: theme.spacing(3),
        
    },
    ratingCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222630',
        padding: theme.spacing(3),
        color: '#f0f0f0',
    },
    ratingGrid: {
        marginTop: "-5em"
    }



}))

const UserChosenService = () => {

    const classes = useStyles();

    const [rating, setRating] = useState('');
    const [serviceDesc, setServiceDesc] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [serviceCost, setServiceCost] = useState('');
    const match = useRouteMatch();

    useEffect(() => {
        const path = `${process.env.REACT_APP_API_URL}/api/select-service/${match.params.mechanicId}/${match.params.serviceId}`

        fetch(path, {
            method: 'GET',
            credentials: 'include',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((respData) => {
            setServiceName(respData.data.name);
            setServiceCost(respData.data.price);
            setServiceDesc(respData.data.description)
        }).catch((err) => {
            console.log(err)
        })
},[match.params.mechanicId, match.params.serviceId])

const submitRatingHandler = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/api/update-rating/${match.params.mechanicId}/${match.params.serviceId}/${rating}`, {
        method: 'POST',
        credentials: 'include',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.json();
    }).then(resData => {
        return
    }).catch(err => {
        console.log(err)
    })
}

    return (
        <Container maxWidth={false} style={{padding: '1.2rem'}}>
            <Grid container spacing={3} className={classes.serviceDetailsRoot} >
                <Grid item xs={12} sm={4} className={classes.serviceNameAndPrice} >
                    <Grid container spacing={2} direction="column">
                        <Grid item >
                            <Card className={classes.serviceName}>
                                <Typography variant="h5">Service Name</Typography>
                                <Typography className={classes.service}>{serviceName}</Typography>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.servicePrice}>
                                <Typography variant="h5">Price</Typography>
                                <Typography className={classes.price}>
                                    &#8377; {serviceCost}
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Card className={classes.serviceDescription}>
                        <Typography variant="h5">Service Description</Typography>
                        <Typography className={classes.serviceDesc}>{serviceDesc}</Typography>                       
                    </Card>
 
                </Grid>

                <Grid item xs={12} >
                    <Grid container justify="center" alignItems="center" className={classes.ratingGrid}>
                        <Card className={classes.ratingCard}>
                            <Typography variant="h6" style={{marginBottom: '1rem'}}>Please, give rating to this service</Typography>
                            <Rating
                            name="simple-controlled"
                            value={rating}
                            style={{color: "#f0f0f0"}}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                        <Button variant="contained" style={{textTransform: 'none', marginTop: '1.4em'}} onClick={submitRatingHandler}>Submit</Button>
                        </Card>
                    
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserChosenService;
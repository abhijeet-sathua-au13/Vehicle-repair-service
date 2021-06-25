import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import avatar from '../../assets/images/user.png';
import Box from '@material-ui/core/Box';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    serviceProviderRoot: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        backgroundColor: '#222630',
    },
    cardMediaandContent: {
        display: 'flex',
        marginBottom: theme.spacing(1)
    },
    providerImage: {
        width: 151,
        height: 151,
        borderRadius: '3px',
    },
    providerContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    providerName: {
        fontSize: '1.5em',
        color: '#ffffff'
    },
    providerEmail: {
        fontSize: '1rem',
        color: '#ffffff',
        opacity: '0.4'
    },
    providerPhone: {
        fontSize: '1rem',
        color: '#ffffff',
        opacity: '0.4',
        marginBottom: theme.spacing(3)
    },
    actionsAndView:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    seeProfileButton: {
        textTransform: 'none',
        color: '#222630'
    },
    placeBox: {
        display: 'flex',
        backgroundColor: '#1d1f22',
        alignItems: 'center',
        justifyContent: 'center',
        width: '8rem',
        borderRadius: '5px',
        padding: theme.spacing(1),
        color: '#f0f0f0',
    },

}));

const ServiceProvider = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.serviceProviderRoot}>
            <Box className={classes.cardMediaandContent}>   
                <CardMedia className={classes.providerImage} image={avatar} title="Service Provider Images" />
                <CardContent className={classes.ProviderContent}>
                    <Typography variant="h6" className={classes.providerName}>{props.servicemanName}</Typography>
                    <Typography className={classes.providerEmail}>{props.servicemanEmail}</Typography>
                    <Typography className={classes.providerPhone}>+91 {props.servicemanPhone}</Typography>
                    <Rating name="read-only" value={props.servicemanRating} readOnly style={{color: '#dedede'}}/>
                </CardContent>
            </Box>
            <Box className={classes.actionsAndView}>

            <Button variant="contained" onClick={props.showMechanicProfile} className={classes.seeProfileButton}>See Profile</Button>
            </Box>
        </Card>
    )

}

export default ServiceProvider;
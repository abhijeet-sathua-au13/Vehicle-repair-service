import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

const Loader = () => {

    const classes = useStyles();

    const loader = useSelector(state => state.loader);

    return (
        <Backdrop className={classes.backdrop} open={loader}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loader;
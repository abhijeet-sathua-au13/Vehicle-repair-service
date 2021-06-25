import { CssBaseline } from '@material-ui/core';
import NavBar from '../AppNavBar/NavBar';
import Loader from '../Loader/Loader';
import useStyles from './LayoutStyles';

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Loader />
            <CssBaseline />
            <NavBar />
            {children}
        </div>
    )
}

export default Layout;
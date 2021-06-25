import { makeStyles } from "@material-ui/core";

const LayoutStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundImage: `linear-gradient(to bottom, #212738, #1d1f22 5%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
}));

export default LayoutStyles;
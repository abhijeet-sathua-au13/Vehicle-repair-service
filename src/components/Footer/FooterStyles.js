import { makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles((theme) => ({
    FooterRoot: {
        backgroundColor: "#f0f0f0",
        padding: theme.spacing(8),
        paddingBottom: "0px"
    },
    aboutHead: {
        color: "#222630",
        marginBottom: theme.spacing(2)
    },

    aboutCaption: {
        color: "#222630",
        opacity: "0.8",
        maxWidth: "15rem"
    },
    socialLink: {
        width: "3rem",
        height: "3rem",
        marginRight: "1rem",

    },
    footerBottom: {
        marginTop: theme.spacing(2),
        backgroundColor: "#222630",
        color: "#a0a0a0",
        padding: theme.spacing(4),
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        width: "25rem",
        fontSize: "1.2em",
        textAlign: "center"
    }
}))

export default FooterStyles;
import { makeStyles } from "@material-ui/core";

const OtpModalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#f0f0f0",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  resend: {
    backgroundColor: "#222630",
    color: "#ffffff",
  },
}));

export default OtpModalStyles;

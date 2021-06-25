import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import useStyles from "./serviceDescStyles";
import Button from '@material-ui/core/Button';

const ServiceDesc = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.serviceDescRoot}>
      <Grid item md={7} className={classes.serviceDescImage1}></Grid>
      <Grid
        item
        md={5}
        className={classes.serviceDescDetails}
        style={{ padding: "1rem 5em" }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ minHeight: "60vh" }}
        >
          <Typography variant="h4" className={classes.detailTitle} align="left">
            Lorem Ipsum
          </Typography>
          <Typography align="left" style={{ color: "#a0a0a0" }}>
            Lorem Ipsum is simply dummy text of the printing and typesettin
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </Typography>

          <Button variant="outlined" color="default" className={classes.buttonStyle}>Join Now</Button>
        </Grid>
      </Grid>
      <Grid item md={5} className={classes.serviceDescDetails2} style={{ padding: "1rem 5em" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ minHeight: "60vh" }}
        >
          <Typography variant="h4" className={classes.detailTitle} align="left">
            Lorem Ipsum
          </Typography>
          <Typography align="left" style={{ color: "#a0a0a0" }}>
            Lorem Ipsum is simply dummy text of the printing and typesettin
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </Typography>

          <Button variant="outlined" color="default" className={classes.buttonStyle}>Join Now</Button>

        </Grid>
      </Grid>
      <Grid item md={7} className={classes.serviceDescImage2} style={{marginTop: "5em"}}></Grid>
    </Grid>
  );
};

export default ServiceDesc;

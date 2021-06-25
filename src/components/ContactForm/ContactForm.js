import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useStyles from "./ContactFormStyles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const ContactForm = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.contactFormRoot}>
      <Grid item xs={12} md={6} className={classes.contactForm}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ minHeight: "90vh", maxWidth: "25rem" }}
        >
          <Typography variant="h5" align="left" className={classes.formHeading}>
            Contact with Us
          </Typography>
          <Typography align="left" className={classes.formCaption}>
            It's very easy to get in touch with us. Just use the contact form or
            pay us a visit for a coffee at the office.
          </Typography>
          <form autoComplete="off" className={classes.contactFormFieldRoot}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              required
              fullWidth
              className={classes.contactTextFieldRoot}
              InputProps={{
                    classes: {input: classes.contactTextField}
              }}
              InputLabelProps={{
                  style: {color: "#a0a0a0"}
              }}
            />
            <TextField
              id="mobile"
              name="mobile"
              label="Mobile"
              variant="outlined"
              required
              fullWidth
              className={classes.contactTextFieldRoot}
              InputProps={{
                    classes: {input: classes.contactTextField}
              }}
              InputLabelProps={{
                  style: {color: "#a0a0a0"}
              }}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              required
              fullWidth
              className={classes.contactTextFieldRoot}
              InputProps={{
                    classes: {input: classes.contactTextField}
              }}
              InputLabelProps={{
                  style: {color: "#a0a0a0"}
              }}
            />

            <Button type="submit" variant="contained" className={classes.contactButton}>Submit</Button>
          </form>
        </Grid>
      </Grid>
      <Grid item md={6} className={classes.locationInfo}></Grid>
    </Grid>
  );
};

export default ContactForm;

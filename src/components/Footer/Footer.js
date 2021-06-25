import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import useStyles from "./FooterStyles";
import facebook from '../../assets/images/facebook.png';
import linkedin from '../../assets/images/linkedin.png';
import instagram from '../../assets/images/insta.png';
import twitter from '../../assets/images/twitter.png';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.FooterRoot}>
      <Grid item sm={3}>
        <Typography variant="h5" className={classes.aboutHead} align="left">About</Typography>
        <Typography className={classes.aboutCaption} align="left">
          Lorem Ipsum is simply dummy text of the printing and typeset in
          industry.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
      <Typography variant="h5" className={classes.aboutHead} align="left">Email</Typography>
        <Typography className={classes.aboutCaption} align="left">
          johndoe2@gmail.com
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
      <Typography variant="h5" className={classes.aboutHead} align="left">Contact</Typography>
        <Typography className={classes.aboutCaption} align="left">
            +86 777333888
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
            <Typography variant="h5" className={classes.aboutHead} align="left">Follow us on</Typography>
            <Grid item xs={12}>
                    <Grid container justify="flex-start">
                        <img src={facebook} alt="facebook" className={classes.socialLink}/>
                        <img src={linkedin} alt="facebook" className={classes.socialLink}/>
                        <img src={instagram} alt="facebook" className={classes.socialLink}/>
                        <img src={twitter} alt="facebook" className={classes.socialLink}/>
                    </Grid>
            </Grid>
      </Grid>
      <Grid item xs={12}>
          <Grid container justify="center">
              <Box color="text.default" className={classes.footerBottom}>&copy; All 2021 Copyright Reserved</Box>
          </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;

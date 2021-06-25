import { makeStyles } from "@material-ui/core/styles";



const AppNavBarStyles = makeStyles((theme) => ({
  appBarStyle: {
    backgroundColor: 'transparent',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionLinks: {
    marginLeft: theme.spacing(-4),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  links:{
    marginRight: theme.spacing(5), 
  },
  title: {
    // display: "none",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logo: {
    height: '4rem'
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default AppNavBarStyles;

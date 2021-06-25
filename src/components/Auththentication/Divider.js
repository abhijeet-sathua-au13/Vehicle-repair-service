import { Grid, Divider as MuiDivider } from "@material-ui/core";

const Divider = ({ children, ...props }) => {
  return (
    <Grid container alignItems="center" spacing={2} {...props}>
      <Grid item xs>
        <MuiDivider style={{background: "#a0a0a0"}}/>
      </Grid>
      <Grid item>{children}</Grid>
      <Grid item xs>
        <MuiDivider style={{background: "#a0a0a0"}}/>
      </Grid>
    </Grid>
  );
};

export default Divider;
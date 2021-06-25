import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    border: "2px solid #383c45",
    minWidth: 650,
    "& .MuiTableCell-root ": {
        borderBottom: "2px solid #1d1f22"
      }
  },

});



const MechanicProfileTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor: "#383c45" }}>
          <TableRow >
            <TableCell width="30%" style={{color: "#f0f0f0"}}>Service Name</TableCell>
            <TableCell width="30%" align="left" style={{color: "#f0f0f0"}}>Service Description</TableCell>
            <TableCell width="20%" align="left" style={{color: "#f0f0f0"}}>Price</TableCell>
            <TableCell width="20%" align="left" style={{color: "#f0f0f0"}}>Rating Gained</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor: "#222630"}}>
            {props.children}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MechanicProfileTable;
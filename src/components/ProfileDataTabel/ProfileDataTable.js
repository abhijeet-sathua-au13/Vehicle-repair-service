import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt', 159, 6666, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
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
            {/* <TableCell align="left" style={{color: "#f0f0f0"}}>Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor: "#222630"}}>
          {rows.map((row,index) => (
            <TableRow key={index} className={classes.tableRow}>
              <TableCell component="th" scope="row" style={{color: "#a0a0a0"}}>
                {row.name}
              </TableCell>
              <TableCell align="left" style={{color: "#a0a0a0"}}>{row.fat}</TableCell>
              <TableCell align="left" style={{color: "#a0a0a0"}}>{row.calories}</TableCell>
              <TableCell align="left" style={{color: "#a0a0a0"}}>{row.carbs}</TableCell>
              {/* <TableCell align="left" style={{color: "#a0a0a0"}}>{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

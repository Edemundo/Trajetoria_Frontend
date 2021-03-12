import React from 'react';

import {
  withStyles, Theme, createStyles, makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) => createStyles({
  head: {
    backgroundColor: '#692172',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme: Theme) => createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme: Theme) => createStyles({

  table: {
    minWidth: 100,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CidadaoVinculadoSISATable(
  props: { headers: Array<string>, values: any },
):JSX.Element {
  const classes = useStyles();

  const { headers, values } = props;

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((header: string) => (
                <StyledTableCell>{header}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((row:any) => (
              <StyledTableRow key={row.attribute1}>
                <StyledTableCell>{row.attribute1}</StyledTableCell>
                <StyledTableCell>{row.attribute1}</StyledTableCell>
                <StyledTableCell>{row.attribute1}</StyledTableCell>
                <StyledTableCell>{row.attribute1}</StyledTableCell>
                <StyledTableCell>{row.attribute1}</StyledTableCell>
                <StyledTableCell>{row.attribute1}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

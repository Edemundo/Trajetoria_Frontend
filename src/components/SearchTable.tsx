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

import ColorButton from './ColorButton';

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
  purple: {

  },
  table: {
    minWidth: 700,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SearchTable(
  props: { headers: Array<string>, values: any },
):JSX.Element {
  const classes = useStyles();

  const { headers, values } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header: string) => (
              <StyledTableCell align="center">{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((row:any) => (
            <StyledTableRow key={row.codigoCidadao}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.codigoCidadao}
              </StyledTableCell>
              <StyledTableCell align="center">{row.nome}</StyledTableCell>
              <StyledTableCell align="center">{row.nomeMae}</StyledTableCell>
              <StyledTableCell align="center">{row.dataNascimento}</StyledTableCell>
              <StyledTableCell align="center">{row.cpf}</StyledTableCell>
              <StyledTableCell align="center">{row.nis}</StyledTableCell>
              <StyledTableCell align="center">
                {' '}
                <ColorButton
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                  href="/details"
                >
                  DETALHAR
                </ColorButton>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

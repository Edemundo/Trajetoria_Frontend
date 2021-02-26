import React from 'react';

import {
  withStyles, Theme, createStyles, makeStyles, createMuiTheme,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

import { Header, Footer, BodySearch } from './styles';

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const StyledTableCell = withStyles((theme: Theme) => createStyles({
  head: {
    backgroundColor: theme.palette.common.black,
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

function createData(
  codigoCidadao: string,
  nome: number,
  nomeMae: number,
  dataNascimento: number,
  cpf: number,
  nis: number,
) {
  return {
    codigoCidadao, nome, nomeMae, dataNascimento, cpf, nis,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 2),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2),
  createData('Eclair', 262, 16.0, 24, 6.0, 2),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 2),
];

const useStyles = makeStyles((theme: Theme) => createStyles({
  margin: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 700,
  },

}));
const Search: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <h1>
          Secretaria Municipal de Assistência e Desenvolvimento Social
        </h1>
        <p>
          Coordenadoria de Gestão de Benefícios - CGB
        </p>
      </Header>
      <BodySearch>
        <h1>
          Trajetória do Cidadão
        </h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">nomeMae&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">dataNascimento&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">cpf&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">nis&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">   </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.codigoCidadao}>
                  <StyledTableCell component="th" scope="row">
                    {row.codigoCidadao}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.nome}</StyledTableCell>
                  <StyledTableCell align="right">{row.nomeMae}</StyledTableCell>
                  <StyledTableCell align="right">{row.dataNascimento}</StyledTableCell>
                  <StyledTableCell align="right">{row.cpf}</StyledTableCell>
                  <StyledTableCell align="right">{row.nis}</StyledTableCell>
                  <StyledTableCell align="right">
                    {' '}
                    <ColorButton variant="contained" color="primary" className={classes.margin}>
                      DETALHAR
                    </ColorButton>

                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </BodySearch>
      <Footer>
        Rodapé
      </Footer>
    </>
  );
};

export default Search;

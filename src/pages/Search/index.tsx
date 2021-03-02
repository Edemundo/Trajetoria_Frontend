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
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';

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

function createData(
  codigoCidadao: number,
  nome: string,
  nomeMae: string,
  dataNascimento: string,
  cpf: string,
  nis: number,
) {
  return {
    codigoCidadao, nome, nomeMae, dataNascimento, cpf, nis,
  };
}

const rows = [
  createData(33333, 'Oswald de Andrade', 'Cecilia Meirelles', '01/03/2021', '320.465.660-84', 251515),
  createData(33333, 'Oswald de Andrade', 'Cecilia Meirelles', '01/03/2021', '320.465.660-84', 251515),
];

const useStyles = makeStyles((theme: Theme) => createStyles({
  margin: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 700,
  },
  tableContainer: {
    marginBottom: '8rem',
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
          COVS - Coordenação do Observatório da Vigilância Socioassistencial
        </p>
      </Header>
      <BodySearch>
        <h1>
          Trajetória do Cidadão
        </h1>
        <h2>Resultado(s) encontrado(s). Escolha o mais adequado:</h2>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Código do Cidadão</StyledTableCell>
                <StyledTableCell align="center">Nome</StyledTableCell>
                <StyledTableCell align="center">Nome da mãe</StyledTableCell>
                <StyledTableCell align="center">Data de Nascimento</StyledTableCell>
                <StyledTableCell align="center">CPF</StyledTableCell>
                <StyledTableCell align="center">NIS</StyledTableCell>
                <StyledTableCell align="center">   </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
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
                    <ColorButton variant="contained" color="primary" className={classes.margin} href="/details">
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
        Versão teste
      </Footer>
    </>
  );
};

export default Search;

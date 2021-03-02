import React from 'react';

import {
  withStyles, Theme, createStyles, makeStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Header, Footer, DetailsBody } from './styles';

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme: Theme) => createStyles({
  margin: {
    margin: theme.spacing(1),
    maxHeight: 35,
    maxwidth: 60,
    fontSize: 15,
  },
  table: {
    minWidth: 100,
  },
  tableContainer: {
    maxWidth: 700,
    marginBottom: 10,
    maxHeight: 798.5,
  },
  tableContainer1: {
    marginBottom: 20,

  },
  tableContainer2: {
    maxWidth: 700,
    marginBottom: 10,
    maxHeight: 268.5,
  },
}));

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

function createData(name: string, calories: string, fat: string, carbs: string, protein: string) {
  return {
    name, calories, fat, carbs, protein,
  };
}

function createDataDadosPessoais(name: string, value: string) {
  return {
    name, value,
  };
}

const rows = [
  createData('Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'),
  createData('Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'),
];

const dadosPessoais = [
  createDataDadosPessoais('Nome', 'Oswald de Andrade'),
  createDataDadosPessoais('Nome da Mãe', 'Cecília Meirelles'),
  createDataDadosPessoais('Data de Nascimento', '27/02/2020'),
  createDataDadosPessoais('Idade', '35'),
  createDataDadosPessoais('CPF', '488.365.456-79'),
  createDataDadosPessoais('NIS', '333333'),
  createDataDadosPessoais('Código Familiar', '*'),
  createDataDadosPessoais('Responsável Familiar', '*'),
  createDataDadosPessoais('Gênero', 'Masculino'),
  createDataDadosPessoais('Raça/Cor', '*'),
  createDataDadosPessoais('Nacionalidade', 'Brasileiro'),
  createDataDadosPessoais('Endereço', 'Rua *'),
  createDataDadosPessoais('Composição Familiar', '*'),
  createDataDadosPessoais('Data de atualização CAD', '23/03/2017'),
];

const dadosSaude = [
  createDataDadosPessoais('Possui Deficiência ', 'Não'),
  createDataDadosPessoais('Cegueira', 'Não'),
  createDataDadosPessoais('Deficiência Baixa Visão ', 'Não'),
  createDataDadosPessoais('Surdez severa ', 'Não'),
  createDataDadosPessoais('Surdez leve ', 'Não'),
  createDataDadosPessoais('Deficiência Física ', 'Não'),
  createDataDadosPessoais('Deficiência Mental ', 'Não'),
  createDataDadosPessoais('Síndrome de Down ', 'Não'),
  createDataDadosPessoais('Transtorno Mental ', 'Não'),
  createDataDadosPessoais('Recebe ajuda de terceiros  ', 'Não'),
  createDataDadosPessoais('Ajuda de Terceiros - Família ', 'Não'),
  createDataDadosPessoais('Ajuda de Terceiros - Especializada ', 'Não'),
  createDataDadosPessoais('Ajuda de Terceiros - Vizinhos ', 'Não'),
  createDataDadosPessoais('Ajuda de Terceiros - Instituição da rede social  ', 'Não'),
  createDataDadosPessoais('Ajuda de Terceiros  - Outra forma ', 'Não'),
];

const dadosEducacao = [
  createDataDadosPessoais('Sabe ler e escrever  ', 'Não'),
  createDataDadosPessoais('Frequenta escola ', 'Não'),
  createDataDadosPessoais('Curso que frequenta ', 'Não'),
  createDataDadosPessoais('Ano e série que frequenta ', 'Não'),
  createDataDadosPessoais('Curso mais elevado que frequentou  ', 'Não'),
  createDataDadosPessoais('Último ano e série que frequentou ', 'Não'),
  createDataDadosPessoais('Concluiu o curso frequentado  ', 'Não'),
];
const dadosFinanceiro = [
  createDataDadosPessoais('Exerceu trabalho remunerado nos últimos 12 meses ', 'Não'),
  createDataDadosPessoais('Renda per capita familiar ', 'Não'),
  createDataDadosPessoais('Função principal ', 'Não'),
  createDataDadosPessoais('Indicação de Trabalho Infantil na Família ', 'Não'),

];

const Details: React.FC = () => {
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
      <DetailsBody>
        <article>
          <h1>
            Trajetória do Cidadão
          </h1>
          <ColorButton variant="contained" color="primary" className={classes.margin} href="/">
            VOLTAR
          </ColorButton>
        </article>
        <div>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dados Pessoais</StyledTableCell>
                  <StyledTableCell align="right" />

                </TableRow>
              </TableHead>
              <TableBody>
                {dadosPessoais.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.value}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Saúde</StyledTableCell>
                  <StyledTableCell align="right" />

                </TableRow>
              </TableHead>
              <TableBody>
                {dadosSaude.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.value}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <TableContainer component={Paper} className={classes.tableContainer2}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Educação</StyledTableCell>
                  <StyledTableCell align="right" />

                </TableRow>
              </TableHead>
              <TableBody>
                {dadosEducacao.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.value}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} className={classes.tableContainer2}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Situação Financeira</StyledTableCell>
                  <StyledTableCell align="right" />

                </TableRow>
              </TableHead>
              <TableBody>
                {dadosFinanceiro.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.value}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <section>
          <h2>
            Histórico de Acolhimento no SISA em Ordem Cronológica
          </h2>
          <br />
          <h3>Cidadão Vinculado</h3>
          <TableContainer component={Paper} className={classes.tableContainer1}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    Nome do Serviço/ Tipologia do Serviço/ SAS do Serviço/ Distrito do serviço
                  </StyledTableCell>
                  <StyledTableCell align="right">Vinculado em</StyledTableCell>
                  <StyledTableCell align="right">Desligado em</StyledTableCell>
                  <StyledTableCell align="right">Motivo acolhimento</StyledTableCell>
                  <StyledTableCell align="right">Motivo do desligamento</StyledTableCell>
                  <StyledTableCell align="right">Permanência (dias)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h3>Cidadão Não Vinculado</h3>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nome e Tipologia do Serviço</StyledTableCell>
                  <StyledTableCell align="right">SAS e distrito do serviço </StyledTableCell>
                  <StyledTableCell align="right">Data da Movimentação </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>

        <h2>Histórico de Atendimento na Rede Direta (SISCR) em Ordem Cronológica </h2>
        <br />
        <TableContainer component={Paper} className={classes.tableContainer1}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Centro de referência</StyledTableCell>
                <StyledTableCell align="right">Demandas apresentadas</StyledTableCell>
                <StyledTableCell align="right">SAS</StyledTableCell>
                <StyledTableCell align="right">Distrito</StyledTableCell>
                <StyledTableCell align="right">Pré-atendimento</StyledTableCell>
                <StyledTableCell align="right">Atendimento</StyledTableCell>
                <StyledTableCell align="right">Forma de acesso</StyledTableCell>
                <StyledTableCell align="right">Encaminhamentos</StyledTableCell>
                <StyledTableCell align="right">Movimentação </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h2>Histórico de Abordagem de Rua (SISRUA) em Ordem Cronológica </h2>
        <br />
        <TableContainer component={Paper} className={classes.tableContainer1}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Data da abordagem</StyledTableCell>
                <StyledTableCell align="right">Aceitou abordagem?</StyledTableCell>
                <StyledTableCell align="right">Motivo de recusa da abordagem</StyledTableCell>
                <StyledTableCell align="right">Endereço de abordagem</StyledTableCell>
                <StyledTableCell align="right">Nome do serviço de abordagem </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </DetailsBody>
      <Footer>
        Versão teste
      </Footer>
    </>
  );
};

export default Details;

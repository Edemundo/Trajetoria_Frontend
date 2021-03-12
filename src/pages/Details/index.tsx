import React from 'react';

import {
  Theme, createStyles, makeStyles,
} from '@material-ui/core/styles';

import DetailsTableSmall from '../../components/DetailsTableSmall';
import CidadaoVinculadoSISATable from '../../components/CidadaoVinculadoSISATable';
import CidadaoNaoVinculadoSISATable from '../../components/CidadaoNaoVinculadoSISA';
import SISCRTable from '../../components/SISCRTable';
import SISRuaTable from '../../components/SISRuaTable';
import ColorButton from '../../components/ColorButton';

import { Header, Footer, DetailsBody } from './styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  margin: {
    margin: theme.spacing(1),
    maxHeight: 35,
    maxwidth: 60,
    fontSize: 15,
  },
}));

function createData(
  attribute1: string,
  attribute2: string,
  attribute3: string,
  attribute4: string,
  attribute5: string,
) {
  return {
    attribute1, attribute2, attribute3, attribute4, attribute5,
  };
}

function createBodySmallTable(name: string, value: string) {
  return {
    name, value,
  };
}

const rows = [
  createData('Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'),
  createData('Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'),
];

const tableBodyPessoais = [
  createBodySmallTable('Nome', 'Oswald de Andrade'),
  createBodySmallTable('Nome da Mãe', 'Cecília Meirelles'),
  createBodySmallTable('Data de Nascimento', '27/02/2020'),
  createBodySmallTable('Idade', '35'),
  createBodySmallTable('CPF', '488.365.456-79'),
  createBodySmallTable('NIS', '333333'),
  createBodySmallTable('Código Familiar', '*'),
  createBodySmallTable('Responsável Familiar', '*'),
  createBodySmallTable('Gênero', 'Masculino'),
  createBodySmallTable('Raça/Cor', '*'),
  createBodySmallTable('Nacionalidade', 'Brasileiro'),
  createBodySmallTable('Endereço', 'Rua *'),
  createBodySmallTable('Composição Familiar', '*'),
  createBodySmallTable('Data de atualização CAD', '23/03/2017'),
  createBodySmallTable('Está vivo', 'Sim'),
];

const tableBodySaude = [
  createBodySmallTable('Possui Deficiência ', 'Não'),
  createBodySmallTable('Cegueira', 'Não'),
  createBodySmallTable('Deficiência Baixa Visão ', 'Não'),
  createBodySmallTable('Surdez severa ', 'Não'),
  createBodySmallTable('Surdez leve ', 'Não'),
  createBodySmallTable('Deficiência Física ', 'Não'),
  createBodySmallTable('Deficiência Mental ', 'Não'),
  createBodySmallTable('Síndrome de Down ', 'Não'),
  createBodySmallTable('Transtorno Mental ', 'Não'),
  createBodySmallTable('Recebe ajuda de terceiros  ', 'Não'),
  createBodySmallTable('Ajuda de Terceiros - Família ', 'Não'),
  createBodySmallTable('Ajuda de Terceiros - Especializada ', 'Não'),
  createBodySmallTable('Ajuda de Terceiros - Vizinhos ', 'Não'),
  createBodySmallTable('Ajuda de Terceiros - Instituição da rede social  ', 'Não'),
  createBodySmallTable('Ajuda de Terceiros  - Outra forma ', 'Não'),
];

const tableBodyEducacao = [
  createBodySmallTable('Sabe ler e escrever  ', 'Não'),
  createBodySmallTable('Frequenta escola ', 'Não'),
  createBodySmallTable('Curso que frequenta ', 'Não'),
  createBodySmallTable('Ano e série que frequenta ', 'Não'),
  createBodySmallTable('Curso mais elevado que frequentou  ', 'Não'),
  createBodySmallTable('Último ano e série que frequentou ', 'Não'),
  createBodySmallTable('Concluiu o curso frequentado  ', 'Não'),
];
const tableBodyFinanceiro = [
  createBodySmallTable('Exerceu trabalho remunerado nos últimos 12 meses ', 'Não'),
  createBodySmallTable('Renda per capita familiar ', 'Não'),
  createBodySmallTable('Função principal ', 'Não'),
  createBodySmallTable('Indicação de Trabalho Infantil na Família ', 'Não'),

];

const headersVinculadoSISA = [
  'Nome do Serviço/ Tipologia do Serviço/ SAS do Serviço/ Distrito do serviço',
  'Vinculado em',
  'Desligado em',
  'Motivo acolhimento',
  'Motivo do desligamento',
  'Permanência (dias)',
];

const headersNaoVinculadoSISA = [
  'Nome e Tipologia do Serviço',
  'SAS e distrito do serviço',
  'Data da Movimentação',
];

const headersSISCR = [
  'Centro de referência',
  'Demandas apresentadas',
  'SAS',
  'Distrito',
  'Pré-atendimento',
  'Atendimento',
  'Forma de acesso',
  'Encaminhamentos',
  'Movimentação',
];

const headersSISRua = [
  'Data da abordagem',
  'Aceitou abordagem?',
  'Motivo de recusa da abordagem',
  'Endereço de abordagem',
  'Nome do serviço de abordagem',
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
          Parceria Coordenação do Observatório da Vigilância Socioassistencial
          e Coordenadoria de Gestão de Benefícios
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
          <DetailsTableSmall header="Dados Pessoais" values={tableBodyPessoais} height={900} />
          <DetailsTableSmall header="Saúde" values={tableBodySaude} height={900} />
        </div>

        <div>
          <DetailsTableSmall header="Educação" values={tableBodyEducacao} height={500} />
          <DetailsTableSmall header="Situação Financeira" values={tableBodyFinanceiro} height={300} />
        </div>

        <h2>
          Histórico de Acolhimento no SISA em Ordem Cronológica
        </h2>
        <br />

        <h3>Cidadão Vinculado</h3>
        <CidadaoVinculadoSISATable headers={headersVinculadoSISA} values={rows} />

        <h3>Cidadão Não Vinculado</h3>
        <CidadaoNaoVinculadoSISATable
          headers={headersNaoVinculadoSISA}
          values={rows}
        />

        <h2>Histórico de Atendimento na Rede Direta (SISCR) em Ordem Cronológica </h2>
        <br />
        <SISCRTable headers={headersSISCR} values={rows} />

        <h2>Histórico de Abordagem de Rua (SISRUA) em Ordem Cronológica </h2>
        <br />
        <SISRuaTable headers={headersSISRua} values={rows} />

      </DetailsBody>
      <Footer>
        Versão teste
      </Footer>
    </>
  );
};

export default Details;

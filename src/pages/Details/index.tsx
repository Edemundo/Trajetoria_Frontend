import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoonLoader from 'react-spinners/MoonLoader';
import { useHistory } from 'react-router-dom';

import {
  Theme, createStyles, makeStyles,
} from '@material-ui/core/styles';

import DetailsTableSmall from '../../components/DetailsTableSmall';
import CidadaoVinculadoSISATable from '../../components/CidadaoVinculadoSISATable';
import CidadaoNaoVinculadoSISATable from '../../components/CidadaoNaoVinculadoSISA';
import SISCRTable from '../../components/SISCRTable';
import SISRuaTable from '../../components/SISRuaTable';
import ColorButton from '../../components/ColorButton';

import { InfoRequestContext } from '../../providers/infoRequest';
import {
  DetailsBody, LoaderBody,
} from './styles';

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

  const history = useHistory();

  const { infoRequest }:any = React.useContext(InfoRequestContext);

  const [loading, setLoading] = useState(true);

  const [userInfos, setUserInfos]:any = useState([]);

  const fetchUserProfiles = () => {
    const data = JSON.stringify({ ...infoRequest });

    const config:any = {
      method: 'post',
      url: 'http://localhost:8080/cidadao/detalhes',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(config)
      .then((response) => {
        setUserInfos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        history.push('/Error');
      });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  let dataConventionalFormat = '';

  if (userInfos.dtNasc) {
    const dataSplitedByYearMonthDay = userInfos.dtNasc.split('-');
    dataConventionalFormat = `${dataSplitedByYearMonthDay[0]}/${dataSplitedByYearMonthDay[1]}/${dataSplitedByYearMonthDay[2]}`;
  }

  const tableBodyPessoais = [
    createBodySmallTable('Nome', userInfos.nmCidadao),
    createBodySmallTable('Nome da Mãe', userInfos.nmMae),
    createBodySmallTable('Data de Nascimento', dataConventionalFormat),
    createBodySmallTable('Idade', `${userInfos.ageCidadao} anos`),
    createBodySmallTable('CPF', userInfos.nrCpf),
    createBodySmallTable('NIS', userInfos.cdNis),
    createBodySmallTable('Código Cidadão', userInfos.ciCidadao),
    createBodySmallTable('Código Familiar', userInfos.codFamiliarFam),
    createBodySmallTable('Responsável Familiar', '*****'),
    createBodySmallTable('Gênero', userInfos.dcTipoSexo),
    createBodySmallTable('Raça/Cor', userInfos.dcRaca),
    createBodySmallTable('Nacionalidade', userInfos.nmPais),
    createBodySmallTable('Endereço', userInfos.descEndereco),
    createBodySmallTable('Composição Familiar', `${userInfos.qtdPessoasDomicFam} pessoas`),
    createBodySmallTable('Data de atualização CAD', '*****'),
    createBodySmallTable('Está vivo', userInfos.dcSitCidadao),
  ];

  const tableBodySaude = [
    createBodySmallTable('Possui Deficiência ', userInfos.codDeficienciaMemb),
    createBodySmallTable('Cegueira', userInfos.indDefCegueiraMemb),
    createBodySmallTable('Deficiência Baixa Visão ', userInfos.indDefBaixaVisaoMemb),
    createBodySmallTable('Surdez severa ', userInfos.indDefSurdezProfundaMemb),
    createBodySmallTable('Surdez leve ', userInfos.indDefSurdezLeveMemb),
    createBodySmallTable('Deficiência Física ', userInfos.indDefFisicaMemb),
    createBodySmallTable('Deficiência Mental ', userInfos.indDefMentalMemb),
    createBodySmallTable('Síndrome de Down ', userInfos.indDefSindromeDownMemb),
    createBodySmallTable('Transtorno Mental ', userInfos.indDefTranstornoMentalMemb),
  ];

  const tableBodyEducacao = [
    createBodySmallTable('Sabe ler e escrever  ', userInfos.codSabeLerEscreverMemb),
    createBodySmallTable('Frequenta escola ', userInfos.descFrequentaEscolaMemb),
    createBodySmallTable('Curso que frequenta ', userInfos.descCursoFrequentaMemb),
    createBodySmallTable('Ano e série que frequenta ', userInfos.descAnoSerieFrequentaMemb),
    createBodySmallTable('Curso mais elevado que frequentou  ', userInfos.descCursoFrequentouPessoaMemb),
    createBodySmallTable('Último ano e série que frequentou ', userInfos.descAnoSerieFrequentouMemb),
    createBodySmallTable('Concluiu o curso frequentado  ', userInfos.codConcluiuFrequentouMemb),
  ];
  const tableBodyFinanceiro = [
    createBodySmallTable('Exerceu trabalho remunerado nos últimos 12 meses ', '*****'),
    createBodySmallTable('Renda per capita familiar ', userInfos.vlrRendaMediaFam),
    createBodySmallTable('Função principal ', userInfos.descTrabMembro),
    createBodySmallTable('Indicação de Trabalho Infantil na Família ', userInfos.indTrabalhoInfantilFam),
    createBodySmallTable('Recebe ajuda de terceiros  ', userInfos.indAjudaNaoMemb),
    createBodySmallTable('Ajuda de Terceiros - Família ', userInfos.indAjudaFamiliaMemb),
    createBodySmallTable('Ajuda de Terceiros - Especializada ', '*****'),
    createBodySmallTable('Ajuda de Terceiros - Vizinhos ', '*****'),
    createBodySmallTable('Ajuda de Terceiros - Instituição da rede social  ', '*****'),
    createBodySmallTable('Ajuda de Terceiros  - Outra forma ', '*****'),
  ];

  return (
    <>

      {

        loading
          ? (
            <LoaderBody>
              <MoonLoader color="#692172" size={100} />
            </LoaderBody>
          )
          : (
            <DetailsBody>
              <article>
                <h1>
                  Trajetória do Cidadão
                </h1>
                <ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => { history.goBack(); }}>
                  VOLTAR
                </ColorButton>
              </article>

              <div>
                <DetailsTableSmall header="Dados Pessoais" values={tableBodyPessoais} height={1000} />
                <DetailsTableSmall header="Situação Financeira" values={tableBodyFinanceiro} height={640} />
              </div>

              <div>
                <DetailsTableSmall header="Educação" values={tableBodyEducacao} height={480} />
                <DetailsTableSmall header="Saúde" values={tableBodySaude} height={550} />

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
          )
      }

    </>
  );
};

export default Details;

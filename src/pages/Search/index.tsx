import React from 'react';

import CustomizedTables from '../../components/CustomizedTable';

import { Header, Footer, BodySearch } from './styles';

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

const Search: React.FC = () => {
  const headersArray = ['Código do Cidadão', 'Nome', 'Nome da mãe', 'Data de Nascimento', 'CPF', 'NIS', ''];

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
      <BodySearch>
        <h1>
          Trajetória do Cidadão
        </h1>
        <h2>Resultado(s) encontrado(s). Escolha o mais adequado:</h2>
        <CustomizedTables headers={headersArray} values={rows} />
      </BodySearch>
      <Footer>
        Versão teste
      </Footer>
    </>
  );
};

export default Search;

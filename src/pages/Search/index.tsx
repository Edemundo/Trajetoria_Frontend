import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchTable from '../../components/SearchTable';

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

const Search: React.FC = () => {
  const headersArray = ['Código do Cidadão', 'Nome', 'Nome da mãe', 'Data de Nascimento', 'CPF', 'NIS', ''];

  const [userProfiles, setUserProfiles]:any = useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/cidadao/find/12718318805/12373169497/ELIANA%20PEREIRA%20DE%20OLIVEIRA/MARIA%20PEREIRA%20DE%20OLIVEIRA').then((res) => {
      setUserProfiles(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const rows = [
    createData(userProfiles.ciCidadao, userProfiles.nmCidadao, userProfiles.nmMae,
      userProfiles.dtNasc, userProfiles.nrCpf, userProfiles.cdNis),
  ];

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
        <SearchTable headers={headersArray} values={rows} />
      </BodySearch>
      <Footer>
        Versão teste
      </Footer>
    </>
  );
};

export default Search;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';

import SearchTable from '../../components/SearchTable';

import {
  BodySearch, LoaderBody,
} from './styles';

interface routeParams {
  cpf?: string | undefined,
  nis?: string | undefined,
  nmCidadao?: string | undefined,
  nmMae?: string | undefined,
  dtNasc?: string | undefined,
}

interface personInterface {
  ciCidadao: number,
  nmCidadao: string,
  nmMae: string,
  dtNasc: string,
  nrCpf: string,
  cdNis: number,
  ciTipoSexo: number,
  ciRacaObservada: number,
  ciPaisOrigem: number,
  ciSitCidadao:number,
}

function createData(
  ciCidadao: number,
  nmCidadao: string,
  nmMae: string,
  dtNasc: string,
  nrCpf: string,
  cdNis: number,
  ciTipoSexo: number,
  ciRacaObservada: number,
  ciPaisOrigem: number,
  ciSitCidadao:number,
) {
  return {
    ciCidadao,
    nmCidadao,
    nmMae,
    dtNasc,
    nrCpf,
    cdNis,
    ciTipoSexo,
    ciRacaObservada,
    ciPaisOrigem,
    ciSitCidadao,
  };
}

const Search: React.FC = () => {
  const headersArray = ['Código do Cidadão', 'Nome', 'Nome da mãe', 'Data de Nascimento', 'CPF', 'NIS', ''];

  const {
    cpf, nis, nmCidadao, nmMae, dtNasc,
  }:routeParams = useParams();

  const [loading, setLoading] = useState(true);

  const [userProfiles, setUserProfiles] = useState([]);

  const history = useHistory();

  let rows = [];

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/cidadao/find/${cpf}/${nis}/${nmCidadao}/${nmMae}/${dtNasc}`).then((res) => {
      setUserProfiles(res.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      history.push('/Error');
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  rows = userProfiles.map((person:personInterface) => (createData(
    person.ciCidadao,
    person.nmCidadao,
    person.nmMae,
    person.dtNasc,
    person.nrCpf,
    person.cdNis,
    person.ciTipoSexo,
    person.ciRacaObservada,
    person.ciPaisOrigem,
    person.ciSitCidadao,
  )
  ));

  return (
    <>

      {loading
        ? (
          <LoaderBody>
            <MoonLoader color="#692172" size={100} />
          </LoaderBody>
        )

        : (
          <BodySearch>
            <h1>
              Trajetória do Cidadão
            </h1>
            <h2>Resultado(s) encontrado(s). Escolha o mais adequado:</h2>
            <SearchTable headers={headersArray} values={rows} />
          </BodySearch>
        )}

    </>
  );
};

export default Search;

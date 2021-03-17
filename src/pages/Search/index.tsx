import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';

import SearchTable from '../../components/SearchTable';

import {
  BodySearch, LoaderBody,
} from './styles';
import { InfoRequestContext } from '../../providers/infoRequest';

function createData(
  codigoCidadao: number,
  nome: string,
  nomeMae: string,
  dataNascimento: string,
  cpf: string,
  nis: number,
  ciTipoSexo: number,
  ciRacaObservada: number,
  ciPaisOrigem: number,
  ciSitCidadao:number,
) {
  return {
    codigoCidadao,
    nome,
    nomeMae,
    dataNascimento,
    cpf,
    nis,
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
  }:any = useParams();

  const [loading, setLoading] = useState(true);

  const { setInfoRequest }:any = React.useContext(InfoRequestContext);

  const [userProfiles, setUserProfiles]:any = useState([]);

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/cidadao/find/${cpf}/${nis}/${nmCidadao}/${nmMae}/${dtNasc}`).then((res) => {
      setUserProfiles(res.data);

      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  let rows = [];

  rows = userProfiles.map((person:any) => (createData(
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

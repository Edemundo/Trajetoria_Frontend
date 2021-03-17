import React, {
  useState,
} from 'react';

export const InfoRequestContext = React.createContext({});

interface infoResquestInterface {
  ciCidadao: number,
  nmCidadao: string,
  nmMae: string,
  dtNasc: string,
  cdNis: number,
  nrCpf: number,
  ciTipoSexo: number,
  ciRacaObservada: number,
  ciPaisOrigem: number,
  ciSitCidadao: number,
}

export const InfoRequestProvider = (props:any) => {
  const [infoRequest, setInfoRequest] = useState<infoResquestInterface[]>();

  const { children } = props;

  return (
    <InfoRequestContext.Provider value={{ infoRequest, setInfoRequest }}>
      { children }
    </InfoRequestContext.Provider>
  );
};

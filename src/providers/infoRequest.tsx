import React, { useState } from 'react';

export const InfoRequestContext = React.createContext({});

export const InfoRequestProvider = (props:any) => {
  const [infoRequest, setInfoRequest] = useState({
    ciCidadao: 1,
    nmCidadao: '',
    nmMae: '',
    dtNasc: '',
    cdNis: 1,
    nrCpf: 1,
    ciTipoSexo: 1,
    ciRacaObservada: 1,
    ciPaisOrigem: 1,
    ciSitCidadao: 1,
  });

  const { children } = props;

  return (
    <InfoRequestContext.Provider value={{ infoRequest, setInfoRequest }}>
      { children }
    </InfoRequestContext.Provider>
  );
};

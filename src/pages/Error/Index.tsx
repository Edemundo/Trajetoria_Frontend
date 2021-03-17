import React from 'react';
import { useHistory } from 'react-router-dom';
import ColorButton from '../../components/ColorButton';

import BodyError from './styles';

const ErrorPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <BodyError>
        <h1>
          Houve um error e a pesquisa não pode ser concluída. Favor tentar mais tarde.
        </h1>
        <ColorButton onClick={() => { history.go(-2); }}>VOLTAR</ColorButton>
      </BodyError>
    </>
  );
};

export default ErrorPage;

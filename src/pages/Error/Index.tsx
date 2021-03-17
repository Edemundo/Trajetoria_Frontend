import React from 'react';
import { useHistory } from 'react-router-dom';

import BodyError from './styles';

const ErrorPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <BodyError>
        <h1>
          Houve um error e a pesquisa não pode ser concluída. Favor tentar mais tarde.
        </h1>

      </BodyError>
    </>
  );
};

export default ErrorPage;

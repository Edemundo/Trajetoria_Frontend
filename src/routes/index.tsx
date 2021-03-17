import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Header, Footer,
} from './styles';
import Search from '../pages/Search';
import Details from '../pages/Details';
import ErrorPage from '../pages/Error/Index';

const Routes: React.FC = () => (
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
    <Switch>
      <Route path="/:cpf/:nis/:nmCidadao/:nmMae/:dtNasc" component={Search} exact />
      <Route path="/details" component={Details} />
      <Route path="/Error" component={ErrorPage} />
    </Switch>
    <Footer>
      Versão teste
    </Footer>
  </>
);

export default Routes;

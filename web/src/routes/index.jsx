import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Imobi from '../pages/Imobi';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Error from '../pages/Error';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Perfil from '../pages/Perfil';
import PrivateRoute from '../components/PrivateRoute';


export default function RouterApp() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/imovel/:slug" component={Imobi} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <PrivateRoute path="/perfil" component={Perfil} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  )
}

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Atendimento from './ui/Atendimento';
import CadastroPsicologo from './ui/CadastroPsicologo';
import CadastroVitima from './ui/CadastroVitima';
import ConfirmarCadastro from './ui/ConfCadastro';
import LoginPage from './ui/Login';
import Urgencia from './ui/Urgencia';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './common/Nav';
import { useState } from 'react';
import Institucional from './ui/Institucional';

function App() {
  const [isLoggedin, setLoggedin] = useState(false)

  const idDiv = document.getElementById("root")

  return <BrowserRouter>
    <Nav isLoggedin={isLoggedin} />
    <Switch>
      <Route path="/login" exact render={() => <LoginPage onLogin={() => setLoggedin(true)} />} />
      <Route path="/atendimento" exact component={Atendimento} />
      <Route path="/cadastroPsicologo" exact component={CadastroPsicologo} />
      <Route path="/urgencia" exact component={Urgencia} />
      <Route path="/confirmarCadastro" exact component={ConfirmarCadastro} />
      <Route path="/cadastroVitima" exact component={CadastroVitima} />
      <Route path="/institucional" exact component={Institucional} />
      <Route path="/" exact component={Institucional} />
      
    </Switch>
  </BrowserRouter>;

}

export default App;

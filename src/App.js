import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Produto from './pages/Produto'
import Conta from './pages/Conta';
import Suporte from './pages/Suporte';
import Erro from './pages/Erro';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produto" component={Produto} />
        <Route path="/conta" component={Conta} />
        <Route path="/suporte" component={Suporte} />
        <Route component={Erro} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;

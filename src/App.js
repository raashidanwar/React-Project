import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useObserver } from 'mobx-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  { CounterProvider } from './components/Counter';
import { TimeProvider } from './components/Timer';
import { DataListProvider } from './components/DataList';
import { CurrencyProvider } from './components/Currency';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={['/home', '/']} component= { CounterProvider }/>
          <Route exact path='/time' component= { TimeProvider } />
          <Route exact path='/data' component= { DataListProvider } />
          <Route exact path='/currency' component= { CurrencyProvider } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

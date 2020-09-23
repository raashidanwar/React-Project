import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { autorun, computed, decorate, observable } from "mobx"
import { observer, useLocalStore, useObserver } from "mobx-react"
import { StoreCounter } from './StoreCounter';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CounterContext = React.createContext(null)

export const CounterProvider = () => {
  const counter = useLocalStore(StoreCounter);
  return useObserver(() => 
    <CounterContext.Provider>
      <div class = "row-1">
        <button class="btn btn-success btn mr-3" onClick = {counter.Add}>Add</button>
        <button class="btn btn-success btn mr-3" onClick = {counter.Subb}>subbtract</button>
        <h1>{ counter.data }</h1>
        <div>
          <div>
            <button class="btn btn-primary btn-warning top-right mr-3"> <Link to = '/currency'> Previous</Link> </button>
            <button class="btn btn-primary btn-warning top-left mr-3"> <Link to = '/time'> next</Link> </button>
          </div>
        </div>
      </div>
    </CounterContext.Provider>
  )
}

export const useCounter = () => React.useContext(CounterContext)


import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { autorun, computed, decorate, observable, set } from "mobx"
import { observer, useLocalStore, useObserver } from "mobx-react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreCurrency } from './StoreCurrency';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CurrencyContext = React.createContext(null);

export const CurrencyProvider = () => {
  const currency = useLocalStore(StoreCurrency);
  return useObserver(() =>
    <CurrencyContext.Provider>
      <div>
        <select value={currency.from}
                onChange={(e) => { currency.updatefrom(e.target.value)}}>
          {currency.currency.map((values) => <option key={values.currency} value={values.currency}>{values.name}</option>)}
        </select>
      </div>
      <div>
        <select value={currency.to}
                onChange={(e) => {currency.updateto(e.target.value)}}>
          {currency.currency.map((values) => <option key={values.currency} value={values.currency}>{values.name}</option>)}
        </select>
      </div>
      <input type = "number" value = {currency.weight} onChange = {(e) => {currency.weight = e.target.value}}></input>
      {currency.weight > 0? (<div> {parseFloat(currency.weight) * parseFloat(currency.result) } {currency.to} </div>): <div> 0 </div>}
      <button class="btn btn-primary btn-warning top-right mr-3"> <Link to = '/data'> Previous</Link> </button>
      <button class="btn btn-primary btn-warning top-left mr-3"> <Link to = '/home'> next</Link> </button>
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => React.useContext(CurrencyContext)
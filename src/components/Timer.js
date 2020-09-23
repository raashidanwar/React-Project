import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { autorun, computed, decorate, observable, set } from "mobx"
import { observer, useLocalStore, useObserver } from "mobx-react"
import { StoreTimer } from './StoreTimer';
import { Link } from 'react-router-dom';

const TimerContext = React.createContext(null);

export const TimeProvider = () => {
  const timer = useLocalStore(StoreTimer);
  useEffect(() => {
    timer.CallMe();
  })
  return useObserver(() =>
   <TimerContext.Provider>
      <h1> Time : {timer.currenttime.toLocaleTimeString()} </h1>
      <button class="btn btn-primary btn-warning top-right mr-3"> <Link to = '/home'> Previous</Link> </button>
      <button class="btn btn-primary btn-warning top-left mr-3"> <Link to = '/data'> next</Link> </button>
   </TimerContext.Provider>
  )
}

export const useTimer = () => React.useContext(TimerContext)
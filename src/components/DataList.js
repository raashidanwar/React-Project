import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { autorun, computed, decorate, observable, set } from "mobx"
import { observer, useLocalStore, useObserver } from "mobx-react"
import { StoreDataList } from './StoreDataList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DataListContext = React.createContext(null);

export const DataListProvider = () => {
  const datalist = useLocalStore(StoreDataList);
  useEffect(() => {
    datalist.Extract();
  })
  return useObserver(() =>
    <DataListContext.Provider>
      <h1 class = "text-center"> List of names</h1>
      <div class = "justify-content-center">
        {datalist.loading? (<div> loading... </div>): (<div class = "w-25"> 
          {datalist.data.map((names) =>
              <Card>
                <Card.Body class = "p-3 mb-2 bg-success text-white">
                  {names.first} {names.last}
                </Card.Body>
              </Card>
            )
          }
        </div>)}
        <button class="btn btn-primary btn-warning top-right mr-3"> <Link to = '/time'> Previous</Link> </button>
        <button class="btn btn-primary btn-warning top-left mr-3"> <Link to = '/currency'> next</Link> </button>
      </div>
    </DataListContext.Provider>
  )
}

export const useDataList = () => React.useContext(DataListContext)
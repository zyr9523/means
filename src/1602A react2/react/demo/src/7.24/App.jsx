import React, { Component } from 'react';
import Table from './components/Table';
import Hoc from './components/hoc';
import data from './mock';
import './scss/style.css';

let HocTable = Hoc(Table);
export default class App extends Component {
  render() {
    return (
      <div>
        <HocTable data={data}/>
      </div>
    )
  }
}

import React, { Component } from 'react';
import FirstComponent from './components/learn/firstAndSecond';
import Counter from './components/counter/counter'
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.callApi = this.callApi.bind(this);
  }

  callApi() {
    console.log('Call API...');
    axios.get('http://localhost:8500/getmpa/124566')
      .then(res => {
        console.log(res.data);
      })
  }


  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }


}
export default App;

App.defaultProps = {
  a: 1
}





import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { wait } from '@testing-library/react';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mass: '',
      height: '',
      internal_IMC: '',
      showed_IMC: ''
    };
  }

  getIMC = () => {
    var site_path = 'http://127.0.0.1:5000/calc_IMC?mass=' + this.state.mass + '&height=' + this.state.height
    console.log(site_path);
    fetch(site_path)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.state.showed_IMC = data.IMC;
      });
  }


  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState(
      {
        [nam]: val
      },
      this.getIMC
    );
  }

/*  callTwoFunctions = (event) => {
    this.myChangeHandler(event);
    ;
  }*/
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>Calculador de IMC</h1>
      <p>Coloque o seu peso em kg (separador decimal é o ponto):</p>
      <input
        type='text'
        name='mass'
        onChange={this.myChangeHandler}
      />
      <p>Coloque a sua altura em metros (separador decimal é o ponto):</p>
      <input
        type='text'
        name='height'
        onChange={this.myChangeHandler}
      />
      <p>O seu IMC é {this.state.showed_IMC}</p>
      
      
      </form>
      
    );
  }
}


ReactDOM.render(<MyForm />, document.getElementById('root'));

ReactDOM.render(<MyForm />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

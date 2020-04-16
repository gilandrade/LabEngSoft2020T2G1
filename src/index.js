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
      IMC: null,
    };
  }

  getIMC = () => {
    console.log('http://127.0.0.1:5000/calc_IMC?mass=' + this.state.mass + '&height=' + this.state.height);
    if (this.state.mass != '' && this.state.mass != null && this.state.height != '' && this.state.height != null)   {
      fetch('http://127.0.0.1:5000/calc_IMC?mass=' + this.state.mass + '&height=' + this.state.height)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let IMC;
    this.setState({[nam]: val});
  }

  callTwoFunctions = (event) => {
    this.myChangeHandler(event);
    setTimeout(() => {this.getIMC();}, 0); // adding a minimum delay
  }
  

  render() {
    return (
      <form>
      <h1>Calculador de IMC</h1>
      <p>Coloque o seu peso em kg (separador decimal é o ponto):</p>
      <input
        type='text'
        name='mass'
        onChange={this.callTwoFunctions}
      />
      <p>Coloque a sua altura em metros (separador decimal é o ponto):</p>
      <input
        type='text'
        name='height'
        onChange={this.callTwoFunctions}
      />
      <p>O seu IMC é {this.state.IMC}</p>
      
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let altura;
let peso;


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Calculador de IMC</h1>
      <p>Coloque o seu peso em kg (separador decimal é o ponto):</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Coloque a sua altura em metros (separador decimal é o ponto):</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>O seu IMC é {this.state.username/this.state.age/this.state.age}</p>
      
      </form>
      
    );
  }
}

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.textContent = contents;
}


var dados = {'peso': peso, 'altura': altura};

ReactDOM.render(<MyForm />, document.getElementById('root'));

ReactDOM.render(<MyForm />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

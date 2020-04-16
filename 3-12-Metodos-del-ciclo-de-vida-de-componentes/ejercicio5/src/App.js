import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: ''
    };

  }
  handleChange(ev) {
    //Guardamos los datos en el estado
    console.log(ev.target.value);
    this.setState({ input: ev.target.value });

  }

  componentDidMount() {
    //Leemos los datos
    this.userData = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      this.setState({
        unput: this.userData.input,
      })
    } else {
      this.setState({
        input: '',
      })
    }

  }

  componentDidUpdate(nextProps, nextState) {
    console.log(nextProps);

    // Escribimos en el local estorage
    localStorage.setItem('user', JSON.stringify(nextState));
  }



  render() {
    console.log(this.props);
    return <input type='text' onChange={this.handleChange} value={this.state.input}></input>;
  }
}

export default App;
//Preguntar a Miguel por como hacer para que se pinte lo del localStorage
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ev => {
    this.setState({
      inputContent: ev.target.value
    });


    console.log(ev.target.value);
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.inputContent}</p>
      </form>
    );
  }
}

export default App;
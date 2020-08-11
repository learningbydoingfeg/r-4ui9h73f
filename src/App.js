import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input onChange={this.handleChange} type="text" placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
}

export default App;

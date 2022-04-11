import React, {Component} from 'react';

export default class Eventos extends Component {
  constructor() {
    super();
    this.state = {
      lang: "ES",
      buttonText: "Presióname",
      text: "Hola mundo!!"
    }
    this.updateText = this.updateText.bind(this);
  }
    
  updateText() {
    if (this.state.lang === 'ES') {
      this.setState({
        text: "Hola mundo!!",
        lang: "EN",
        buttonText: "Presióname"
      });
    } else {
      this.setState({
        text: "Hello world!!",
        lang: "ES",
        buttonText: "Click Me"
      });
    }    
  }

  render() {
    return (
      <div>
        <h2>Eventos</h2>
        <p>{this.state.text}</p>
        <button onClick={this.updateText}>{this.state.buttonText}</button>
      </div>
      );
  }
} 
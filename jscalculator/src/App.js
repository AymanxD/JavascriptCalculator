import React, { Component } from 'react';
import './App.css';

// Sets initial state for the overall equation, answer, and the equation prior to change.
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      equation: "0",
      answer: "0",
      prevState: "0"
    }
  }

//Clears both equation and answer.
  allClear(){
    this.setState({
      equation:"0",
      answer:"0"
    })
  }

//Returns the equation to one previous state.
  clearEntry(){
    this.setState({
      equation: this.state.prevState
    })
  }

//The creation of the equation.
  addOperatorOrNumber(value){
    if(this.state.equation === "0"){
      this.setState({
        equation: value
      })
    }else if(this.state.equation === "ERR"){
      this.setState({
        equation: "0"
      })
    }else if(this.state.answer !== "0" && isNaN(value) === false && isNaN(this.state.equation[this.state.equation.length -1]) === false){
      this.setState({
        equation: value,
        answer: "0"
      })
    }else{this.setState({
      prevState: this.state.equation,
      equation: this.state.equation + value
      })
    }
//If equation is longer than the display it will result in an error.
    if(this.state.equation.length > 14){
      this.setState({
        equation: "ERR"
      })
    }
  }

//Evalutes equation.
  evaluateEquation(){
    this.setState({
      answer: eval(this.state.equation)
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="titles">React JS Calculator</h1>
        <div className="calculator">
          <div className="equationAndAnswer">
            <div className="equation">{this.state.equation}</div>
            <div className="answer">{this.state.answer}</div>
          </div>
          <button onClick={(e) => this.allClear()} className="allClear buttonDistance">AC</button>
          <button onClick={(e) => this.clearEntry()} className="clearEntry buttonDistance">CE</button>
          <button onClick={(e) => this.addOperatorOrNumber("/")} className="divide buttonDistance">&divide;</button>
          <button onClick={(e) => this.addOperatorOrNumber("*")} className="times buttonDistance">&times;</button>
          <button onClick={(e) => this.addOperatorOrNumber("7")} className="seven buttonDistance">7</button>
          <button onClick={(e) => this.addOperatorOrNumber("8")} className="eight buttonDistance">8</button>
          <button onClick={(e) => this.addOperatorOrNumber("9")} className="nine buttonDistance">9</button>
          <button onClick={(e) => this.addOperatorOrNumber("-")} className="minus buttonDistance">-</button>
          <button onClick={(e) => this.addOperatorOrNumber("4")} className="four buttonDistance">4</button>
          <button onClick={(e) => this.addOperatorOrNumber("5")} className="five buttonDistance">5</button>
          <button onClick={(e) => this.addOperatorOrNumber("6")} className="six buttonDistance">6</button>
          <button onClick={(e) => this.addOperatorOrNumber("+")} className="plus buttonDistance">+</button>
          <button onClick={(e) => this.addOperatorOrNumber("1")} className="one buttonDistance">1</button>
          <button onClick={(e) => this.addOperatorOrNumber("2")} className="two buttonDistance">2</button>
          <button onClick={(e) => this.addOperatorOrNumber("3")} className="three buttonDistance">3</button>
          <button onClick={(e) => this.evaluateEquation()} className="equal buttonDistance">=</button>
          <button onClick={(e) => this.addOperatorOrNumber("0")} className="zero buttonDistance">0</button>
          <button onClick={(e) => this.addOperatorOrNumber(".")} className="decimal buttonDistance">.</button>
        </div>
        <h3 className="titles">By Ayman Mohatarem </h3>
      </div>
    );
  }
}

export default App;

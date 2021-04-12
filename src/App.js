
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
      output: 0,
      firstNum: "",
      secondNum: "",
      type: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.calculate = this.calculate.bind(this)
    this.clear = this.clear.bind(this)
  }

  calculate(){
    if(this.state.type === "/"){
      this.setState(prevState => {
        let result = Number(prevState.firstNum) / Number(prevState.secondNum)
        console.log(`${prevState.firstNum} / ${prevState.secondNum} = ${result}`)
        return {input: result, output: prevState.input, firstNum: result, secondNum: "", type: ""}
      })
    }
    if(this.state.type === "X"){
      this.setState(prevState => {
        let result = Number(prevState.firstNum) * Number(prevState.secondNum)
        console.log(`${prevState.firstNum} X ${prevState.secondNum} = ${result}`)
        return {input: result, output: prevState.input, firstNum: result, secondNum: "", type: ""}
      })
    }
    if(this.state.type === "-"){
      this.setState(prevState => {
        let result = Number(prevState.firstNum) - Number(prevState.secondNum)
        console.log(`${prevState.firstNum} - ${prevState.secondNum} = ${result}`)
        return {input: result, output: prevState.input, firstNum: result, secondNum: "", type: ""}
      })
    }
    if(this.state.type === "+"){
      this.setState(prevState => {
        let result = Number(prevState.firstNum) + Number(prevState.secondNum)
        console.log(`${prevState.firstNum} + ${prevState.secondNum} = ${result}`)
        return {input: result, output: prevState.input, firstNum: result, secondNum: "", type: ""}
      })
    }
  }

  clear(){ this.setState({input: "", output: 0, firstNum: "", secondNum: "", type: ""})}


  handleClick(event){
    const name = event.target.name
    if(name === "C") {
      this.clear()
    }
    if(name === "=") this.calculate()

    if(name < 10 || name === ".") {
      if(this.state.input === 0) this.setState({input: ""})
      if(this.state.type === "") this.setState(prevState => ({firstNum: prevState.firstNum + name,input: prevState.input + name}));
      if(this.state.type !== "") this.setState(prevState => ({secondNum: prevState.secondNum + name, input: prevState.input + name}))
    }
    if(name === "/") {
      if(this.state.type !== "") this.calculate()
      this.setState(prevState => ({input: prevState.input + "/", type: "/"}))
    }
    if(name === "X"){
      if(this.state.type !== "") this.calculate()
      this.setState(prevState => ({input: prevState.input + "X", type: "X"}))
    }
    if(name === "-"){
      if(this.state.type !== "") this.calculate()
      this.setState(prevState => ({input: prevState.input + "-", type: "-"}))
    }
    if(name === "+"){
      if(this.state.type !== "") this.calculate()
      this.setState(prevState => ({input: prevState.input + "+", type: "+"}))
    }
    console.log(this.state)
  }

  render() { 
    return (
    <div id="outerContainer" >
      <div id="calculatorContainer">
        <div id="screenContainer">
          <div id="previousCalculation" >{this.state.output}</div>
          <div id="display" >{this.state.input === "" ? 0 : this.state.input}</div>
        </div>
          <button onClick={this.handleClick} className="button" name="1" id="one">1</button>
          <button onClick={this.handleClick} className="button" name="2" id="two">2</button>
          <button onClick={this.handleClick} className="button" name="3" id="three">3</button>
          <button onClick={this.handleClick} className="button" name="4" id="four">4</button>
          <button onClick={this.handleClick} className="button" name="5" id="five">5</button>
          <button onClick={this.handleClick} className="button" name="6" id="six">6</button>
          <button onClick={this.handleClick} className="button" name="7" id="seven">7</button>
          <button onClick={this.handleClick} className="button" name="8" id="eight">8</button>
          <button onClick={this.handleClick} className="button" name="9" id="nine">9</button>
          <button onClick={this.handleClick} className="button" name="0" id="zero">0</button>
          <button onClick={this.handleClick} className="button" name="." id="decimal">.</button>
          <button onClick={this.handleClick} className="symbal" name="=" id="equals">=</button>
          <button onClick={this.handleClick} className="symbal" name="/" id="divide">/</button>
          <button onClick={this.handleClick} className="symbal" name="X" id="multiply">X</button>
          <button onClick={this.handleClick} className="symbal" name="-" id="subtract">-</button>
          <button onClick={this.handleClick} className="symbal" name="+" id="add">+</button>
          <button onClick={this.handleClick} className="symbal" name="C" id="clear">C</button>
      </div>
    </div>
    )}
}

export default App;

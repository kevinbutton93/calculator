
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      output: 0,
      firstNum: "",
      secondNum: "",
      type: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.calculate = this.calculate.bind(this)
    this.clear = this.clear.bind(this)
  }
// Calculate handles the actual math, and sets the state to show the previous calculation above the answer
  calculate(){
    if(this.state.type === "/"){
      this.setState(prevState => {
        let result = Number(prevState.firstNum) / Number(prevState.secondNum)
        if(isNaN(result)) return {secondNum: ""};
        return {output: `${prevState.firstNum} ${prevState.type} ${prevState.secondNum}`, firstNum: result, secondNum: "", type: ""}
      })
    }
    if(this.state.type === "X"){
      this.setState(prevState => {
        let result = Number(prevState.firstNum) * Number(prevState.secondNum)
        if(isNaN(result)) return {secondNum: ""};
        return {output: `${prevState.firstNum} ${prevState.type} ${prevState.secondNum}`, firstNum: result, secondNum: "", type: ""}
      })
    }
    if(this.state.type === "-"){
      this.setState(prevState => {
        let result = Number(prevState.firstNum) - Number(prevState.secondNum)
        if(isNaN(result)) return {secondNum: ""};
        return {output: `${prevState.firstNum} ${prevState.type} ${prevState.secondNum}`, firstNum: result, secondNum: "", type: ""}
      })
    }
    if(this.state.type === "+"){
      this.setState(prevState => {
        let result = Number(prevState.firstNum) + Number(prevState.secondNum)
        if(isNaN(result)) return {secondNum: ""};
        return {output: `${prevState.firstNum} ${prevState.type} ${prevState.secondNum}`, firstNum: result, secondNum: "", type: ""}
      })
    }
    if(this.state.type === "") this.setState(prevState => ({output: `${prevState.firstNum} ${prevState.type} ${prevState.secondNum}`}))
  }
// clear function resets all the state to default settings
  clear(){ this.setState({output: 0, firstNum: "", secondNum: "", type: ""})}

// handleClick is called when any button is pressed
// it reads the name of the button, which matches the displayed text

  handleClick(event){
    const name = event.target.name
    // if "C" is clicked, it runs the "clear" method
    if(name === "C") {
      this.clear()
    }
    // if "=" is clicked, it runs the calculate method
    if(name === "=") this.calculate()
    // if "." is clicked, it first checks if a operation has been selected,
    // it is hasn't it adds a decimal to "state.firstNum"
    // if it has, it adds a decimal to "state.secondNum" 
    if(name === "."){
      if(this.state.type === "") {this.setState(prevState => {
        if(this.state.firstNum.toString().includes(".")) return
        return {firstNum: prevState.firstNum + "."}
      })};
      if(this.state.type !== "") {this.setState(prevState => {
        if(this.state.secondNum.toString().includes(".")) return
        return {secondNum: prevState.secondNum + "."}
      })}
    }

    if(name > 0) {
      if(this.state.type === "") this.setState(prevState => ({firstNum: prevState.firstNum + name}));
      if(this.state.type !== "") this.setState(prevState => ({secondNum: prevState.secondNum + name}))
    }
    if(name === "0") {
      if(this.state.type === "") {
        this.setState(prevState => {
          if(this.state.firstNum.toString()[0] === "0") return 
          return {firstNum: prevState.firstNum + name}
        })
      }
      if(this.state.type !== "") {
        this.setState(prevState => {
          if(this.state.secondNum.toString()[0] ==="0") return
          return {secondNum: prevState.secondNum + name}
        })
      }
    }
    if(name === "/") {
      if(this.state.type !== "") this.calculate()
      this.setState({type: "/"})
    }
    if(name === "X"){
      if(this.state.type !== "") this.calculate()
      this.setState({type: "X"})
    }
    if(name === "-"){
      if(this.state.type === "" && this.state.firstNum === "") this.setState({firstNum: "-"})
      if(this.state.type !== "" && this.state.secondNum === "") this.setState({secondNum: "-"})
      if(this.state.firstNum !== "" && this.state.type === "") this.setState({type: "-"})
      if(this.state.secondNum !== "") {
        this.calculate()
        this.setState({type: "-"})
      }
      

    }
    if(name === "+"){
      if(this.state.secondNum !== "" || "-") this.calculate()
      this.setState({type: "+"})
    }
    
  }

  render() { 
    console.log(this.state)
    return (
    <div id="outerContainer" >
      <div id="calculatorContainer">
        <div id="screenContainer">
          <div id="previousCalculation" >{this.state.output}</div>
          <div id="display" >{this.state.firstNum === "" ? 0 : `${this.state.firstNum} ${this.state.type} ${this.state.secondNum}`}</div>
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


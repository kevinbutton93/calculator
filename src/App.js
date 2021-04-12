
import React from 'react';
import './App.css';

class App extends React.Component {
  render() { 
    return (
    <div id="outerContainer" >
      <div id="calculatorContainer">
        <div id="screenContainer">
          <div id="previousCalculation" >2 x 3</div>
          <div id="currentCalcutlation" >5</div>
        </div>
        <button className="button" id="one">1</button>
          <button className="button" id="two">2</button>
          <button className="button" id="three">3</button>
          <button className="button" id="four">4</button>
          <button className="button" id="five">5</button>
          <button className="button" id="six">6</button>
          <button className="button" id="seven">7</button>
          <button className="button" id="eight">8</button>
          <button className="button" id="nine">9</button>
          <button className="button" id="zero">0</button>
          <button className="button" id="period">.</button>
          <button className="symbal" id="equal">=</button>
          <button className="symbal" id="divide">/</button>
          <button className="symbal" id="multiply">X</button>
          <button className="symbal" id="subtract">-</button>
          <button className="symbal" id="add">+</button>
      </div>
    </div>
    )}
}

export default App;

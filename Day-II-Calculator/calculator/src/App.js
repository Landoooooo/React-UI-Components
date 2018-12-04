import React from 'react';
import * as math from 'mathjs';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      display: '0'
    }
  }

  numberClick = event => {
    if(this.state.display === '0'){
      this.setState({display: event.target.value})
      return;
    }
    this.setState({display: this.state.display + event.target.value });
  }

  equal = () => {
    let total = this.state.display;
    this.setState({display: math.eval(total)})
  }

  clear = () => {
    this.setState({display:"0"})
  }
  render(){
    return (
      <div className="calculator-app">
        <CalculatorDisplay text={this.state.display} />
        <ActionButton text="Clear" handleClick={this.clear}/>
        <NumberButton extraStyle="redStyle" text="/"handleClick={this.numberClick}/>
        <NumberButton  text="7" handleClick={this.numberClick} />
        <NumberButton  text="8" handleClick={this.numberClick}/>
        <NumberButton  text="9" handleClick={this.numberClick} />
        <NumberButton extraStyle="redStyle" text="*" handleClick={this.numberClick}/>
        <NumberButton  text="4" handleClick={this.numberClick}/>
        <NumberButton  text="5" handleClick={this.numberClick}/>
        <NumberButton  text="6" handleClick={this.numberClick}/>
        <NumberButton extraStyle="redStyle" text="-" handleClick={this.numberClick} />
        <NumberButton  text="1" handleClick={this.numberClick} />
        <NumberButton  text="2" handleClick={this.numberClick}/>
        <NumberButton  text="3" handleClick={this.numberClick}/>
        <NumberButton extraStyle="redStyle" text="&#43;" handleClick={this.numberClick}/>
        <ActionButton  text="0" handleClick={this.numberClick} />
        <NumberButton extraStyle="redStyle" text="&#61;" handleClick={this.equal}/>
      </div>
    );
  }
};

export default App;

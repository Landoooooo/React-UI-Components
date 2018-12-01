import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-app">
      <CalculatorDisplay text="0" />
      <ActionButton className="actionButtonStyle" text="Clear"/>
      <NumberButton extraStyle="redStyle" text="&divide;"/>
      <NumberButton  text="7" />
      <NumberButton  text="8" />
      <NumberButton  text="9" />
      <NumberButton extraStyle="redStyle" text="&times;" />
      <NumberButton  text="4" />
      <NumberButton  text="5" />
      <NumberButton  text="6" />
      <NumberButton extraStyle="redStyle" text="&minus;" />
      <NumberButton  text="1" />
      <NumberButton  text="2" />
      <NumberButton  text="3" />
      <NumberButton extraStyle="redStyle" text="&#43;" />
      <ActionButton  text="0" />
      <NumberButton extraStyle="redStyle" text="&#61;"/>
    </div>
  );
};

export default App;

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
      <NumberButton className="numberButtonStyle" xtraStyle="redStyle" text="&divide;"/>
      <NumberButton className="numberButtonStyle" text="7" />
      <NumberButton className="numberButtonStyle" text="8" />
      <NumberButton className="numberButtonStyle" text="9" />
      <NumberButton className="numberButtonStyle" xtraStyle="redStyle" text="&times;" />
      <NumberButton className="numberButtonStyle" text="4" />
      <NumberButton className="numberButtonStyle" text="5" />
      <NumberButton className="numberButtonStyle" text="6" />
      <NumberButton className="numberButtonStyle" xtraStyle="redStyle" text="&minus;" />
      <NumberButton className="numberButtonStyle" text="1" />
      <NumberButton className="numberButtonStyle" text="2" />
      <NumberButton className="numberButtonStyle" text="3" />
      <NumberButton className="numberButtonStyle" xtraStyle="redStyle" text="&#43;" />
      <ActionButton className="numberButtonStyle" text="0" />
      <NumberButton className="numberButtonStyle" xtraStyle="redStyle" text="&#61;"/>
    </div>
  );
};

export default App;

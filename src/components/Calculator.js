import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => (

  <div className="calculator">
    <Display />
    <div className="row-button">
      <button type="button" className="button">AC</button>
      <button type="button" className="button">+/-</button>
      <button type="button" className="button">%</button>
      <button type="button" className="button sign">&#247;</button>
    </div>
    <div className="row-button">
      <button type="button" className="button">7</button>
      <button type="button" className="button">8</button>
      <button type="button" className="button">9</button>
      <button type="button" className="button sign">x</button>
    </div>
    <div className="row-button">
      <button type="button" className="button">4</button>
      <button type="button" className="button">5</button>
      <button type="button" className="button">6</button>
      <button type="button" className="button sign">-</button>
    </div>
    <div className="row-button">
      <button type="button" className="button">1</button>
      <button type="button" className="button">2</button>
      <button type="button" className="button">3</button>
      <button type="button" className="button sign">+</button>
    </div>
    <div className="row-button">
      <button type="button" className="button zero-button">0</button>
      <button type="button" className="button">.</button>
      <button type="button" className="button sign">=</button>
    </div>
  </div>
);
const Display = () => (
  <div className="display">
    <p>0</p>
  </div>
);

export default Calculator;

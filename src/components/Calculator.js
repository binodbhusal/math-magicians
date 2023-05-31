import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [calcData, setCalcData] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleButtonClick = (e) => {
    const buttonName = e.target.name;
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);
    setDisplayValue(newData.next || newData.total || 0);
  };
  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="row-button">
        <button type="button" className="button" name="AC" onClick={handleButtonClick}>AC</button>
        <button type="button" className="button" name="+/-" onClick={handleButtonClick}>+/-</button>
        <button type="button" className="button" name="%" onClick={handleButtonClick}>%</button>
        <button type="button" className="button sign" name="&#247" onClick={handleButtonClick}>&#247;</button>
      </div>
      <div className="row-button">
        <button type="button" className="button" name="7" onClick={handleButtonClick}>7</button>
        <button type="button" className="button" name="8" onClick={handleButtonClick}>8</button>
        <button type="button" className="button" name="9" onClick={handleButtonClick}>9</button>
        <button type="button" className="button sign" name="x" onClick={handleButtonClick}>x</button>
      </div>
      <div className="row-button">
        <button type="button" className="button" name="4" onClick={handleButtonClick}>4</button>
        <button type="button" className="button" name="5" onClick={handleButtonClick}>5</button>
        <button type="button" className="button" name="6" onClick={handleButtonClick}>6</button>
        <button type="button" className="button sign" name="-" onClick={handleButtonClick}>-</button>
      </div>
      <div className="row-button">
        <button type="button" className="button" name="1" onClick={handleButtonClick}>1</button>
        <button type="button" className="button" name="2" onClick={handleButtonClick}>2</button>
        <button type="button" className="button" name="3" onClick={handleButtonClick}>3</button>
        <button type="button" className="button sign" name="+" onClick={handleButtonClick}>+</button>
      </div>
      <div className="row-button">
        <button type="button" className="button zero-button" name="0" onClick={handleButtonClick}>0</button>
        <button type="button" className="button" name="." onClick={handleButtonClick}>.</button>
        <button type="button" className="button sign" name="=" onClick={handleButtonClick}>=</button>
      </div>
    </div>
  );
};
const Display = ({ value }) => (
  <div className="display">
    <p>{value}</p>
  </div>
);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Calculator;

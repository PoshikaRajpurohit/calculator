
import React, { useState } from 'react';

const CalculatorComp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const Result = eval(input);
        setResult(Result);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '%', '+',
    'C','='
  ];

  return (
    <>
    <h1> Calculator</h1>
    <div className='container'>
      <div className='display'>
        <div>{input}</div>
        <div className='result'>{result}</div>
      </div>
      <div className='buttons'>
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}  >
          {btn}
          </button>
        )
        )
        }
      </div>
    </div>
    </>
  );
};



export default CalculatorComp;

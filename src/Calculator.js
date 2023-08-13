// src/Calculator.js
import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
    setResult("");
  };

  const handleEqual = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result"> {result} </div>{" "}
      </div>{" "}
      <div className="buttons">
        <div className="button-row">
          <button onClick={() => handleButtonPress("7")}> 7 </button>{" "}
          <button onClick={() => handleButtonPress("8")}> 8 </button>{" "}
          <button onClick={() => handleButtonPress("9")}> 9 </button>{" "}
          <button onClick={() => handleButtonPress("+")}> + </button>{" "}
        </div>{" "}
        <div className="button-row">
          <button onClick={() => handleButtonPress("4")}> 4 </button>{" "}
          <button onClick={() => handleButtonPress("5")}> 5 </button>{" "}
          <button onClick={() => handleButtonPress("6")}> 6 </button>{" "}
          <button onClick={() => handleButtonPress("-")}> - </button>{" "}
        </div>{" "}
        <div className="button-row">
          <button onClick={() => handleButtonPress("1")}> 1 </button>{" "}
          <button onClick={() => handleButtonPress("2")}> 2 </button>{" "}
          <button onClick={() => handleButtonPress("3")}> 3 </button>{" "}
          <button onClick={() => handleButtonPress("*")}> * </button>{" "}
        </div>{" "}
        <div className="button-row">
          <button onClick={() => handleButtonPress("0")}> 0 </button>{" "}
          <button onClick={() => handleButtonPress(".")}> . </button>{" "}
          <button onClick={() => handleButtonPress("/")}> /</button>
          <button className="clear-button" onClick={handleClear}>
            C{" "}
          </button>{" "}
        </div>{" "}
        <div className="button-row">
          <button className="backspace-button" onClick={handleBackspace}>
            del{" "}
          </button>{" "}
          <button className="equal-button" onClick={handleEqual}>
            {" "}
            ={" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Calculator;

















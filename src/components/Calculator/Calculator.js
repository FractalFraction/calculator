import React from 'react'
import './Calculator.css'
import Button from '../../Button/Button.js'
import Display from '../Display/Display.js'

// Objective 
// User clicks the M+ button
// This should save the string that is in the current display to a property named saved

// Edge Case
// If there is already a saved value, then overwrite it.


 class Calculator extends React.Component {
   constructor(props){
     super(props)
     this.state = {display: '', numbers: ['1','2','3','4','5','6','7','8','9','0'], saved: '', calc: 0, saved_operation: () => {}, isCalcInProgress: false}
   }

   updateDisplay = (number) => {
     // Check the button value
     // Set the state to the current state and add the button value at the right hand side 
     this.setState({display: this.state.display + number})
   }

   // Clear/Reset Methods
   // All Clear Method
   reset = () => {
    this.setState({display: '', saved: '', calc: 0})
  }

  // Clear Method 
    clear = () => {
      this.clearDisplay()
      this.resetCalc()
    }

  // Individual Reset Methods
  resetSaved = () => {
    this.setState({saved: ''})
  }

   clearDisplay = () => {
     this.setState({display: ''})
   }

   resetCalc = () => {
     this.setState({calc: 0})
   }

   // Memory Methods
   saveDisplay = () => {
     this.setState((state) => ({saved: state.display}))
   }

   saveToCalc = () => {
     this.setState((state) => ({calc: parseInt(state.display)}))
   }

   displaySaved = () => {
     this.setState({display: this.state.saved})
   }

   saveOperation = (func) => {
     console.log(this[func])
     // Func is an operation defined in the internal logic methods
     this.setState({saved_operation: this[func]})
   }

   // Display Methods
   displayCalc = () => {
     this.setState((state) => ({display: state.calc.toString()}) )
   }

   // Internal Logic Methods
   add = () => {
     // A callback function is used because then ...
     // React will call setState with the at call time current state
     // See link https://iamsongcho.medium.com/is-setstate-async-b1947fbb25e5

     this.setState((state) => ({calc: state.calc + parseInt(state.display)}) )
   }

   subtract = () => {
     this.setState((state) => ({calc: state.calc - parseInt(state.display)}) ) 
   }

   multiply = () => {
     this.setState((state) => ({calc: state.calc * parseInt(state.display)}) )
   }

   divide = () => {
     this.setState((state) => ({calc: state.calc / parseInt(state.display)}) )
   }

   // Wrapper Functions 

   // When the user clicks the add button 
   // Call the internal logic add function
   // Clear the display

   addThenClearDisplay = () => {
     // Need to ensure this.add() happens first then this.clearDisplay()
     // But as setState is asynchronous, React may group the calls together 
     // Which potentially will lead to an erroneous result for the calc property!
     this.add()
     this.clearDisplay()
   }

   // For subtraction
   // Pre-Requisites

   // Save the current value in the display to calc -- Have a function to do this!
   // Remember that the current operation is subtract -- Done!
   // clear the display -- Have a function to do this
   
   // Button Handlers
   addButtonHandler = () => {
    if (this.state.isCalcInProgress){
      // Perform subtraction
      this.add()
      this.clearDisplay()
   } else {
    this.saveToCalc()
    // Need to know what the saved operation if user 
    // subsequently presses the equal button
    this.saveOperation("add") 
    this.clearDisplay()
    this.setState({isCalcInProgress: true})
   }
   }

   subtractButtonHandler = () => {
     // If this is the first time subtract or an operation was called
     // Could check to see if saved_operation is empty??
     // Could have another state to flag if you are in a calculation??

     if (this.state.isCalcInProgress){
        // Perform subtraction
        this.subtract()
        this.clearDisplay()
     } else {
      this.saveToCalc()
      // Need to know what the saved operation if user 
      // subsequently presses the equal button
      this.saveOperation("subtract") 
      this.clearDisplay()
      this.setState({isCalcInProgress: true})
     }
   }

   multiplyButtonHandler = () => {
    // If this is the first time subtract or an operation was called
    // Could check to see if saved_operation is empty??
    // Could have another state to flag if you are in a calculation??

    if (this.state.isCalcInProgress){
       // Perform subtraction
       this.subtract()
       this.clearDisplay()
    } else {
     this.saveToCalc()
     // Need to know what the saved operation if user 
     // subsequently presses the equal button
     this.saveOperation("multiply") 
     this.clearDisplay()
     this.setState({isCalcInProgress: true})
    }
  }

  divideButtonHandler = () => {
    // If this is the first time subtract or an operation was called
    // Could check to see if saved_operation is empty??
    // Could have another state to flag if you are in a calculation??

    if (this.state.isCalcInProgress){
       // Perform subtraction
       this.divide()
       this.clearDisplay()
    } else {
     this.saveToCalc()
     // Need to know what the saved operation if user 
     // subsequently presses the equal button
     this.saveOperation("divide") 
     this.clearDisplay()
     this.setState({isCalcInProgress: true})
    }
  }

  equalsButtonHandler = () => {
    // Perform the last operation queued e.g add, subtract, multiply etc.
     this.state.saved_operation()
     this.displayCalc()
     this.setState({isCalcInProgress: false})
   }

   render() {
     return(
     <div className="calculator">
        <div className="display">
          <Display displayStr = {`${this.state.display}`} />
        </div>
        <div className="numbers container">
          {this.state.numbers.map(number => {
            return <button key={`number-button-${number}`} id={`number-button-${number}`} data-testid={`number-button-${number}`} onClick={() => this.updateDisplay(number)}>{number}</button>
          })
          }
        </div>
        <button id="operator-add" data-testid="operator-add" onClick={() => this.addButtonHandler()}>+</button>
        <button id="operator-subtract" data-testid="operator-subtract" onClick={() => this.subtractButtonHandler()}>-</button>
        <button id="operator-multiplication" data-testid="operator-multiplication" onClick={() => this.multiplyButtonHandler()}>×</button>
        <button id="operator-multiplication" data-testid="operator-multiplication" onClick={() => this.divideButtonHandler()}>÷</button>
        <button id="operator-equal" data-testid="operator-equal" onClick={() => this.equalsButtonHandler()}>=</button>
        <button id="button-clear" data-testid="button-clear" onClick={() => this.reset()}>AC</button>
        <button id="button-clear" data-testid="button-clear" onClick={() => this.clear()}>C</button>
        <button id="button-memory-get" data-testid="button-memory-get" onClick={() => this.displaySaved()}>M</button>
        <button id="button-memory-add" data-testid="button-memory-add" onClick={() => this.saveDisplay()}>M+</button>
     </div>
     )
   }
 }
 
 export default Calculator



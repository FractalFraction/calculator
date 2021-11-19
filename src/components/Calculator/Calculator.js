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
     this.state = {display: '', numbers: ['1','2','3','4','5','6','7','8','9','0'], saved: '', calc: 0}
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

   // Combined Reset 

   // Memory Methods
   saveDisplay = () => {
     this.setState({saved: this.state.display})
     console.log(`1 Display: ${this.state.display}, Saved: ${this.state.saved}, Calc: ${this.state.calc}`)
   }

   displaySaved = () => {
     this.setState({display: this.state.saved})
   }

   // Display Methods
   displayCalc = () => {
     this.setState((state) => ({display: state.calc.toString()}) )
   }

   // Internal Logic Methods
   add = () => {
     // Take the current value in display 
     // Convert it to an integer
     // Add it to the calc state 
     // Update the calc state with the new value
     // 
     // A callback function is used because then ...
     // React will call setState with the at call time current state
     // See link https://iamsongcho.medium.com/is-setstate-async-b1947fbb25e5

     this.setState((state) => ({calc: state.calc + parseInt(state.display)}) )
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

   // When the user clicks equals
   // It performs the last operation +, -, / or *
   // then calls displayCalc 

   // For now just call +
   addThenDisplay = () => {
     this.add()
     this.displayCalc()
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
        <button id="operator-add" data-testid="operator-add" onClick={() => this.addThenClearDisplay()}>+</button>
        <button id="operator-equal" data-testid="operator-equal" onClick={() => this.addThenDisplay()}>=</button>
        <button id="button-clear" data-testid="button-clear" onClick={() => this.reset()}>AC</button>
        <button id="button-clear" data-testid="button-clear" onClick={() => this.clear()}>C</button>
        <button id="button-memory-get" data-testid="button-memory-get" onClick={() => this.displaySaved()}>M</button>
        <button id="button-memory-add" data-testid="button-memory-add" onClick={() => this.saveDisplay()}>M+</button>
     </div>
     )
   }
 }
 
 export default Calculator



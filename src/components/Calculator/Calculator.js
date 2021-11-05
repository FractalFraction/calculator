import React from 'react'
import './Calculator.css'
import Button from '../../Button/Button.js'
import Display from '../Display/Display.js'

 class Calculator extends React.Component {
   constructor(props){
     super(props)
     this.state = {display: '', numbers: ['1','2','3','4','5','6','7','8','9']}
   }

   updateDisplay = (number) => {
     // Check the button value
     // Set the state to the current state and add the button value at the right hand side 
     this.setState({display: this.state.display + number})
   }

   clearDisplay = () => {
     this.setState({display: ''})
   }

   render() {
     return(
     <div className="calculator">
        <div className="display">
          <Display displayStr = {`${this.state.display}`} />
        </div>
        <div className="numbers container">
          {this.state.numbers.map(number => {
            return <button id={`number-button-${number}`} data-testid={`number-button-${number}`} onClick={() => this.updateDisplay(number)}>{number}</button>
          })
          }
        </div>
        <button id="button-clear" data-testid="button-clear" onClick={() => this.clearDisplay()}>AC</button>
     </div>
     )
   }
 }
 
 export default Calculator



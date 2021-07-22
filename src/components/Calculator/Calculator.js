import React from 'react'
import Button from '../../Button/Button.js'
import Display from '../Display/Display.js'

 class Calculator extends React.Component {
   constructor(props){
     super(props)
     this.state = {display: '', button: ['1','2']}
   }

   updateDisplay = (i) => {
     // Check the button value
     // Set the state to the current state and add the button value at the right hand side 
     this.setState({display: this.state.display + this.state.button[i]})
   }

   render() {
     return(
     <div>
        <Display displayStr = {`${this.state.display}`} />
        <button id={`number-button-${this.state.button[0]}`} data-testid={`number-button-${this.state.button[0]}`} onClick={() => this.updateDisplay(0)}>{this.state.button[0]}</button>
        <button id={`number-button-${this.state.button[1]}`} data-testid={`number-button-${this.state.button[1]}`} onClick={() => this.updateDisplay(1)}>{this.state.button[1]}</button>
     </div>
     )
   }
 }
 
 export default Calculator

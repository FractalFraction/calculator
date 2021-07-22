import React from 'react'

const Button = (props) => {
return ( <p id={`number-button-${props.value}`}data-testid={`number-button-${props.value}`} onClick={props.onClick}>{props.value}</p> )
}




export default Button
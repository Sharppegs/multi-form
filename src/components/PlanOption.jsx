import React from 'react'

function PlanOption(props) {
    let styles = {
        backgroundColor: props.isSelected ? "#F8F9FF" : "",
        border: props.isSelected ? "2px solid #483EFF" : "",
    }
  return (
    <div 
        className="plan-option"
        style={styles} 
        key={props.id} 
        id={props.id} 
        onClick={() => props.chosen(props.id)}
    >
            <img className='option-image' src={props.image} />
            <div className='plan-name-price'>
              <h3>{props.name}</h3>
              <p>{props.price}</p>
            </div>
    </div>
  )
}

export default PlanOption
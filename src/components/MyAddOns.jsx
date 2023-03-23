import React from 'react'
import { Formik, Form, Field, useField } from 'formik';
import { nanoid } from 'nanoid';


function MyAddOns(props) {

  let hstyles = {
    backgroundColor: props.isSelected ? "#F8F9FF" : "",
    border: props.isSelected ? "2px solid #483EFF" : "",
}
    return (
        <div
          className="add-on-checkbox"
          style={hstyles} 
          value={props.value} 
          key={nanoid()}
          id={props.id}
          onClick={() => props.chosen(props.id)}
          >
            <img src={props.isSelected ? "/checkbox.png" : "/empty-checkbox.png"} alt="checkbox" />
  
          <div className='checkbox-details'>
              <p className='add-on-title'>{props.name}</p>
              <p className='add-on-subtitle'>{props.subtitle}</p>
          </div>

          <div className='checkbox-price'>
              <p>{props.price}</p>
          </div>
        </div>
        
       
    )

}

export default MyAddOns

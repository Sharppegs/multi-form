import React from 'react'
import { Formik, Field, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyAddOns from '../components/MyAddOns.jsx';
import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Context} from "../Context.jsx"
import SideBar from '../components/SideBar'
import { nanoid } from 'nanoid';


function AddOns() {
  const [addOns, setAddOns] = useState(
    [
      {
        id: 0, 
        name: "Online Service",
        subtitle: "Access to multiplayer games",
        price: "$1/mo",
        value: {id: 0, name: "Online Service", price: 1},
        isSelected: false
      },
      {
  
        id: 1, 
        name: "Larger Storage",
        subtitle: "Extra 1TB of cloud save",
        price: "$2/mo",
        value: {id: 1, name: "Larger Storage", price: 2},
        isSelected: false
      },
      {
        id: 2, 
        name: "Customizable Profile",
        subtitle: "Custom theme on your profile",
        price: "$2/mo",
        value: {id: 2, name: "Customizable Profile", price: 2},
        isSelected: false
      }
    ])

  const [chosenItems, setChosenItems] = useState([])
  
  const [addOnValues, setAddOnValues] = useState([])
  const {addUserData} = useContext(Context)
  const navigate = useNavigate()

function isChecked(value) {
  console.log(value)
  
}
  
  const addOnBoxes = addOns.map((option) => 
    <MyAddOns
            key={nanoid()}
            id={option.id}
            name={option.name}
            subtitle={option.subtitle}
            price={option.price}
            value={option.value}
            isSelected={option.isSelected}
            chosen={isChecked}
     />
  )

  function handleSubmit() {
    
    console.log(e.firstName)
    addUserData(e)
    setTimeout(() => {
      navigate('/add-ons', { replace: true })
    }, 2000)

  }


  

  return (
    <div className="page-container">
      <SideBar id={3} />
      <div className='add-on-info'>
      
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
   
        {addOnBoxes}
       
      <div className='section-btns'>
            <button className='go-back-button' onClick={() => navigate('/select-plan')}>Go Back</button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>

      
      </div>
    </div>
  )
}

export default AddOns
import React from 'react'
import { Formik, Field, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyAddOns from '../components/MyAddOns.jsx';
import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Context} from "../Context.jsx"
import SideBar from '../components/SideBar'
import { nanoid } from 'nanoid';


function AddOns(props) {
  
  const [addOns, setAddOns] = useState(
    [
      {
        id: 0, 
        name: "Online Service",
        subtitle: "Access to multiplayer games",
        price: "$1/mo",
        year: "$10/yr",
        value: {id: 0, name: "Online Service", price: 1},
        yearValue: {id: "0y", name: "Online Service", price: 10},
        isSelected: false
      },
      {
  
        id: 1, 
        name: "Larger Storage",
        subtitle: "Extra 1TB of cloud save",
        price: "$2/mo",
        year: "$20/yr",
        value: {id: 1, name: "Larger Storage", price: 2},
        yearValue: {id: "1y", name: "Larger Storage", price: 20},
        isSelected: false
      },
      {
        id: 2, 
        name: "Customizable Profile",
        subtitle: "Custom theme on your profile",
        price: "$2/mo",
        year: "$20/yr",
        value: {id: 2, name: "Customizable Profile", price: 2},
        yearValue: {id: "2y", name: "Customizable Profile", price: 20},
        isSelected: false
      }
    ])

  const {userData, addUserData, removeUserDataItem, userPrice, addUserPrice, clearUserPrice} = useContext(Context)
  const navigate = useNavigate()
 console.log(userPrice)
 console.log(props.mode)


  function handleChange(id) {
    setAddOns(oldPlans => oldPlans.map(plan => {
      return plan.id === id ?
      {...plan, isSelected: !plan.isSelected} :
      {...plan, isSelected: plan.isSelected}
    }))
}

  
  const addOnBoxes = addOns.map((option) => 
    <MyAddOns
            key={nanoid()}
            id={option.id}
            name={option.name}
            subtitle={option.subtitle}
            price={option.price}
            yearPrice={option.year}
            value={option.value}
            yearValue={option.yearValue}
            mode={props.mode}
            isSelected={option.isSelected}
            chosen={handleChange}
            
     />
  )

  function handleSubmit() {
    addOns.map(addOn => {
      if(props.mode && addOn.isSelected) {
        addUserData(addOn.value)
        addUserPrice(addOn.value.price)
      } else if(!props.mode && addOn.isSelected) {
        addUserData(addOn.yearValue)
        addUserPrice(addOn.yearValue.price)
      }
    })
    setTimeout(() => {
      navigate('/Todo', { replace: true })
    }, 500)

  }

  function goBack() {
    clearUserPrice()
    removeUserDataItem(userData[1]?.name)
    navigate('/select-plan', { replace: true })
  
}
  

  return (
    <div className="page-container">
      <SideBar id={3} />
      <div className="form-container">
        <div className='add-on-info'>
        <div className='section-title'>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="add-on-container">
            {addOnBoxes}
        </div>
        </div>
        <div className='section-btns'>
              <button className='go-back-button' onClick={goBack}>Go Back</button>
              <button type="submit" className='next-button' onClick={handleSubmit}>Next Step</button>
          </div>
      </div>
    </div>
  )
}

export default AddOns
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Context} from "../Context.jsx"
import PlanOption from '../components/PlanOption.jsx';
import {nanoid} from 'nanoid'
import SideBar from '../components/SideBar'

function SelectPlan() {
  const [plans, setPlans] = useState(
    [
      {
        image: "/icon-arcade.svg",
        id: 0, 
        planName: "Arcade",
        price: "$9/mo",
        value: {id: 0, name: "Arcade", price: 9},
        isSelected: false
      },
      {
        image: "/icon-advanced.svg",
        id: 1, 
        planName: "Advanced",
        price: "$12/mo",
        value: {id: 1, name: "Advanced", price: 12},
        isSelected: false
      },
      {
        image: "/icon-pro.svg",
        id: 2, 
        planName: "Pro",
        price: "$15/mo",
        value: {id: 2, name: "Pro", price: 15},
        isSelected: false
      },

    ])
  
  const {userData, addUserData, clearUserData, addUserPrice} = useContext(Context)
  const navigate = useNavigate()
  console.log(userData)

  function optionChosen(id) {
    setPlans(oldPlans => oldPlans.map(plan => {
      return plan.id === id ?
      {...plan, isSelected: !plan.isSelected} :
      {...plan, isSelected: false}
    }))
  }

  const PlanBoxes = plans.map(box => 
    <PlanOption
      key={box.id}
      id={box.id}
      image={box.image}
      name={box.planName}
      price={box.price}
      value={box.value}
      isSelected={box.isSelected}
      chosen={optionChosen}
      
      />
      )

  function handleSubmit() {
    plans.map(plan => {
      if(plan.isSelected) {
        addUserData(plan.value)
        addUserPrice(plan.value.price)
      }
    })
    setTimeout(() => {
      navigate('/add-ons', { replace: true })
    }, 500)

  }

function goBack() {
    clearUserData()
    navigate('/', { replace: true })
  
}
  

  return (
    <div className="page-container">
      <SideBar id={2} />
      
      <div className="form-container">
        <div className='plan-info'>
          <div className='section-title'>
            <h1>Select Plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <div className='box-container'>
            {PlanBoxes}
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

export default SelectPlan
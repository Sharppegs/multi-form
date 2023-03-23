import React from 'react'
import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Context} from "../Context.jsx"
import SideBar from '../components/SideBar';
import { nanoid } from 'nanoid';

function Todo() {
  const {userData, addUserData, clearUserData, removeUserDataItem, userPrice, removeUserPrice} = useContext(Context)
  const navigate = useNavigate()
  const totalPrice = userPrice.reduce((a,b) => a + b, 0)
  console.log(userData)

      function handleSubmit() {
        addOns.map(addOn => {
          if(addOn.isSelected) {
            addUserData(addOn.value)
          }
        })
        setTimeout(() => {
          navigate('/Todo', { replace: true })
        }, 500)
    
      }
    
      function goBack() {
        removeUserDataItem(userData[2]?.name)
        removeUserDataItem(userData[3]?.name)
        removeUserDataItem(userData[4]?.name)
        removeUserPrice(userPrice[1])
        removeUserPrice(userPrice[2])
        removeUserPrice(userPrice[3])
        navigate('/add-ons', { replace: true })

    }

  return (
    <div className="page-container">
    <SideBar id={4} />
    <div className="form-container">
      <div className='add-on-info'>
      <div className='section-title'>
        <h1>Finishing up</h1>
        <h2>Welcome aboard, {userData[0]?.name}!</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="totals-container">
        <div className='final-choice-plan'>
          <div>
            <h3>{userData[1]?.name}</h3>
            <p>change</p>
          </div>
          <h3>${userData[1]?.price}/mo</h3>
        </div>
        {userData.slice(2).map(item => 
          <div className='final-choice-addon' key={nanoid()}>
              <p>{item.name}</p>
            <p>${item.price}/mo</p>
          </div>)}
          {/* <div className='final-choice-plan'>
            <p>{userData[1]?.name}</p>
            <p>${userData[1]?.price}/mo</p>
          </div>
          <div className="final-choice-addon">
            <p>{userData[2]?.name}</p>
            <p>${userData[2]?.price}/mo</p>
          </div>
          <div className="final-choice-addon">
            <p>{userData[3]?.name}</p>
            <p>${userData[3]?.price}/mo</p>
          </div>
          <div className="final-choice-addon">
            <p>{userData[4]?.name}</p>
            <p>${userData[4]?.price}/mo</p>
          </div>
          <div className="final-choice-addon">
            <p>{userData[5]?.name}</p>
            <p>${userData[5]?.price}/mo</p>
          </div> */}
      </div>
      <div className='totals'>
        <p className="total-text">Total (per month):</p>
        <h3>${totalPrice}</h3>
      </div>
      </div>
      <div className='section-btns'>
            <button className='go-back-button' onClick={goBack}>Go Back</button>
            <button type="submit" className='confirm-btn' onClick={handleSubmit}>Confirm</button>
        </div>
    </div>
  </div>
    
  )
}

export default Todo

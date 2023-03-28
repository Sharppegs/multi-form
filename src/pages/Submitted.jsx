import React from 'react'
import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Context} from "../Context.jsx"
import SideBar from '../components/SideBar';
import { nanoid } from 'nanoid';

function Submitted() {
  const {userData, userPrice, clearUserData, clearUserPrice} = useContext(Context)
  const navigate = useNavigate()
  console.log(userPrice)
 

      function handleSubmit() {
        clearUserData()
        clearUserPrice()
        setTimeout(() => {
          navigate('/', { replace: true })
        }, 500)
    
      }
    
      function goBack() {
        navigate('/Todo', { replace: true })

    }

  return (
    <div className="page-container">
    <SideBar id={4} />
    <div className="form-container-submitted">
    <div className="submitted">
        <div className='submitted-text'>
            <img src="/icon-thank-you.svg" alt="" />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. 
                If you ever need support, please feel free to email us at:</p>
            <a href="#"><h4>support@loremgaming.com.</h4></a>
        </div>
     </div>
      <div className='section-btns'>
            <button className='go-back-button' onClick={goBack}>Go Back</button>
            <button type="submit" className='confirm-btn' onClick={handleSubmit}>Restart</button>
        </div>
    </div>
  </div>
    
  )
}

export default Submitted

import React from 'react'
import {useState, useContext} from 'react'
import { useNavigate} from 'react-router-dom';
import {Context} from "../Context.jsx"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import SideBar from '../components/SideBar'
import * as Yup from 'yup';

function PersonalInfo() {
  
  const {userData, addUserData} = useContext(Context)
  const navigate = useNavigate()
  console.log(userData)

  function handleSubmit(e) {
    console.log(e.firstName)
    addUserData(e)
    setTimeout(() => {
      navigate('/select-plan', { replace: true })
    }, 500)

  }

  return (
    <div className="page-container">
    <SideBar id={1} />
    
    <div className="form-container">
    <Formik
      initialValues={{ name: '', email: '', phone: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(55, 'Must be 55 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        
      })}
      onSubmit={(values) => {
        handleSubmit(values)
        
        
       
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      <Form>
      <div className='personal-info'>
        <div className='section-title'>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" placeholder="e.g. Stephen King" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" placeholder="e.g. stephenking@lorem.com" />
        <ErrorMessage name="email" />

        <label htmlFor="phone">Phone</label>
        <Field name="phone" type="text" placeholder="e.g. +1 234 567 890" />
        <ErrorMessage name="phone" />
    </div>

    <div className='section-btns end'>
      <button type="submit" className='next-button'>Next Step</button>
    </div>

      </Form>
    </Formik>

    </div>

    </div>
  )
}

export default PersonalInfo
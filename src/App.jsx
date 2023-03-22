import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SignupForm from './pages/SignupForm'
import Basic from './pages/Basic'
import FormikForm from './pages/FormikForm'
import ConciseFormikForm from './pages/ConciseFormikForm'
import UseFieldForm from './pages/UseFieldForm'
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Todo from './pages/Todo'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/select-plan" element={<SelectPlan />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  )
}

export default App

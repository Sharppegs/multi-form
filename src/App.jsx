import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Todo from './pages/Todo'
import Submitted from "./pages/Submitted"

function App() {
  const [monthly, setMonthly] = useState(true)
    
  function toggleMode() {
      setMonthly(prevMode => !prevMode)
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/select-plan" element={<SelectPlan mode={monthly} 
        toggle={toggleMode} />} />
        <Route path="/add-ons" element={<AddOns mode={monthly} />} />
        <Route path="/todo" element={<Todo mode={monthly} />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </div>
  )
}

export default App

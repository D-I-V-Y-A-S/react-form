import React, { useState } from 'react'
import './BetterFormHandling.css'
const BetterFormHandling = () => {

  const [inputs, setInputs] = useState({})
  
  

  const handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({
      ...values, [name]: value
    }))
  }
 
  function handleRegistrationForm(event) {
    event.preventDefault()
    console.log(inputs)
    console.log(inputs.firstName)
    console.log(inputs.lastName)
    console.log(inputs.stateName)
  }
  return (
    <React.Fragment>
      <div className="field">
        <p className="topic">Better Form Handling</p>
        <form onSubmit={handleRegistrationForm}>
          <label htmlFor='firstName' className="label-name">First Name</label>
          <input className="input-field"
            type='text'
            placeholder='Enter your first name'
            id='firstName'
            name='firstName'
            value={inputs.firstName} 
            onChange={handleInput}
          />
          <label htmlFor='lastName' className="label-name">Last Name</label>
          <input className="input-field"
            type='text'
            placeholder='Enter your last name'
            id='lastName'
            name='lastName'
            value={inputs.lastName}
            onChange={handleInput}
          />
          <label htmlFor='stateName' className="label-name">State</label>
          <select id='stateName' name='stateName' value={inputs.stateName} onChange={handleInput}>
            <option value='' className="label-select" >select</option>
            <option value='Tamilnadu'> Tamilnadu</option>
            <option value='Kerala'> Kerala</option>
            <option value='Andra Pradesh'> Andhra Pradesh</option>
          </select>
          <div className='btn'>
            <button type="submit">Click me!!</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default BetterFormHandling
import React, { useState } from 'react'

const BetterFormHandling= () => {
    const [inputs, setInputs] = useState({})

    const handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values =>({
            ...values, [name]:value
        }))
    }
    function handleRegistrationForm(event) {
        event.preventDefault()
        console.log(inputs.firstName)
        console.log(inputs.lastName)
        console.log(inputs.stateName)
    }
  return (
    <React.Fragment>
      <form>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          placeholder='Enter your first name'
          id='firstName'
          name='firstName'
          value={inputs.firstName}
          onChange={handleInput}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          placeholder='Enter your last name'
          id='lastName'
          name='lastName'
          value={inputs.lastName}
          onChange={handleInput}
        />
        
        <label htmlFor='stateName'>State</label>
        <select id='stateName' name='stateName' value={inputs.stateName} onChange={handleInput}>
        <option value=''>select</option>
          <option value='Tamilnadu'> Tamilnadu</option>
          <option value='Kerala'> Kerala</option>
          <option value='Andra Pradesh'> Andhra Pradesh</option>
        </select>

        <button onClick={handleRegistrationForm}>Click me!!</button>

      </form>
    </React.Fragment>
  )
}

export default BetterFormHandling
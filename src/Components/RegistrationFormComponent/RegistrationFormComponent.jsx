import React, { useState } from 'react';

const RegistrationFormComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [stateName, setStateName] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleStateName = (event) => {
        setStateName(event.target.value);
    }

    const handleRegistrationForm = (event) => {
        event.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(stateName);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleRegistrationForm}>
                <label htmlFor='firstName'></label>
                <input
                    type='text'
                    placeholder='Enter your first name'
                    id='firstName'
                    name='firstname'
                    value={firstName}
                    onChange={handleFirstName}
                />

                <label htmlFor='lastName'></label>
                <input
                    type='text'
                    placeholder='Enter your last name'
                    id='lastName'
                    name='lastname'
                    value={lastName}
                    onChange={handleLastName}
                />

                <label htmlFor='stateName'></label>
                <select name="stateName" id="stateName" value={stateName} onChange={handleStateName}>
                <option value=''>select</option>
                    <option value="TamilNadu">TamilNadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                </select>

                <button type="submit">Click me!</button>
            </form>
        </React.Fragment>
    );
}

export default RegistrationFormComponent;


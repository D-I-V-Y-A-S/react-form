import React, { useState } from 'react';
import './RegistrationFormHandling.css';
const RegistrationFormComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [stateName, setStateName] = useState('');
    const [Registernumber, setRegisternumber] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleStateName = (event) => {
        setStateName(event.target.value);
    }
    const handleRegisternumber = (event) => {
        setRegisternumber(event.target.value);
    }

    const handleRegistrationForm = (event) => {

        event.preventDefault();
        //text place in field doesn't disappear.
        console.log(firstName);
        console.log(lastName);
        console.log(stateName);

    }

    return (
        <React.Fragment>
            <div className="field">
                <p className="topic">Form Handling</p>
                <form onSubmit={handleRegistrationForm}>
                    <label htmlFor='firstName' className="label-name">First Name</label>
                    <input className="input-field"
                        type='text'
                        placeholder='Enter your first name'
                        id='firstName'
                        name='firstname'
                        value={firstName}
                        onChange={handleFirstName}
                    />
                    <br />

                    <label htmlFor='lastName' className="label-name">Last Name</label>
                    <input className="input-field"
                        type='text'
                        placeholder='Enter your last name'
                        id='lastName'
                        name='lastname'
                        value={lastName}
                        onChange={handleLastName}
                    />
                    <br />
                    <label htmlFor='Rno' className="label-name">Registration Number</label>
                    <input
                        type="number"
                        name="Rno"
                        id="registerNumber"
                        className="input-field"
                        placeholder='Register Number'
                        value={Registernumber}
                        onChange={handleRegisternumber}
                    />
                    <br />
                    {/* { console.log({Registernumber} )} */}
                    <label htmlFor='stateName' className="label-name">Select your state</label>
                    <select name="stateName" id="stateName" value={stateName} onChange={handleStateName}>
                        <option value='' className="label-select">select</option>
                        <option value="TamilNadu">TamilNadu</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Karnataka">Karnataka</option>

                    </select>

                    <br />
                    <div className='btn'>
                        <button type="submit">Click me!</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default RegistrationFormComponent;

/*
1.Create usestate for every label.
2.Assign values through setstate.
3.Log the values on submitting the form.
*/
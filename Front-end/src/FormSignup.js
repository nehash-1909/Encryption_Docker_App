import React, { useState }  from 'react';
import validate from './validateInfo';
import DropdownApp from './DropdownApp';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm,sendDataToParent }) => {
  const [string, setString] = useState(false);
  // const { handleChange, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  function handleChange(event) {
    console.log(event.target.value)
    setString(event.target.value)
  }

  function handleSubmit() {
    sendDataToParent(string);
    console.log("Clicked")
    submitForm(true);
  }

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>
          Convert your string into your selected encryption form
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>String</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your string'
            // value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Output</label>
          <DropdownApp/>
        </div>
        <button className='form-input-btn' type='submit'>
          Convert
        </button>
      </form>
    </div>
  );
};

export default FormSignup;

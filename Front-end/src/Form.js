import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [string, setString] = React.useState(null); // the lifted state

  const sendDataToParent = (index) => { // the callback. Use a better name
    console.log("String is",index);
    setString(index);
  };

  const submitForm = (index) => { // the callback. Use a better name
    console.log("SUBMITTED FORM",index);
    console.log("SUBMITTED value",isSubmitted);
    setIsSubmitted(true);
    console.log("SUBMITTED changed",isSubmitted);
  };
  // function submitForm() {
  //   setIsSubmitted(true);
  // }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/logo.png' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} sendDataToParent={sendDataToParent}/>
          ) : (
            <FormSuccess encryptString={string}/>
          )}
      </div>
    </>
  );
};

export default Form;

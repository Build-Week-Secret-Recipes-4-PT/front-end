import React, { useState, useEffect } from "react";
import * as yup from "yup"; 
import axios from "axios";
import {connect} from 'react-redux';
import { updateLoginAndRegisterForm, clearLoginAndRegisterForm, setErrorsLoginAndRegister, clearErrorsLoginAndRegister, registerUser, testyup } from './Redux/actionCreators'

function RegistrationForm(props) {
  
  const [post, setPost] = useState([]);
  
  // IS IN STORE
  const [serverError, setServerError] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  useEffect(() => {
    formSchema.isValid(props.form).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [props.form]);

  // YUP SCHEMA
  const formSchema = yup.object().shape({
    email: yup.string().email("must be a valid email address").required(),
    password: yup
      .string()
      .required("Password is required.")
      .min(8)
  });
 
  // YUP VALIDATION
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name) 
      .validate(e.target.value) 
      .then((valid) => {
        props.clearErrors()
      })
      .catch((err) => {
        console.log("error!", err);
        props.setErrors(e, err)
      });
  };
  
  // DISPATCH CHANGE AND VALIDATE
  const formChangeValidation = (e) => {
    props.updateForm(e);
    validateChange(e)
  }

  // DISPATCH
  // const formSubmit = (e) => {
    // e.preventDefault();
    // WILL NEED TO BE PUT INTO DISPATCH EVENTUALLY, SAVE THUNKS FOR END
    // axios
    // FOR NOW CHANGE FORMSTATE TO PROPS.FORM
      // .post("https://reqres.in/api/users", formState)
      // .then((response) => {
      //   setPost(response.data); 
        // DISPATCH CLEAR FORM
        // setFormState({
        //   email: "",
        //   password: ""
        // });    
      // FINE FOR NOW, WILL NEED TO BE SET INTO STORE 
        // setServerError(null);
      // })
      // .catch((err) => {
      // FINE FOR NOW, WILL NEED TO BE SET INTO STORE 
        // setServerError("Error Message");
      // })
  // };

  const formSubmit = e => {
    e.preventDefault();
    props.submit(props.form)
  }

  return (
    // REMOVE FRAGMENT
    <>
    {/* ORIGINAL ONSUBMIT WAS 'FORMSUBMIT' */}
    <form id='RegistrationForm' onSubmit={(e) => formSubmit(e)}>

      {/* SERVER ERROR IN STORE */}
      {serverError ? <p className="error">{serverError}</p> : null}
<header>
  Register
</header>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          onChange={formChangeValidation}
          value={props.form.email}
        />

        {props.errors.email.length > 0 ? (
          <p className="error">{props.errors.email}</p>
        ) : null}

      </label>

      <label htmlFor="password">
        Password
        <input
          id="password"
          type="text"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          value={props.form.password}
          onChange={formChangeValidation}
        />
      </label>

      {/* IM NOT SURE THIS NEEDS TO BE A JSON STRING, OR WHAT EXACTLY THIS IS DOING */}
      <pre>{JSON.stringify(post, null, 2)}</pre>

      <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>

      <button disabled={isButtonDisabled} type="submit" >
        Submit
      </button>  

      <div className="container signin">
        <p>Already have an account? <a href="/">Login</a>.</p>  
      </div>

    </form>
       <button onClick={props.testyup} >click to test reducer </button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    form: state.loginAndRegister,
    errors: state.errorsLoginAndRegister,
    test: state.test
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateForm: (e) => dispatch (updateLoginAndRegisterForm(e)),
    clearForm: () => dispatch (clearLoginAndRegisterForm()),
    setErrors: (e, err) => dispatch (setErrorsLoginAndRegister(e, err)),
    clearErrors: () => dispatch (clearErrorsLoginAndRegister()),
    submit: (form) => dispatch (registerUser(form)),
    testyup: () => dispatch(testyup())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
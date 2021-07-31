import React, { useState, useEffect } from "react";
import * as yup from "yup"; 
import axios from "axios";
import {connect} from 'react-redux';
import { updateLoginAndRegisterForm, clearLoginAndRegisterForm, setErrorsLoginAndRegister, clearErrorsLoginAndRegister, registerUser, testyup } from './Redux/actionCreators'

function RegistrationForm(props) {

  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  
  const [post, setPost] = useState([]);
  
  // IS IN STORE
  const [serverError, setServerError] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  
  const formSchema = yup.object().shape({
    email: yup.string().email("must be a valid email address").required(),
    password: yup
      .string()
      .required("Password is required.")
      .min(8)
  });
 
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name) 
      .validate(e.target.value) 
      .then((valid) => {
        // DISPATCH CLEAR ERRORS
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("error!", err);
        // DISPATCH SET ERRORS
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };
  
  useEffect(() => {
    // FORM STATE IS IN STORE
    formSchema.isValid(formState).then((valid) => {
      // COMMENTING OUT WHILE I WORK ON SETTING UP REDUX
      // console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
    // CHANGE TO PROPS.FORM
  }, [formState, formSchema]);
  
  const formSubmit = (e) => {
    e.preventDefault();
   
    // WILL NEED TO BE PUT INTO DISPATCH EVENTUALLY, SAVE THUNKS FOR END
    axios
    // FOR NOW CHANGE FORMSTATE TO PROPS.FORM
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setPost(response.data); 
        // DISPATCH CLEAR FORM
        setFormState({
          email: "",
          password: ""
        });    
      // FINE FOR NOW, WILL NEED TO BE SET INTO STORE 
        setServerError(null);
      })
      .catch((err) => {
      // FINE FOR NOW, WILL NEED TO BE SET INTO STORE 
        setServerError("Error Message");
      })
  };

  // DISPATCH INPUT
  const inputChange = (e) => {
    // THIS COMMENT IS FOR UNIT 2
    // EVENT.PERSIST SHOULDNT DO ANYTHING ACCORDING TO REACTJS.ORG DOCS
    // CAN WE REMOVE THIS? WHAT WAS THE REASON FOR THE INCLUSION
    e.persist(); 
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "name" ? e.target.name : e.target.value
    }; 
    validateChange(e);
    setFormState(newFormData); 
  };


  return (
    <>
    <form id='RegistrationForm' onSubmit={formSubmit}>
      {/* SERVER ERROR IN STORE */}
      {serverError ? <p className="error">{serverError}</p> : null}
      <label htmlFor="email">
        Email
        <input
          id="password"
          type="text"
          name="email"
          // DISPATCH CHANGE
          onChange={inputChange}
          // CHANGE
          value={formState.email}
        />
        {/* ERRORS IN STORE */}
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
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
          // VALUE IN STORE
          value={formState.password}
          // DISPATCH CHANGE
          onChange={inputChange}
        />
      </label>

      {/* IM NOT SURE THIS NEEDS TO BE A JSON STRING, OR WHAT EXACTLY THIS IS DOING */}
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>         
            <button disabled={isButtonDisabled} type="submit">
              Submit
            </button>  
      <div className="container signin">
        <p>Already have an account? <a href="/">Login</a>.</p>
        
      </div>  
    </form>
       <button onClick={props.testyup} >click to test</button>
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

const mapDispatchToProps = state => {
  return {
    updateForm: updateLoginAndRegisterForm,
    clearForm: clearLoginAndRegisterForm,
    setErrors: setErrorsLoginAndRegister,
    clearErrors: clearErrorsLoginAndRegister,
    submit: registerUser,
    testyup: testyup
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
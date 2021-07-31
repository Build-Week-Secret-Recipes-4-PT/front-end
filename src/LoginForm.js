import React, { useState, useEffect } from "react";
import * as yup from "yup"; 
import axios from "axios";
import {connect} from 'react-redux';
import { clearErrorsLoginAndRegister, clearLoginAndRegisterForm, loginUser, setErrorsLoginAndRegister, testyup, updateLoginAndRegisterForm } from "./Redux/actionCreators";

function LoginForm(props) {

  // ALL THE DISPATCH'S SHOULD BE THE SAME AS THE LOGIN FORM- I THINK
  
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  
  const [post, setPost] = useState([]);
  
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
        // DISPATCH CLEARERRORS
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("error!", err);
        // DISPATCH SETERRORS
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };
  
  useEffect(() => {
    // FORM STATE IS IN STORE
    formSchema.isValid(formState).then((valid) => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
    // WILL NEED TO LOOK INTO STATE
  }, [formState, formSchema]);
  
  // DISPATCH SUBMIT
  const formSubmit = (e) => {
    e.preventDefault();
   
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setPost(response.data);       
        setFormState({
          email: "",
          password: ""
        });       
        setServerError(null);
      })
      .catch((err) => {
        setServerError("Error Message");
      })
  };

  // DISPATCH INPUT CHANGE
  const inputChange = (e) => {
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
    // DISPATCH SUBMIT
    <form id='LoginForm' onSubmit={formSubmit}>
      {/* SERVER ERROR IS IN STORE */}
      {serverError ? <p className="error">{serverError}</p> : null}
      <label htmlFor="email">
        Email
        <input
          id="password"
          type="text"
          name="email"
          // ONCHANGE DISPATCH
          onChange={inputChange}
          // VALUE IS IN STORE
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
          // DISPATCH ON CHANGE
          onChange={inputChange}
        />
      </label>

      <pre>{JSON.stringify(post, null, 2)}</pre>
      <p>Already have an account? <a href="/">Login</a>.</p>         
            <button disabled={isButtonDisabled} type="submit">
              Submit
            </button>  
      <div className="container signin">  
      </div>  
    </form>
  );
}

const mapStateToProps = state => {
  return {
    form: state.loginAndRegister,
    errors: state.errorsLoginAndRegister,
    serverError: state.serverError,
    test: test
  }
}

const mapDispatchToProps = state => {
  return {
    updateForm: updateLoginAndRegisterForm,
    clearForm: clearLoginAndRegisterForm,
    setErrors: setErrorsLoginAndRegister,
    clearErrors: clearErrorsLoginAndRegister,
    submit: loginUser,
    test: testyup
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
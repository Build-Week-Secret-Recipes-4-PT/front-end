import React, { useState, useEffect } from "react";
import * as yup from "yup"; 
import axios from "axios";
import {connect} from 'react-redux';

function RegistrationForm() {
  
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
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("error!", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };
  
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState, formSchema]);
  
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
    <form id='RegistrationForm' onSubmit={formSubmit}>
      {serverError ? <p className="error">{serverError}</p> : null}
      <label htmlFor="email">
        Email
        <input
          id="password"
          type="text"
          name="email"
          onChange={inputChange}
          value={formState.email}
        />
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
          value={formState.password}
          onChange={inputChange}
        />
      </label>

      <pre>{JSON.stringify(post, null, 2)}</pre>
      <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>         
            <button disabled={isButtonDisabled} type="submit">
              Submit
            </button>  
      <div className="container signin">
        <p>Already have an account? <a href="/">Login</a>.</p>
        
      </div>  
    </form>
  );
}

export default connect(null, {})(RegistrationForm);
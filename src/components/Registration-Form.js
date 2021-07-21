import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as yup from "yup"; 
import axios from "axios";

export default function Form() {
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const [post, setPost] = useState([]);
  
  const [serverError, setServerError] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("must be a valid email address").required(),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Passwords must be at least 6 characters long.")
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
          name: "",
          email: "",
          password: ""
        });       
        setServerError(null);
      })
      .catch((err) => {
        setServerError("Error Message");
      });
  };

  const inputChange = (e) => {
    e.persist(); 
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    }; 
    validateChange(e); 
    setFormState(newFormData); 
  };

  return (
    <form onSubmit={formSubmit}>
      {serverError ? <p className="error">{serverError}</p> : null}
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          onChange={inputChange}
          value={formState.name}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
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
          value={formState.password}
          onChange={inputChange}
        />
      </label>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <Switch>
        <Route path="/">           
            <button disabled={isButtonDisabled} type="submit">
              Submit
            </button>
        </Route>
      </Switch>
    </form>
  );
}
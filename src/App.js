import React from "react";

import Form from "./components/Registration-Form";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h1>Registration</h1>
      <Form />
    </div>
  );
}

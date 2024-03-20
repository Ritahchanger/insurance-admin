import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../Authentication.scss";
import "./Login.scss";

const Login = () => {

    const navigate = useNavigate();
  // State for form inputs and errors
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear validation errors for the corresponding input field
    setErrors({ ...errors, [name]: "" });
  };

  // Function to validate form inputs
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, handle form submission logic here
      console.log("Form submitted:", formData);
      navigate('/home');
    }
  };

  return (
    <div className="container">
      <div className="authentication">
        <p className="form-title">ADMIN LOGIN</p>
        <form className="login" id="login" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {/* Display email validation error */}
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            {/* Display password validation error */}
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="input-group">
            <input type="submit" name="submit" value="LOGIN" />
          </div>
          <p className="authentication-handler">
            <a href="#">Have no account -</a>{" "}
            <Link to="/signup">Signup</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

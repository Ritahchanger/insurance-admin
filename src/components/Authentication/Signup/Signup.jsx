import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Authentication.scss";

import "./Signup.scss";

const Signup = () => {
  // State for form inputs and errors
  const [formData, setFormData] = useState({
    userName: "",
    sirName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    sirName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation errors when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  // Function to validate form inputs
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Username validation
    if (!formData.userName) {
      newErrors.userName = "Username is required";
      valid = false;
    }

    // Surname validation
    if (!formData.sirName) {
      newErrors.sirName = "Surname is required";
      valid = false;
    }

    // Firstname validation
    if (!formData.firstName) {
      newErrors.firstName = "Firstname is required";
      valid = false;
    }

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

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
    }
  };

  return (
    <div className="container">
      <div className="authentication">
        <p className="form-title">ADMIN SIGNUP</p>
        <form className="login" id="login" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                name="sirName"
                placeholder="Enter sirname"
                value={formData.sirName}
                onChange={handleChange}
              />
              {/* Display sirname validation error */}
              {errors.sirName && <p className="error">{errors.sirName}</p>}
            </div>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="Enter firstname"
                value={formData.firstName}
                onChange={handleChange}
              />
              {/* Display firstname validation error */}
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="userName"
              placeholder="Enter Username"
              value={formData.userName}
              onChange={handleChange}
            />
            {/* Display username validation error */}
            {errors.userName && <p className="error">{errors.userName}</p>}
          </div>
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
          <div className="form-group">
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
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {/* Display confirm password validation error */}
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="input-group">
            <input type="submit" name="submit" value="SIGNUP" />
          </div>
          <p className="authentication-handler">
            <a href="#">Have an account -</a> <Link to="/">Login</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

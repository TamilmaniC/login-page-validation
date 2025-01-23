import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "userName") {
        return {
          ...prevValue,
          userName: value,
        };
      } else if (name === "email") {
        return {
          ...prevValue,
          email: value,
        };
      } else if (name === "password") {
        return {
          ...prevValue,
          password: value,
        };
      }
    });
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      userName: "",
      email: "",
      password: "",
    };

    if (!contact.userName || contact.userName.length < 4) {
      newErrors.userName = "Username must be atleast 4 characters.";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!contact.email || !emailRegex.test(contact.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!contact.password || contact.password.length < 6) {
      newErrors.password = "Password must be atleast 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully.");
    }
  };

  return (
    <div className="container">
      <h1>Hello</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="userName"
            onChange={handleChange}
            placeholder="Username"
            value={contact.userName}
          />
          {errors.userName && (
            <span style={{ color: "red" }}>{errors.userName}</span>
          )}
        </div>

        <div>
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={contact.email}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <input
            name="password"
            onChange={handleChange}
            placeholder="Password"
            value={contact.password}
            type="password"
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;

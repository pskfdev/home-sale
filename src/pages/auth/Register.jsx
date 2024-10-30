import React, { useState } from "react";
//Components
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { FiArrowLeftCircle } from "react-icons/fi";
//Functions
import { register } from "../../functions/auth";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    name: "",
  });

  const [errors, setErrors] = useState({
    passwordMatch: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // validate confirmPassword และ password
    if (name === "password" || name === "cpassword") {
      setErrors({
        ...errors,
        passwordMatch:
          (formData.password !== value && name === "cpassword") ||
          (formData.cpassword !== value && name === "password"),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errors.passwordMatch) {
      register(formData)
        .then((res) => {
          alert(res.data.msg);
        })
        .catch((err) => {
          console.log("Error", err);
          alert("Register fail!!");
        });
    }

    setFormData({
      email: "",
      password: "",
      cpassword: "",
      name: "",
    });
  };

  return (
    <Container
      maxWidth="xs"
      className="flex justify-center items-center min-h-screen"
    >
      <Link to="/login" className="absolute top-20 left-4 cursor-pointer">
        <FiArrowLeftCircle size={35} className="text-gray-400 hover:text-blue-400" />
      </Link>
      
      <Box className="bg-white p-6 rounded-lg shadow-lg w-full">
        <Typography variant="h5" className="text-center uppercase pb-4">
          Register
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField
            required
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            required
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            required
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            fullWidth
            value={formData.password}
            onChange={handleChange}
          />

          <TextField
            required
            label="Confirm Password"
            name="cpassword"
            variant="outlined"
            type="password"
            fullWidth
            value={formData.cpassword}
            onChange={handleChange}
            error={errors.passwordMatch}
            helperText={errors.passwordMatch ? "Passwords do not match" : ""}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white"
            disabled={errors.passwordMatch}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Register;

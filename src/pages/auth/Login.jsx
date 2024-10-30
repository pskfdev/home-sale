import React, { useState } from "react";
import { useNotify } from "react-admin";
import { Link, useNavigate } from "react-router-dom";

//components
import { Box, Button, TextField, Typography } from "@mui/material";
//functions
import { login } from "../../functions/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = useNotify();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    login({ email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.payload.name);
        localStorage.setItem("userrole", res.data.payload.role);
        roleBaseRedirect(res.data.payload.role);
      })
      .catch((err) => {
        console.log("Error", err);
        alert(err.response.data.msg);
        notify(err.response.data.msg, { type: "error" });
      });
  };

  const roleBaseRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={10}
      className="h-screen"
    >
      <Typography variant="h4" gutterBottom className="uppercase">
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          required
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <Link
        to="/register"
        className="mt-5 text-blue-500 uppercase underline underline-offset-4"
      >
        register
      </Link>
    </Box>
  );
}

export default Login;

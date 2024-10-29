import React, { useState } from "react";
import { useNotify } from "react-admin";
import { useNavigate } from "react-router-dom";

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
        localStorage.setItem("username", res.data.payload.name)
        localStorage.setItem("userrole", res.data.payload.role)
        roleBaseRedirect(res.data.payload.role);
      })
      .catch((err) => {
        console.log("Error", err);
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
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
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
    </Box>
  );
}

export default Login;

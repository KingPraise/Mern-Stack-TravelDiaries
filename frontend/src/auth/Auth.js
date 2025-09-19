import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { sendAuthRequest } from "../api-helpers/helpers";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    if (isSignup) {
      sendAuthRequest(true, inputs)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputs)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box
      width={"40%"}
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin={"auto"}
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"60%"}
          padding={5}
          margin={"auto"}
        >
          <Typography padding={2} variant="h4" textAlign={"center"}>
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          {isSignup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputs.name}
                name="name"
                margin="normal"
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            margin="normal"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handleChange}
            name="password"
            value={inputs.password}
            margin="normal"
            type="password"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: 3, borderRadius: 10 }}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            type="submit"
            sx={{ marginTop: 3, borderRadius: 10 }}
            variant="outlined"
          >
            Change to {isSignup ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;

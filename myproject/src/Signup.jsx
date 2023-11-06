import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  let HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result)
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-25 m-auto">
      <div className="">Registration Form</div>
      <Form className="" onSubmit={HandleSubmit}>
        {/* Name Input Field */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll share your name with anyone else.
          </Form.Text>
        </Form.Group>
        {/*  Email Input Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* Password Input Field */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        {/* SignUp Button*/}
        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
      {/* Login Button */}
      <Link to={"/login"} variant="primary" type="submit">
        Login
      </Link>
    </div>
  );
};

export default Signup;

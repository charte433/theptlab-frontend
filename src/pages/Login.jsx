import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { useNavigate } from 'react-router'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500") center;
    display: flex;
    align-items: center;
    justify-content: center;
background-size: cover;
`
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 5px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
cursor: pointer;
display: flex;
flex-direction: column;
`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
const Link1 = styled.a`
margin: 5px 0px;
font-size: 12px;
`

const Error = styled.span`
color: red;
`

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const { isFetching, error } = useSelector((state) => state.user);

  //handle the login request
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick}>LOGIN </Button>
          <Link onClick={() => {
              navigate("/register");
            }}>Not Registered? Sign up here</Link>
          <Link1>Forgot Password? Email our customer support team</Link1>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
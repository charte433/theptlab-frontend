import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { registerRequest } from "../redux/authRedux";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 5px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
cursor: pointer;
justify-content: space-between;
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { isFetching, currentUser, error } = useSelector((state) => state.user);

    const checkPassword = () => {
        if (password !== confirmPassword) {
            return false;
        } else if (password.length < 8) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkPassword() &&
            registerRequest(dispatch, {
                firstname,
                lastname,
                username,
                password,
                email,
            });
    };

    useEffect(() => currentUser && navigate("/"), [currentUser, navigate]);
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Firstname" onChange={(e) => setFirstName(e.target.value)} />
                    <Input placeholder="Lastname" onChange={(e) => setLastName(e.target.value)} />
                    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Input placeholder="Re-enter Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Agreement>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleSubmit}>SIGN UP</Button>
                    <Link onClick={() => {
                        navigate("/login");
                    }}>Got an account? Sign in here</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
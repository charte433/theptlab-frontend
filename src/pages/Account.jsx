import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from '../redux/userRedux'
import { openModel } from "../redux/modelRedux"

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 75%;
height: 50vh;
object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 250;
`
const Description = styled.p`
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
margin: 5px 10px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
const AdminButton = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
cursor: pointer;
justify-content: space-between;
`

const Account = () => {
    //use navigate to direct users after an onclick function
    const navigate = useNavigate();
    //use dispatch to dispatch the logout call
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const admin = useSelector((state) => state.user?.currentUser?.isAdmin);

    const handleSignOut = () => {
        dispatch(logOut());
        navigate("/");
      };

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>USER INFORMATION</Title>
                    <Description>FULL NAME: {user.firstname} {user.lastname}</Description>
                    <Description>USERNAME: {user.username}</Description>
                    <Description>EMAIL: {user.email}</Description>
                    <Description>BIO: Hi there, I'm a new user!</Description>
                    <Button onClick={() => {
                        navigate("/account/orders");
                    }}>MY ORDER'S</Button>
                    <Link onClick={handleSignOut}>LOGOUT</Link>
                </InfoContainer>
            </Wrapper>
            {user.isAdmin && (
            <AdminButton onClick={() => {
                        navigate("/account/admin");
                    }}>ADMIN</AdminButton>
            )}
            <Footer />
        </Container>
    )
}


export default Account
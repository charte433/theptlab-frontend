import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderList from '../components/OrderList'
//import OrderList from "../components/OrderList";

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 50vh;
object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 20px 50px;
`
const Title = styled.h1`
font-weight: 250;
`
const Description = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 30px;
`
const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 30px 0px;
`
const Button = styled.button`
width: 100%;
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

const NotAuthorised = () => {
    const navigate = useNavigate();
    const admin = useSelector((state) => state.user?.currentUser?.isAdmin);

    //only allow access to admin page if the user is admin
    // this is because admin page allows users to add products. To increase security etc
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
            <Title>YOU DO NOT HAVE ACCESS TO THIS PAGE. PLEASE CONTACT
                OUR SUPPORT TEAM IF YOU WISH TO JOIN THE PT LAB ADMIN TEAM.
            </Title>
                <InfoContainer>
                    <Button onClick={() => {
                        navigate("/account");
                    }}>BACK</Button>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default NotAuthorised
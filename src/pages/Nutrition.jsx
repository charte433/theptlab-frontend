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
height: 30vh;
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

const Nutrition = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <InfoContainer>
                    <Title>NUTRITION INFORMATION</Title>
                    <Description>Hi, {user.username}, do you want to speak to a qualified nutritionalist
                    to get a customised diet plan?</Description>
                    <Description>If not, why don't you browse our selection of ready made plans using the link below:</Description>
                    <Button onClick={() => {
                        navigate("/products/other");
                    }}>BUY DIET PLAN's</Button>
                    <Description>DIET INFORMATION</Description>
                    <Description>We have a variety of diet meal plans on offer in our Plan's products page</Description>
                    <Description>MUSLCE BUILD INFORMATION</Description>
                    <Description>We have a variety of muscle building diet plans on offer in our Plan's products page</Description>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}


export default Nutrition
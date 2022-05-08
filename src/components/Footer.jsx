import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const Container = styled.div`
display: flex;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1``

const Description = styled.p`
margin: 10px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: black;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 5px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img``

const Footer = () => {
    const navigate = useNavigate();
  return (
    <Container>
        <Left>
            <Logo>THE PT LAB</Logo>
            <SocialContainer>
                <SocialIcon color="#e9f5f5" onClick={() => {
                        navigate("https://www.facebook.com/");
                    }}>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="#e9f5f5">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="#e9f5f5">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
        <Title>Contact Us</Title>
            <ContactItem> <Phone style={{marginRight: "10px"}}/>(028) 9012 3456</ContactItem>
            <ContactItem> <Mail style={{marginRight: "10px"}}/>contact@theptlab.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Center>
        <Right>
            <Title>Explore Us</Title>
            <List>
            <ListItem>Men's Gym Wear</ListItem>
                <ListItem>Women's Gym Wear</ListItem>
                <ListItem>Lifting Straps</ListItem>
                <ListItem>Workout/Diet Plans</ListItem>
            </List>
        </Right>
    </Container>
  )
}

export default Footer
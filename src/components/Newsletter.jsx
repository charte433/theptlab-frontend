import { SendOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: white;
`
const Title = styled.h1`
font-size: 50px;
margin-bottom: 20px;
color: white;
`
const Description = styled.div`
font-size: 20px;
font-weight: 300;
margin-bottom: 20px;
color: white;
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
`
const Input = styled.input`
border: none;
flex: 8;
`
const Button = styled.button`
flex: 1;
border: none;
cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
    </Container>
  )
}

export default Newsletter
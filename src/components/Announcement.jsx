import React from 'react'
import styled from 'styled-components'

//set the dimensions for the container
const Container = styled.div`
height: 30px;
background-color: #9966ff;
color: white;
display: flex;
align-items: center;
justify-content: center;
`

const Announcement = () => {
  return (
    <Container>
        FREE SHIPPING ON ALL ORDERS OVER 50£
    </Container>
  )
}

export default Announcement
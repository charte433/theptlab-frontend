import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Info = styled.div`
opacity: 0;
height: 100%;
width: 100%;
top: 0;
left: 0;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
z-index: 3;
background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`

const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Image = styled.img`
height: 75%;
z-index: 2;
`

const Icon = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`


const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
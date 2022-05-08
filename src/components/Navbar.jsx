import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Container = styled.div`
height: 60px;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;`;

const Home = styled.span`
font-size: 14px;
cursor: pointer;`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;`

const Input = styled.input`
border: none;
`;

const Centre = styled.div`
flex: 1;
text-align: center;`;

const Logo = styled.h1`
font-weight: bold;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 20px;
`
const Link = styled.a`
margin: 5px 10px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link onClick={() => {
                        navigate("/");
                    }}>HOME</Link>
                    <Link onClick={() => {
                        navigate("/products/mens");
                    }}>MEN'S</Link>
                    <Link onClick={() => {
                        navigate("/products/womens");
                    }}>WOMEN'S</Link>
                    <Link onClick={() => {
                        navigate("/products/other");
                    }}>STRAP'S</Link>
                    <Link onClick={() => {
                        navigate("/products/other");
                    }}>PLAN'S</Link>
                    <Link onClick={() => {
                        navigate("/nutrition");
                    }}>NUTRITION</Link>
                </Left>
                <Centre>
                    <Logo>THE PT LAB</Logo>
                </Centre>
                <Right>
                    {!user && (
                    <Link onClick={() => {
                        navigate("/login");
                    }}>LOGIN</Link>
                    )}
                    {user && (
                    <Link onClick={() => {
                        navigate("/account");
                    }}>MY ACCOUNT</Link>
                    )}
                    <Link onClick={() => {
                        navigate("/cart");
                    }}><Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge></Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
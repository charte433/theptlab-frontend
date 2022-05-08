import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderList from '../components/OrderList'
import { formatDate } from "../utility/formatDate";
import { getOrders } from "../redux/authRedux";
import { deleteOrder } from '../redux/authRedux';
import { openModel } from "../redux/modelRedux";


const Container = styled.div``
const Wrapper = styled.div`
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
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 250;
text-align: center;
padding: 20px;
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
width: 25%;
border: none;
padding: 30px 20px;
cursor: pointer;
display: flex;
align-items: center;
`

const Subtitle = styled.h1`
font-weight: 150;
text-align: center;
padding: 10px 0px;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding: 10px 0;
  min-width: 240px;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px 0;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 10px 0;
  text-align: right;
  align-items: center;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  justify-content: center;
  margin: auto;
  align-items: center;
  display: flex;
`;

const Head = styled.div`
  width: 100%;
  display: flex;
`;
const Text = styled.p`
  display: flex;
  flex: 1;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  flex: 1;
  cursor: pointer;
  padding: 10px 0;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const Cancel = styled.a`
margin: 5px 0px;
font-size: 18px;
text-decoration: underline;
cursor: pointer;
padding: 10px 20px;
display: flex;
align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;


const UserOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderID = location.pathname.split("/").at(-1);
  const orders = useSelector((state) => state.order.orders);
  const order = orders.find((order) => order._id === orderID);

  const handleModel = (type) => {
    console.log(type);
    dispatch(openModel(type));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>ORDER ID: {order._id}</Title>
      <Head>
        <Text>Order No.</Text>
        <Text>Date of Order</Text>
        <Text>Amount</Text>
        <Text>Status</Text>
      </Head>
      <Wrapper>
        <Row
          key={order._id}
        >
          <Text>#{order._id}</Text>
          <Text>{formatDate(order.createdAt)}</Text>
          <Text>£ {order.amount}</Text>
          <Text>{order.status}</Text>
        </Row>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default UserOrder
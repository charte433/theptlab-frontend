import React from 'react'
import { getOrders } from "../redux/authRedux";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { formatDate } from "../utility/formatDate";

const Container = styled.div`
  margin: auto;
  max-width: 800px;
  width: 90%;
`;

const MainContainer = styled.div`
  max-height: 500px;
  overflow: scroll;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 800px;
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
  cursor: pointer;
  padding: 10px 0;
  &:hover {
    background-color: #f8f8f8;
  }
`;
const Hr = styled.hr`
  background-color: #eee;
  margin: 10px 0;
  border: none;
  height: 2px;
`;
const Title = styled.h1`
font-weight: 250;
text-align: center;
padding: 10px 0px;
`

const OrderList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userID = useSelector((state) => state.user.currentUser._id);
  useEffect(() => getOrders(userID, dispatch), [dispatch, userID]);
  const order = useSelector((state) => state.order.orders);

  console.log(order);

  return (
    <Container>
      <Title>MY ORDERS</Title>
      <Head>
        <Text>Order No.</Text>
        <Text>Date</Text>
        <Text>Amount</Text>
        <Text>Status</Text>
      </Head>
      <Hr height={"2px"} />
      <MainContainer>
        <Wrapper>
          {order?.length === 0 && (
            <Text style={{ marginTop: "30px" }}>
              You do not have any orders
            </Text>
          )}
          {order?.map((order) => (
            <Row
              key={order._id}
              onClick={() => {
                navigate(`/order/${order._id}`);
              }}
            >
              <Text>#{order._id}</Text>
              <Text>{formatDate(order.createdAt)}</Text>
              <Text>£ {order.amount}</Text>
              <Text>{order.status}</Text>
            </Row>
          ))}
        </Wrapper>
      </MainContainer>
    </Container>
  );
};
export default OrderList
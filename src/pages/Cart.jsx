import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from "react";
import { userRequest } from '../requestMethod'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
    addProductQuantity,
    subtractProductQuantity,
    removeProduct,
} from "../redux/cartRedux";

//const KEY = process.env.STRIPE_PUBLISHABLE_KEY;
const KEY = "pk_test_51KjmIgJXQVt3j3p0OizOu3g87ECes1SdZbMsUwzpNB6LLkwe7aPxOvw9sLEcCPlIXMB20rgqPcCKLjC5yIKJzkiy00LbHSzXgL";


const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
`

const TopTexts = styled.div``
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`

const Info = styled.div`
flex: 3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const ProductName = styled.span``

const ProductID = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};

`
const ProductSize = styled.span``

const ProductPrice1 = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
cursor: pointer;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const SummaryTitle = styled.h1`
font-weight: 300;
`
const SummaryItem = styled.div`
margin: 20px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`
const Button1 = styled.button`
width: 100%;
padding: 10px 10px;
color: black;
font-weight: 600;
cursor: pointer;
`

const RemoveContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [remove, setRemove] = useState(false);

    //the remove product from cart functionality
    const handleRemove = (product) => {
        setRemove(true);
        const price = product.price;
        const quantity = product.quantity;
        dispatch(removeProduct({ product, price, quantity }));
    };

    //the increase or decrease product quantity functionality
    const handleQuantity = (type, product) => {
        const price = product.price;
        if (type === "Add" && product.quantity < 10) {
          dispatch(addProductQuantity({ product, price }));
        } else if (type === "Subtract" && product.quantity > 1) {
          dispatch(subtractProductQuantity({ product, price }));
        }
      };

      //use the stripetoken to ensure it is passed to Stripe for security
    const onToken = (token) => {
        setStripeToken(token);
    };
    //console.log(stripeToken)
    useEffect(() => {
        const makeRequest = async () => {
            try {
                //const res = await userRequest.post("/checkout/payment", {
                //tokenId: stripeToken.id,
                //amount: cart.total * 100,
                //});
                //navigate("/success", {
                //data: res.data
                //});
                const res = await userRequest.post("checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                const stripeData = res.data;
                const cartState = { stripeData, cart };
                navigate("/success", { state: cartState });
            } catch { }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, cart, navigate]);
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <Link to="/">
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Please check your order summary below:</TopText>
                    </TopTexts>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (<Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>Product Name: </b>{product.title}</ProductName>
                                    <ProductID><b>Product Id: </b>{product._id}</ProductID>
                                    <ProductColor color={product.color} />
                                    <ProductSize><b>Product Size: </b>{product.size}</ProductSize>
                                    <ProductPrice1><b>Product Price: £</b>{product.price}</ProductPrice1>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <ProductAmount>Quantity: {product.quantity}</ProductAmount>
                                    <Add onClick={() => handleQuantity("Add", product)}/>
                                    <Remove onClick={() => handleQuantity("Subtract", product)}/>
                                </ProductAmountContainer>
                                <ProductPrice>£{product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                            <RemoveContainer>
                                <Button1 onClick={() => handleRemove(product)}>DELETE ITEM</Button1>
                            </RemoveContainer>
                        </Product>))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>£{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Cost: </SummaryItemText>
                            <SummaryItemPrice>FREE</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total Cost: </SummaryItemText>
                            <SummaryItemPrice>£{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="THE PT LAB"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            //multiply by 100 because stripe works in pence/cents
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
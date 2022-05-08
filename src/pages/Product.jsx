import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router'
import {publicRequest} from '../requestMethod'
import {useDispatch} from 'react-redux'
import { addProduct } from "../redux/cartRedux";

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
height: 70vh;
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
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid black;
cursor: pointer;
background-color: white;
font-weight: 500;

&:hover {
    background-color: #e9f5f5;
}
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    //the function to get the product and display it based on it ID set
    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            }catch{}
        };
        getProduct()
    }, [id]);

    //to be able to increase or decrease the quantity of the product user wishes to buy
    const handleQuantity = (type) => {
        if(type === "decrease"){
            quantity > 1 && setQuantity(quantity-1);
        } else {
            setQuantity(quantity+1);
        }
    };

    const handleClick = ()=>{
        dispatch(
        //add selected product, size, quantity and color to the cart
        addProduct({...product, quantity, size, color})
        );
    };

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
            <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Description>Description: {product.description}</Description>
                <Price>Price: £{product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colour:</FilterTitle>
                        {product.color?.map((c) => (
                        <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map(s=>(
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("decrease")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("increase")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product
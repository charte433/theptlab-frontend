import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'

import { useLocation } from "react-router";

const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Our Products</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled>
                        Colour
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Grey</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>
                        Size
                    </Option>
                    <Option>X-Small</Option>
                    <Option>Small</Option>
                    <Option>Medium</Option>
                    <Option>Large</Option>
                    <Option>X-Large</Option>
                </Select>
                </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="low-to-high">Price (Low-to-high)</Option>
                    <Option value="high-to-low">Price (High-to-Low)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Footer/>
    </Container>
  )
}

export default ProductList
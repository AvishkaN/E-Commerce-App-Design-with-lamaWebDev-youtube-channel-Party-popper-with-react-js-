import React from 'react'
import {popularProductsList} from './../data'
import ProductItem from './productItem'
import styled from 'styled-components';

function Products() {
    return (
        <Container>
            {
                popularProductsList.map(productItem=>(
                    <ProductItem item={productItem}/>
                ))
            }
        </Container>
    )
};

const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;


export default Products;

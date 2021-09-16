import React from 'react'
import styled from 'styled-components'

import CategoriesItem from "./CategorieItem";
import {categoriesList} from '../data'



function Categories() {
    return (
        <Container>
            {categoriesList.map(category=>(
                    <CategoriesItem item={category} key={category.id}/>
            ))}
        </Container>
    )
}

const Container=styled.div`
    display: flex;
`;




export default Categories;

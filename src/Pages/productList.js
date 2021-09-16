import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Annoucument';
import Footer from '../Components/Footer';
import Navbr from '../Components/Navbr';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';

function productList() {
    return (
        <Container>
            <Navbr/>
            <Announcement/>
            <h1 className="title">Dresses</h1>
            <div className="filterContainer">
                    <div className="filter">
                        <h2 className="filterTitle">Filter Products:</h2>
                        <select name="" id="" className="select">
                            <option value="">Color</option>
                            <option value="">White</option>
                            <option value="">Red</option>
                            <option value="">Blue</option>
                            <option value="">Yellow</option>
                            <option value="">Green</option>
                        </select>
                        <select>
                            <option disabled selected>Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                    <div className="filter">
                        <h2 className="filterTitle">Sort Products:</h2>
                        <select name="" id="">
                            <option value="">Newest</option>
                            <option value="">Price (asc)</option>
                            <option value="">Price (desc)</option>
                        </select>
                    </div>
            </div>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
const Container=styled.div`
    .title{
        margin: 20px;
    }
    .filterContainer{
        display: flex;
        justify-content: space-between;
    }

    .filter{
        display: flex;
        align-items: center;
        margin-left: 20px;
        /* background: red; */
    }
    
    .filterTitle{
        font-size: 20px;   
        font-weight: 20px;
        margin-right: 20px;
}

select{
    padding: 10px;
    margin-right: 20px;
    /* margin-left: 20px; */
}
`;

export default productList;

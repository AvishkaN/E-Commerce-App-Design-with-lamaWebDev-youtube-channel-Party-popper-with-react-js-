import React from 'react'
import Navbr from '../Components/Navbr'
import Annoucument from '../Components/Annoucument';
import Slider from '../Components/slider';
import styled from 'styled-components'
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';


function Home() {
    return (
        <DIV>
           <Annoucument/>
           <Navbr/>
           <Slider/>
           <Categories/>
           <Products/>
           <Newsletter/>
           <Footer/>
        </DIV>
    )
}

const DIV=styled.div`

`;

export default Home

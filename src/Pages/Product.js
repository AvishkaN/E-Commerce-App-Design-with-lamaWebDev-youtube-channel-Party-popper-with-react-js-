import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Annoucument'
import Footer from '../Components/Footer'
import Navbr from '../Components/Navbr'
import Newsletter from '../Components/Newsletter'

function Product() {
    return (
        <>
        <Navbr/>
        <Announcement/> 
        <Container>
            <div className="wrapper">
                <div className="imgContainer">
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
                </div>
                <div className="infoCointainer">
                    <h1 className="title">Denim Jumpsuit</h1>
                    <p className="description">
                            Lorem ipsum dolor sit 
                            amet, consectetur adipiscing elit. Donec
                            venenatis, dolor in finibus malesuada, 
                            lectus ipsum porta nunc, at
                            iaculis arcu nisi sed mauris. Nulla fermentum 
                            vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo, 
                            consequat id
                            condimentum ac, volutpat ornare.
                    </p>
                    <h4 className="price">$ 20</h4>
                    <div className="filterContainer">
                        <div className="filter">
                            <h5 className="filterTitle">Color</h5>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </div>
                        <div className="filter">
                            <h5 className="filterTitle">Size</h5>
                            <select name="" id="">
                                    <option>XS</option>
                                    <option>S</option>
                                    <option >M</option>
                                    <option>L</option>
                                    <option >XL</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="addContainer">
                        <div className="amountContainer">
                            <Remove/>
                            <span className="amount">1</span>
                            <Add/>
                        </div>
                        <button className="addToButton">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </Container>
        </>
    )
}

const Container=styled.div`
        .wrapper{
            /* background-color: yellow; */
            padding: 50px;
            display: flex;
            
            .imgContainer{
                flex: 1;
                

                img{
                    width: 40vw;
                    height: 90vh;
                    object-fit: cover;
                }
            }
            .infoCointainer{
                display: flex;
                flex: 1;
                flex-direction: column;
                /* background-color: yellow; */
                padding: 0px 50px;

                .title{
                    font-weight: 200;
                }
                .description{
                    margin: 20px 0px;
                }
                .price{
                    font-weight: 100;
                    font-size: 40px;
                    margin-bottom: 30px;
                }
                .filterContainer{
                    /* background-color: green; */
                    width: 76%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .filter{
                        display: flex;

                        .filterTitle{
                            font-size: 20px;
                            font-weight: 200;
                            margin-right: 10px;

                        }
                    }
                }
                .addContainer{
                    /* background-color: red; */
                    width: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;

                    .amountContainer{
                        display: flex;
                        align-items: center;
                        font-weight: 700;

                        .amount{
                            width: 30px;
                            height: 30px;
                            border-radius: 10px;
                            border: 1px solid teal;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 0px 5px;
    
                        }
                    }
                    .addToButton{
                        padding: 15px;
                        border: 3px solid teal;
                        margin-top: 30px;
                        background-color: white;
                        cursor: pointer;
                        font-weight: 500;
                        width: 420px;
                        margin-left: 30px;

                    }
                }
            }
        }
`;
const FilterColor=styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${(props) => props.color};
        margin: 0px 5px;
        cursor: pointer;

`;

export default Product;

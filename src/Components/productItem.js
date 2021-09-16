import React from 'react'
import {FavoriteBorderOutlined,SearchOutlined,ShoppingCartOutlined,} from "@material-ui/icons";
import styled from 'styled-components';


function productItems({item}) {
    return (
        <Container>
            {/* <div className="circle"></div> */}
            <img src={item.img} alt="" />
            <Info className="Info">
                <div className="icon"><FavoriteBorderOutlined/></div>
                <div className="icon"><SearchOutlined/></div>
                <div className="icon"><ShoppingCartOutlined/></div>
            </Info>
        </Container>
    )
}

const Info=styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    /* transition: all 0.5s ease; */
`;



const Container=styled.div`
    flex: 1;
    margin: 5px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction:row; */
    position: relative;
    background-color: #f5fbfd;

    &:hover ${Info}{
        opacity: 1;
    }
    
    img{
        height: 75%;
        z-index: 2;
        /* width: 100%; */

    }

    .icon{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;

        &:hover{
            background-color: #e9f5f5;
            transform: scale(1.1);
        }
    }
`;

export default productItems

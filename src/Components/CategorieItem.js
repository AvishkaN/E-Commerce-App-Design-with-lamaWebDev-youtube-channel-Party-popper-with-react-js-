import React from 'react'
import styled from 'styled-components'

function CategorieItem({item}) {
    return (
        <Container>
            {console.log(item)}
            <img className="img" src={item.img} />
            <div className="info">
                <h1 className="title">{item.title}</h1>
                <button className="button">SHOP NOW</button>
            </div>
        </Container>
    )
}

const Container=styled.div`
    background-color: yellow;
    flex: 1;
    height: 70vh;
    margin: 4px;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .info{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* background: yellow; */
    }

    .title{
        color:white;
         margin-bottom: 20px;
    }

    .button{
        border:none;
        padding: 10px;
        background-color: white;
        color:gray;
        cursor: pointer;
        font-weight: 600;
    }

`;

export default CategorieItem;

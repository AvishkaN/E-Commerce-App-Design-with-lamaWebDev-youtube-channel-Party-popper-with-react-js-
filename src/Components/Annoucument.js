import React from 'react'
import styled from 'styled-components';


const Announcement = () => {
    return <Container>Super Deal ! Free Shipping on Orders Over $50 🎉🎉🎉</Container>;
};
  

  const Container=styled.div`
    background-color: teal;
    color: white;
    height: 30px;
    display: flex;

    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
  `;

  export default Announcement;

import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

function Newsletter() {
    return (
        <Container>
            <h1 className="title">Newsletter</h1>
            <p className="description">
            Get timely updates from your favorite products.
            </p>
           
            <div className="inputContainer">
                <input type="text" placeholder="Your email"/>
                <button>
                    <Send/>
                </button>
            </div>
        </Container>
    )
}

const Container=styled.div`
    height: 60vh;
    background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 70px;
    margin-bottom: 20px;
  }

  p{
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .inputContainer{
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
  }

  input{
      width: 90%;
      border:none;
      padding-left: 20px;
  }

  button{
      border:none;
      background-color: teal;
      color: white;
      width: 10%;
  }

`;

export default Newsletter;

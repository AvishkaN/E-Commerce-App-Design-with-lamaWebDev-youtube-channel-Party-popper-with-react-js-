import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Annoucument'
import Footer from '../Components/Footer'
import Navbr from '../Components/Navbr'
import Newsletter from '../Components/Newsletter'



function Register() {
    return (
        <Container>
            <div className="wrapper">
                <h1 className="title">CREATE AN ACCOUNT</h1>
                <form action="">
                    <div className="inputContainer">
                        <input type="text" placeholder="username" />
                        <input type="text" placeholder="password" />
                    </div>
                    <div className="agrement">
                        <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
                        <a>CREATE A NEW ACCOUNT</a>
                    </div>
                    <button>LOGIN</button>
                </form>
            </div>
        </Container>
    )
};

const Container=styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
            ),url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
        background-size:cover;
        display: flex;
        align-items: center;
        justify-content: center;
        
            .wrapper{
                width: 30vw;
                height: 45vh;
                padding: 50px 50px 50px 50px;
                background-color: white;
            
            .title{
                font-size: 24px;
                font-weight: 300;
            }    

            form{
                    display: flex;
                    flex-direction: column;
                    /* align-items: center; */
                    /* justify-content: center; */
                    position: relative;
                    .inputContainer{
                        display: flex;
                        flex-direction: column;
                        /* background-color: yellow; */
                        /* flex-wrap: wrap; */
                        input{
                            /* background-color: yellow; */
                            width: 90%;
                            /* background-color: blue; */
                            margin: 20px 10px 0px 0px;
                            padding: 10px;

                        }
            
                }
                .agrement{
                    margin: 20px 10px 0px -10px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    a{
                        text-decoration:underline;
                        margin-bottom: 10px;
                    }
                }

                button{
                    width: 40%;
                    border: none;
                    padding: 15px 20px;
                    background-color: teal;
                    color: white;
                    cursor: pointer;
                    position: absolute;
                    bottom: -20%;
                    left: -1%;
                }
            }
    }

`;

export default Register;

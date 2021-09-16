import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <div className="left">
                    <h1 className="logo">LAMA.</h1>
                    <p className="description">
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.
                     </p>
                    <div className="socailContainer">
                        <SocialIcon color="3B5999"><Facebook/></SocialIcon>
                        <SocialIcon  color="E4405F"><Instagram/></SocialIcon>
                        <SocialIcon  color="55ACEE"><Twitter/></SocialIcon>
                        <SocialIcon  color="E60023"><Pinterest/></SocialIcon>
                    </div>
            </div>

            <div className="center">
                <h3 className="title">Useful Links</h3>
                <ul className="list">
                        <li className="listItem">Cart</li>
                        <li className="listItem">Home</li>
                        <li className="listItem">Man Fashion</li>
                        <li className="listItem">Woman Fashion</li>
                        <li className="listItem">Accessories</li>
                        <li className="listItem">My Account</li>
                        <li className="listItem">Order Tracking</li>
                        <li className="listItem">Wishlist</li>
                        <li className="listItem">Wishlist</li>
                        <li className="listItem">Terms</li>
                </ul>
            </div>

            <div className="right">
                <h3 className="title">Contact</h3>
                <div className="contactItemList">
                    <div className="contactItem">
                        <Room /> 622 Dixie Path , South Tobinchester 98336                            
                    </div>
                    <div className="contactItem">
                        <Phone/> +1 234 56 78
                    </div>
                    <div className="contactItem">
                        <MailOutline/> contact@lama.dev
                    </div>
                </div>
                    <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </div>

                </Container>
    )
};

const Container=styled.div`
    display: flex;
    /* flex-direction: column; */

    .left{
        flex: 1;
        /* background: green; */
        margin: 20px;

        p{
            margin: 20px 0px;
        }

        .socailContainer{
            display: flex;
        }
        
        /* SocialIcon:this palece */
    }
    .center{
        flex: 1;
        /* background: yellow; */
        margin: 20px;

        .title{
            margin-bottom: 30px;
        }

        .list{
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            list-style: none;
        }
        
        .listItem{
            width: 50%;
            margin-bottom: 10px;
        }
    }
    .right{
        /* background: yellow; */
        margin: 20px;
        flex: 1;

        .title{
            margin-bottom: 30px;
        }
        
        .contactItem{
            margin-bottom: 5px;
        }

        .payment{
            margin-top: 20px;
        }
    }
`;

const SocialIcon=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    margin: 10px;
    background-color: #${(props) => props.color};
    border-radius: 50%;
    cursor: pointer;
    color: white;
`;


export default Footer;

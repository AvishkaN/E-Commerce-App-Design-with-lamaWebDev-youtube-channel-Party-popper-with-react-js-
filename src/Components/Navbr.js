import React from 'react'
import styled from 'styled-components'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';
import { mobile } from '../resopnsive';


function Navbr() {
    return (
        <CONTAINER>
            <div className="wrapper">

                <div className="left">
                    <span className="lng-Button">EN</span>
                     <div className="search-container">
                        <input type="text" placeholder="search" />    
                        <SearchIcon/>
                     </div>
                </div>

                <div className="center">
                    <div className="logo">STORE</div>
                </div>

                <div className="right">
                    <div className="menuItem">REGISTER</div>
                    <div className="menuItem">SIGN IN</div>
                    <div className="menuItem">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </div>
                </div>
            </div>
        </CONTAINER>
    )
}       

const CONTAINER=styled.div`
    height: 60px;
    ${mobile({
        height:"50px",
        // backgroundColor:"red",
        width:"100vw",
        })}

    .wrapper{
        padding: 10px 20px;
        display: flex;
        justify-content: space-between; 
        ${mobile({ padding: "10px 0px" })}

    };

    .left{
        flex: 1;
        display: flex;
        align-items: center;

        .lng-Button{
            cursor: pointer;
            ${mobile({ display:"none" })}

        }

        .search-container{
            display: flex;
            align-items: center;
            border: 0.5px solid lightgray;
            margin-left: 20px;
            /* ${mobile({ width: "30%" })} */


            input{
                border: none;
                ${mobile({ width: "50px" })}

            }
        }
    }
    .center{
        flex: 1;
        display: flex;
        align-items: center;
        
        .logo{
            font-weight: bold;
            font-size: 30px;
            ${mobile({ fontSize: "24px" })}

        }


    }
    .right{
        flex: 1;
        display: flex;
        justify-content:flex-end;
        align-items: center;

        .menuItem{
            padding-left: 15px;
            cursor: pointer;
        }

    }

`;

export default Navbr;

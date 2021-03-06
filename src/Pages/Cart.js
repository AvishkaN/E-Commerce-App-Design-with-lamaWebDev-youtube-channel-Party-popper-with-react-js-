import { Add, Remove } from '@material-ui/icons'
import Announcement from '../Components/Annoucument'
import Footer from '../Components/Footer'
import Navbr from '../Components/Navbr'
import Newsletter from '../Components/Newsletter'

import styled from 'styled-components'


function Cart() {
    return (
        <Container>
        <Announcement/> 
         <Navbr/>
        {/* <Newsletter/> */}
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Topbutton>CONTINUE SHOPPING</Topbutton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <Topbutton type="filled">CHECKOUT NOW</Topbutton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 93813718293
                                </ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                        </ProductDetails>
                        <PriceDetail>
                                <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Hr></Hr>
                    <Product>
                        <ProductDetails>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 93813718293
                                </ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                        </ProductDetails>
                        <PriceDetail>
                                <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summery>
                    <SummeryContainer>

                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        
                        <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        
                        <Button>CHECKOUT NOW</Button>
                    </SummeryContainer>
                </Summery>
            </Bottom>
        </Wrapper>
        {/* <Footer/> */}
        </Container>
    )
}

const Container=styled.div`

`;
const Wrapper=styled.div`
      /* background-color: yellow; */
      padding: 20px;
      `;

const Title=styled.h1`
    /* background-color: blue; */
    font-weight: 300;
  text-align: center;
  /* color: white; */


`;
const Top=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Topbutton=styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

`;
const TopTexts=styled.div`

`;
const TopText=styled.span`
      text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;

`;
const Bottom=styled.div`
display: flex;
/* background-color: red; */

`;

const Info=styled.div`
flex: 2.5;
/* background-color: green; */

`;

const Product=styled.div`
    display: flex;
    justify-content: space-between;

`;
const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;


const ProductDetails=styled.div`
display: flex;
flex: 2;

`;
const Image=styled.img`
      width: 200px;

`;
const Details=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
`;
const ProductName=styled.div`

`;
const ProductId=styled.div`

`;

const ProductColor=styled.div`
      width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};

`;
const ProductSize=styled.div`

`;
const PriceDetail=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
  margin-bottom: 20px;

`;
const ProductAmount=styled.div`
      font-size: 24px;
    margin: 5px;

`;
const ProductPrice=styled.div`
      font-size: 30px;
  font-weight: 200;

`;


const Summery=styled.div`
    margin-left: 50px;
    margin-top: 50px;
    flex: 1;
    /* background-color: orange; */
    border: 0.5px solid lightgray;
    border-radius: 10px;

    height: 55vh;
    
    
    `;
    const SummeryContainer=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    
    `;
    const SummaryTitle=styled.h1`
        font-weight: 200;
        margin-bottom: 20px;
    `;
    const SummaryItem=styled.div`
            display: flex;
            margin: 10px 0px;
            display: flex;
            justify-content: space-between;
            font-weight: ${(props) => props.type === "total" && "500"};
            font-size: ${(props) => props.type === "total" && "24px"};

    `;
    const SummaryItemText=styled.div`
    
    `;
    const SummaryItemPrice=styled.div`
    
    `;
    const Button=styled.div`
            width: 100%;
            padding: 10px;
            background-color: black;
            color: white;
            font-weight: 600;
            /* padding: 10px;
            padding-left: 20px; */
            margin-top: 20px;
            width: 90%;

            display: flex;
            justify-content: center;
            align-items:center;
            cursor: pointer;

    `;
    // const ProductSize=styled.div`
    
    // `;
    // const ProductSize=styled.div`
    
    // `;




// `;
// const TopTexts=styled.div`

// `;




export default Cart;

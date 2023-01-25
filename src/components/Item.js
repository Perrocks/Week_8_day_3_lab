import React from "react";
import styled from "styled-components";

const ProductCard = styled.div`
background-color: aliceblue;
display: grid;
justify-content: center;
border-bottom: 2px solid;

`
const Blockquote = styled.blockquote`
margin: 10px;
padding: 10px;
background-color: lightblue;
border-radius: 15px;
width: 50%;
height: auto;
text-align: center;
`

const ProductTitle = styled.h2`
`

const Item = ({product}) =>{
    return(
        <ProductCard>
        <ProductTitle>
            <Blockquote>{product.name}</Blockquote>
        </ProductTitle>
            <Blockquote>Type: {product.type}</Blockquote>
            <Blockquote>Price: £{product.price}</Blockquote>
        </ProductCard>
    )
}

export default Item
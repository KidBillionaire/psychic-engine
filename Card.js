import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
   // width: 50px;
   height: 70px;
   border-radius: 5px;
    display: flex;
    flex-direction:row;
   margin:auto;
   gap: 1rem;
   justify-content: center;
   align-items: center;
   justify-items: center;
   align-content: center;
   box-shadow: 0 4px 8px rgba(0, 0, 0,.2);
    position: absolute;
   //  left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`;
const CardImage = styled.img`
 width: 100%;
 height: 100%;

`;

const Card = ({image, style }) => {
   return (
    <CardWrapper style={style}>
    <CardImage src={image} alt="card" />
    </CardWrapper>
   )
}

export default Card;


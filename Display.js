import React from "react";
import styled from "styled-components";


const DisplayWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px;


`;


const Display = ({name}) => {
    <DisplayWrapper>{name}</DisplayWrapper>
}

export default Display;
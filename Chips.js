import React from "react";
import styled from "styled-components";

const ChipsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;


const Chips = ({name}) => {
    <ChipsWrapper>
        {name}
    </ChipsWrapper>
}

export default Chips;
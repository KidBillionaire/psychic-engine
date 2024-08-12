import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: #444;
color: #fff;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
bacground-color: #666;
}
`;

const Button = ({ children, onClick }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button;

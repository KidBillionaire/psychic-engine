import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 100vh;
  position: relative;
  font-family: 'Roboto', sans-serif;
`;


const TableContainer = styled.div`
  width: 100%;
  max-width: 31vw;
`;


const TableInner = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const CardsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  gap: 20px;
  z-index: 2;
`;

const CasinoTotal = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CasinoText = styled.div`
  font-size: 12px;
  background-color: #36585a;
  border-radius: 50px;
  padding: 1px 4px;
  text-align: center;
`;

const CasinoNameImage = styled.img`
  margin-top: 10px;
  width: 110px;
  height: auto;
`;

const CasinoSpan = styled.span`
  font-weight: bold;
`;

const Table = ({ children, cards }) => {
  return (
    <TableWrapper>
      <TableContainer>
        <TableInner src='assets/table.png' alt='table' />
        <CardsWrapper>
          <CasinoTotal>
            <CasinoText>Total Pots: <CasinoSpan>81.17</CasinoSpan></CasinoText>
            <CasinoText>Main Pot: <CasinoSpan>20</CasinoSpan></CasinoText>
          </CasinoTotal>
          {cards}
          <CasinoNameImage src='assets/decentrasino.svg' alt='Casino Name' />
        </CardsWrapper>
      </TableContainer>
      {children}
    </TableWrapper>
  );
};

export default Table;

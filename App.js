// src/App.js
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Player from './components/Player';
import Card from './components/Card';
import styled from 'styled-components';

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;

`;
const Mute = styled.img`
  position: absolute;
  top: 7rem;
  left: 20rem;
  width: 2.3rem;
  height: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out; 

  &:active {
    transform: scale(0.95); 
    bacgroound-color: grey;
    border-radius: 50%;
  }
  `;
  const SessionSection = styled.div`
  background-color: #707070;
  width: 73%;
  margin:auto;
  padding: 1.1rem;
  display: flex;
  justify-content: space-around;
  margin-top: -5.3rem;

`;
  const ActionButtonP = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 0 1.2rem;
  height:1.4rem;
  width: 15%;
  margin-top: 2rem;
  border-radius: 12px;
  cursor: pointer;
   font-size: 12px;
  font-weight: 400;
  margin-left: -7rem;
  margin-bottom: -2rem;
 

  &:hover {
    background-color: #555;
  }
`;
const ActionButton = styled.button`
  font-size: 10px;
  font-weight: 700;
  background-color: #333;
  width: 50%;
  height: 83%;
  color: white;
  border: none;
  padding: 0.5rem 0.8rem;
  margin: 0.8rem 0.5rem -0.2rem 0.5rem;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  cursor: pointer;
  text-align: start;
  gap: 0.2rem;
  display: flex;

&:hover {
  background-color: #555;
}
`;
const ActionDiv = styled.div`
  display: flex
  `;
  const RadioButton = styled.input`
  appearance: none;
   width: 12px;
   height: 12px;
  background-color: #666666;
  border: 2px solid #666666;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

    &:checked {
    background-color: black;
  }

   &:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #666666 
     position: absolute;
      top: 50%;
      left: 50%;
    // transform: translate(-50%, -50%);
    opacity: 0;
  }

   &:checked:after {
    opacity: 1;
  }
  `
;
const ActionSpan = styled.div`
  margin: auto;
  
  `;
  
  const Navbar = styled.div`
  background-color: #101010;
  width: 100%;
  // height: 60px;
  display: flex;
  align-items: center;
  // padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;
const LogoName = styled.div`
  // flex: 1;
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #000;
  width: 12%;
  height: 68px;
`;

const ButtonContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  // gap: -10px;
   background-color: #151515;
`;
const Balance = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  // gap: -20px;
  color: white;
  font-size: 16px;
`;
const BalanceText = styled.div`
  font-size: 12px;
  align-items: center;
  margin: auto 20px;

`;
const Overlay = styled.img`
  `
  const OverlayBox = styled.img`
    `;

const NavbarButton = styled.img`
  cursor: pointer;

  &:hover {
    background-color: #555;
  }

`;
const SideTextContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const SideText = styled.span`
  font-size: 8px;
  font-weight: 400px;
  font-family: roboto;
  color: white;
  margin-right: 10px;
  margin-top: 25px;
  margin-bottom: -55px;
  // width: 40%;
`;
const SideDiv = styled.div`
  display: flex;
  gap: 2px;
  // margin-bottom: -0px;
  `;
const Emoji = styled.div`
  // margin-top: 2px;
   margin-left: 2px;`;

  const OtherSideTextContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const OtherSideText = styled.div`
  font-size: 8px;
  color: white;
  margin-left: 20px;
  margin-top:36px;
  display: flex;
  gap: 5px;
`;
const OtherImg = styled.img`
  margin-top: -10px;
  `;
  const OtherE = styled.div`
    color: #585858;
    font-size: 14px;
    `;
// const MiniDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 10px;
//   `;
const SideMute = styled.div`
  margin-top: 4px;
  `;


// const VerticalBorder = styled.div`
//    display: flex;
//    justify-content: end;
//    margin-right: -10px;
//    margin-bottom: 4px; 
   
// `;
// const VerticalImage = styled.img``;



// const getLabelColor = (index) => {
//   const colors = ['#FF922A','#00C9B7', '#FF8897', '#2B6968','#FF535B','#BD4330',  '#845EC2', '#F8BE0D','#0089CA'];
//   return colors[index % colors.length];
// };

// const getScoreColor = (index) => {
//   const colors = ['lightred', 'lightgreen', 'lightblue', 'lightorange'];
//   return colors[index % colors.length];
// };

const players = [
  { id: 1, name: 'Player 1', avatar: 'assets/avatar2.png', balanceImage: ['assets/play-card.svg','assets/play-card.svg'], score: '334.83', label: '9', labelColor: '#0089CA',eyeImage: 'assets/eye.svg'},
  { id: 2, name: 'Player 2', avatar: 'assets/avatar8.png', score: '400',label: '1', labelColor:'#F8BE0D'},
  { id: 3, name: 'Player 3', avatar: 'assets/avatar1.png',  score: '400', label: '2', labelColor: '#00C9B7',meter: 'assets/new-player.svg', nocamera: 'assets/no-camera.png', mute: 'assets/mute.png'},
  { id: 3, name: 'Player 3', avatar: 'assets/avatar7.png', balanceImage: ['assets/play-card.svg','assets/play-card.svg'], score: '600', label: '3', labelColor: '#845EC2'},
  { id: 5, name: 'Player 5', avatar: 'assets/avatar5.png', score: '46554.57',label: '4', labelColor: '#FF535B',meter: 'assets/fold.svg'},
  { id: 6, name: 'Player 6', avatar: 'assets/avatar4.png', balanceImage: ['assets/play-card.svg','assets/play-card.svg'], score: '376.98' ,label: '5', labelColor: '#2B6968', backgroundImage: 'assets/score-background.svg', meter: 'assets/measuring-meter.svg'},
  { id: 7, name: 'Player 7', avatar: 'assets/avatar3.png', score: '120' , label: '6', labelColor: '#BD4330', color: '#EEEEEE'},
  { id: 8, name: 'Player 8', avatar: 'assets/avatar9.png', balanceImage: ['assets/play-card.svg','assets/play-card.svg'], score: '0' ,label: '7', labelColor: '#FF922A', det:'assets/d.svg' },
  { id: 9, name: 'Player 9', avatar: 'assets/avatar6.png', balanceImage: ['assets/play-card.svg','assets/play-card.svg'], score: '4', label: '8', labelColor: '#FF8897' },
];

const cards = [
  { image: 'assets/8s.svg', style: { left: '24%', top: '50%' } },
  { image: 'assets/QD.svg', style: { left: '37%', top: '50%' } },
  { image: 'assets/KH.svg', style: { left: '50%', top: '50%' } },
  { image: 'assets/empty-card.svg', style: { left: '63%', top: '50%' } },
  { image: 'assets/empty-card.svg', style: { left: '76%', top: '50%' } },
];

function App() {

  const [tableCenter, setTableCenter] = useState({ x: 0, y: 0});
  const [tableDimensions, setTableDimensions] = useState({ width: 0, height: 0 });
  const [tableCenterP, setTableCenterP] = useState({ x: 0, y: 0 });
  const [tableDimensionsP, setTableDimensionsP] = useState({ width: 0, height: 0 });

  

  const calculateTableValues = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const centerX = windowWidth * 0.5;
    const centerY = windowHeight * 0.5;
    const tableWidth = windowWidth * 0.5;
    const tableHeight = windowHeight * 0.5;

    const centerXP = windowWidth * 0.5;
    const centerYP = windowHeight * 0.49;
    const tableWidthP = windowWidth * 0.351;
    const tableHeightP = windowHeight * 0.28;

    setTableCenter({ x: centerX, y: centerY });
    setTableDimensions({ width: tableWidth, height: tableHeight });
    setTableCenterP({x: centerXP, y: centerYP});
    setTableDimensionsP({ width: tableWidthP, height: tableHeightP });
    
  };

  useEffect(() => {
    const handleResize = () => {
      calculateTableValues();
    };
  
    calculateTableValues();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <>
      <Navbar>
        <LogoName>
          <img src='assets/logo.svg' alt='logo' style={{ marginRight: '10px' }} />
          Lobby
        </LogoName>
        <ButtonContainer>
          <NavbarButton src='assets/ring.svg' alt='button' />
          <NavbarButton src='assets/nav-button.svg' alt='alt' />
          <NavbarButton src='assets/nav-button.svg' alt='button' />
          <NavbarButton src='assets/nav-button.svg' alt='button' />
        </ButtonContainer>
        <Balance>
          <BalanceText> Balance: $0.03 <span>
            <img src='assets/balancer.svg' alt='balancer' />
            </span></BalanceText>
          <OverlayBox src='assets/overlay-white.svg' alt='overlay-white' />
          <Overlay src='assets/overlay.svg' alt='overlay' />
        </Balance>
     </Navbar>

    <AppWrapper>
    <Mute src='assets/mute.png' alt='mute'/>
      {players.map((player, index) => (
        <Player
          key={player.id}
          avatar={player.avatar}
           playCard={player.playCard}
          index={index}
          totalPlayers={players.length}
          tableCenter={tableCenter}
          tableDimensions={tableDimensions}
          tableDimensionsP={tableDimensionsP}
          tableCenterP={tableCenterP}
          score={player.score}
          balanceImage={player.balanceImage}
          color={player.color}
          label={player.label}
          labelColor={player.labelColor}
           backgroundImage={player.backgroundImage}
           meter={player.meter}
           nocamera={player.nocamera}
           mute={player.mute}
           det={player.det}
           eyeImage={player.eyeImage}
        />
      ))}
     
      <Table
        cards={cards.map((card, index) => (
          <Card key={index} image={card.image} style={card.style} />
        ))}
      >
      </Table>
    </AppWrapper>
      <SideTextContainer>
        <SideText></SideText>
        {/* <SideText> */}
          {/* <VerticalBorder>
            <VerticalImage src='assets/verticalborder-white.svg' />
            <VerticalImage src='assets/verticalborder.svg' />
          </VerticalBorder> */}
          {/* <MiniDiv><div>Show Minigames</div> <img src='assets/mini.svg' alt='' /></MiniDiv>
          You are connected to our server, enjoy your game<div>You have succesfully added 120 in chips</div>
        </SideText> */}
        <SideText>
         <SideDiv>
         <div>
          <img src= 'assets/toggle.svg' alt='toggle' />
        </div>
        <SideMute>Mute Side Notifications</SideMute>
        <Emoji>
          <img src= 'assets/emoji.svg' alt='toggle' />
        </Emoji>
         </SideDiv>
        </SideText>
      </SideTextContainer>
      <OtherSideTextContainer>
        <OtherSideText>
          <OtherE>E</OtherE>
          <div><OtherImg src='assets/limit.svg' alt='' />
          </div>
          <div>2/4 No limit Hold em</div></OtherSideText>
      </OtherSideTextContainer>
      <SessionSection>
          <ActionButtonP>Buy Chips</ActionButtonP>
          <ActionDiv>
          <ActionButton>
            <RadioButton type="radio" name="action" value="big-blind" checked={true}  />
            <ActionSpan> Wait for big blind</ActionSpan>
           
          </ActionButton>
          <ActionButton>
            <RadioButton type="radio" name="action" value="post-4" />
            <ActionSpan>Post 4 to wait for next available hand</ActionSpan>
          </ActionButton>
        </ActionDiv>
      </SessionSection>
    </>

  );
}

export default App;


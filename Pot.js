import React from 'react';
import styled from 'styled-components';

const PotWrapper = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 11;
  transform: translate(-50%, -50%);
  background-image: ${({ backgroundImage }) => backgroundImage ? `url(${backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  max-width:100%;

`;



const BalanceImage = styled.img`
  margin: -2.04rem;
  width: 2.41rem;
  height: 2.41rem;
`;

const BalanceImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 0;
  height: 1rem;
   margin-top: -0.5rem;
  z-index: 15;
`;


const ScoreBar = styled.div`
  width: 5rem;
  height: 1.5rem;
  background-color: ${({ color }) => color || '#C0D6D9'};
  color: black;
  font-weight: bold;
  border-radius: 50px;
  position: absolute;
  top: 0.29rem;
  display: flex; 
  justify-content: center;
  font-size: 12px;
  align-items:center;
  padding-left: 1.1rem;
  position: relative;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Stand = styled.div`
  width: 1.2rem;
  height:1.2rem;
  background-color: ${({ color }) => color || 'red'};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 1%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
`;
const Meter = styled.img`
  width: 10rem;
  height: 2.28rem;
  position: absolute;
  bottom: 0.1rem;
`;
const Camera = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6rem;
`;
const Nocamera = styled.img`
  width: 1.6rem;
  height: 1.5rem;
  cursor: pointer;
   transition: transform 0.2s ease-in-out;

  &:active {
    transform: scale(0.95); 
     bacgroound-color: grey;
    border-radius: 50%;
  }
  `;
const Mute = styled.img`
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
  const Det = styled.img`
  width: 17%;
  height: 17%;
  position: absolute;
  left: -1.3rem;
  top: 63%;
  transform: translateY(-50%);
  z-index: 12;
`;
const Eye = styled.div`
  display: flex;
  gap: 0.05rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5.6rem;
  top: 1.6rem;
`;
const EyeImage = styled.img`
  width: 100%;
  height: 100%;
  `;
const EyeText = styled.div`
  background-color: black;
  color: white;
  font-size: 10px;
  width: max-content;
  height: max-content;
  `;


const Pot = ({ balanceImage = [], score, position, color, label, labelColor, backgroundImage, meter, mute, nocamera, det, eyeImage }) => {
    // const hasMeter = meterColor ? true : false;
    
  return (
    <PotWrapper style={{ left: `${position.x}px`, top: `${position.y}px` }} backgroundImage={backgroundImage}>
        <BalanceImagesWrapper>
            {balanceImage.map((image, index) => (
                <BalanceImage key={index} src={image} alt='Player image' />
            ))}
        </BalanceImagesWrapper>
      <ScoreBar color={color}>
        <Stand color={labelColor}> {label}</Stand>
       {score}</ScoreBar>
        {meter && <Meter src={meter} alt="Meter" />}
        <Camera>
            {mute && <Mute src={mute} alt='mute' />}
            {nocamera && <Nocamera src={nocamera} alt='no camera' />}
        </Camera>
        {det && <Det src={det} alt='det' />}
       {eyeImage &&  <Eye>
            <EyeImage src={eyeImage} alt='eye image' />
            <EyeText>13.17</EyeText>
        </Eye>}
    </PotWrapper>
  );
};

export default Pot;
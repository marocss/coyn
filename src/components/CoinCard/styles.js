import styled from 'styled-components/native';

const green = '#0FF4C6';
// const red = '#FB5012';
// const red = '#F06543';
// const red = '#B80C09';
const red = '#DF2935';
const fontColor = '#FDFFFC';

export const Container = styled.SafeAreaView`
  justify-content: flex-start;
  margin-top: 50px;
`;

export const Content = styled.View`
  align-items: center;
  border-color: ${props => (props.coinStatus ? green : red)};
  border-width: 3px;
  border-radius: 10px;
  width: 205px;
  height: 125px;
  justify-content: center;
`;

export const CoinName = styled.Text`
  align-items: center;
  color: ${fontColor};
  font-size: 30px;
  padding-bottom: 10px;
  font-family: VT323;
  margin-top: -5px;
`;

export const CoinValue = styled.Text`
  align-items: center;
  color: ${fontColor};
  font-size: 30px;
  padding-bottom: 10px;
  font-family: VT323;
  margin-top: -5px;
`;

export const VariationText = styled.Text`
  align-items: center;
  color: ${props => (props.coinStatus ? green : red)};
  font-family: VT323;
  font-size: 23px;
`;

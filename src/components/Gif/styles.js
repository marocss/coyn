import styled from 'styled-components/native';

export const Container = styled.View`
  width: 98%;
  height: 50%;
  margin-top: 30px;
`;

export const Giphy = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

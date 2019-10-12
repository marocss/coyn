import React from 'react';

import { Container, Giphy } from './styles';

export default function Gif({ gotAllData, coinStatus, gifURL }) {
  return (
    <Container>
      {gotAllData ? <Giphy source={{ uri: gifURL }} /> : null}
    </Container>
  );
}

import React from 'react';

import {
  Container,
  Content,
  CoinName,
  CoinValue,
  VariationText,
} from './styles';

const coins = {
  BTC: 'Bitcoin',
};

export default function CoinCard({
  coinValue,
  coinStatus,
  gotAllData,
  ticker,
  variation,
}) {
  return (
    <Container>
      {gotAllData ? (
        <Content coinStatus={coinStatus}>
          <CoinName>{coins[ticker]}</CoinName>
          <CoinValue>R$ {coinValue}</CoinValue>
          <VariationText coinStatus={coinStatus}>{variation}%</VariationText>
        </Content>
      ) : null}
    </Container>
  );
}

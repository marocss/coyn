# Crypto Watcher

Um aplicativo que verifica o valor atual de uma cripto-moeda e sua variação e renderiza um gif feliz se a variação foi positiva e triste caso negativa.

---

## Tecnologias

- React Native

---

## Exemplo

![](crypto-watcher-example.gif)

---

## Run

1. `git clone https://github.com/marocss/CryptoWatcher.git`
2. `cd CryptoWatcher`
3. `yarn`
4. Adicione um arquivo chamado `apiKey.js` na pasta `services` com sua API do GIPHY (https://developers.giphy.com/). Exemplo:
   ```
   const GIF_API_KEY = '<YOUR_API_KEY>'
   export default GIF_API_KEY
   ```
5. `yarn start`
6. Com Expo instalado em seu celular escaneie o código QR.

---

## TODO

- [ ] double tap to reload data
- [ ] add more coins
  - [ ] new page to select a coin
- [ ] press and hold to save GIF

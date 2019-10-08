import axios from 'axios'

const coinAPI = axios.create({
  baseURL: 'https://www.mercadobitcoin.net/api/'
})

export default coinAPI
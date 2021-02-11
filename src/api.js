import axios from "axios";

const coinApi = {
  tickers: async () => await axios.get(process.env.REACT_APP_TICKERS),
  exchanges: async () => await axios.get(process.env.REACT_APP_EXCHANGES),
  coins: async () => await axios.get(process.env.REACT_APP_COINS),
  detail: async (id) => await axios.get(`${process.env.REACT_APP_COINS}/${id}`),
  coinsExchanges: async (id) => await axios.get(`${process.env.REACT_APP_COINS}/${id}/exchanges`),
  markets: async (id) => await axios.get(`${process.env.REACT_APP_COINS}/${id}/markets`),
};

export default coinApi;

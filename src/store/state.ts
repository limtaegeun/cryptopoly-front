// https://vuex.vuejs.org/en/state.html

export default {
  drawer: null,
  isMobile: false,
  user: null,
  pairs: [
    {id: 1, name : 'Bitcoin', baseCode: 'BTC', quoteCode : 'USD',  pair: 'USDT_BTC'},
    {id: 2, name : 'Ethereum', baseCode: 'ETH', quoteCode : 'USD',  pair: 'USDT_ETH'},
    {id: 3, name : 'Ripple', baseCode: 'XRP', quoteCode : 'USD',  pair: 'USDT_XRP'},
  ]
};

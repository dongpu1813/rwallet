import BigNumber from 'bignumber.js';
import { Toast } from '@ant-design/react-native';

const common = {
  currentNavigation: null,
  isIphoneX() {
    // TODO
    // return DeviceInfo.getModel().toLowerCase().indexOf('iphone x') >= 0
    return false;
  },
  btcToSatoshiHex(amount) {
    const result = new BigNumber(amount).times('1e8').toString(16);
    return result;
  },
  satoshiHexToBtc(satoshiHex) {
    const result = new BigNumber(satoshiHex).div('1e8');
    return result;
  },
  rbtcToWeiHex(amount) {
    const result = new BigNumber(amount).times('1e18').toString(16);
    return result;
  },
  weiHexToRbtc(weiHex) {
    const result = new BigNumber(weiHex).div('1e18');
    return result;
  },
  rifToWeiHex(amount) {
    const result = new BigNumber(amount).times('1e18').toString(16);
    return result;
  },
  weiHexToRif(weiHex) {
    const result = new BigNumber(weiHex).div('1e18');
    return result;
  },
  Toast(text, type, onClose, duration, mask) {
    const last = duration > 0 ? duration : 1.5;
    if (type === 'success') {
      Toast.success(text, last, onClose, mask);
    } else if (type === 'fail') {
      Toast.fail(text, last, onClose, mask);
    } else { // none
      Toast.info(text, last, onClose, mask);
    }
  },
  convertHexToCoinAmount(symbol, hexNumber) {
    let amount = null;
    switch (symbol) {
      case 'BTC':
        amount = common.satoshiHexToBtc(hexNumber);
        break;
      case 'RBTC':
        amount = common.weiHexToRbtc(hexNumber);
        break;
      case 'RIF':
        amount = common.weiHexToRif(hexNumber);
        break;
      default:
    }
    return amount;
  },
  getCoinPrice(symbol, currency, prices) {
    for (let i = 0; i < prices.length; i += 1) {
      const priceRow = prices[i];
      if (symbol === priceRow.symbol) {
        const price = priceRow.price[currency];
        return price;
      }
    }
    return null;
  },
  getCoinValue(amount, symbol, currency, prices) {
    if (!amount || !prices || prices.length === 0) {
      return null;
    }
    try {
      const price = this.getCoinPrice(symbol, currency, prices);
      const amountBigNumber = new BigNumber(amount);
      const value = amountBigNumber.times(price);
      return value;
    } catch (e) {
      console.error(e);
    }
    return null;
  },
};

export default common;

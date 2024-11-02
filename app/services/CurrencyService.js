import axios from "axios";

export default class CurrencyService {
  getCurrencies() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/currencies/getCurrencies`);
  }

  getCurrencyByCode(code) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/currencies/getCurrencyByCode?code=${code}`
    );
  }
}

import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class CounterOfferService {
  async addCounterOffer(counterOffer) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/counterOffers/addCounterOffer`,
      data: counterOffer,
      headers: { "Content-Type": "application/json;charset-UTF-8",
      "Authorization": secureLocalStorage.getItem("token") },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  getCountOfCounterOffers() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/counterOffers/getCountOfCounterOffers`
    );
  }
}

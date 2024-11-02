import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class MoreOfferSizeService {
  async updateMoreOfferSize(moreOfferSize) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/moreOfferSizes/updateMoreOfferSize`,
      data: moreOfferSize,
      headers: {
        "Content-Type": "application/json;charset-UTF-8",
        "Authorization": secureLocalStorage.getItem("token")
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  getMoreOfferSizes() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/moreOfferSizes/getMoreOfferSizes`
    );
  }
}

import axios from "axios";
import secureLocalStorage from "react-secure-storage";


export default class OfferContactService {
  async addOfferContact(offerContactDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/offerContacts/addOfferContact`,
      data: offerContactDto,
      headers: { "Content-Type": "application/json;charset-UTF-8",
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
}
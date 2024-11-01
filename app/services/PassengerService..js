import axios from "axios";
import secureLocalStorage from "react-secure-storage";


export default class PassengerService {
  async addPassengers(passengerDtos) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/passengers/addPassengers`,
      data: passengerDtos,
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
}
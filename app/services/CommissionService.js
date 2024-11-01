import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class CommissionService {
  getCommissionsByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/commissions/getCommissionsByUserId?userId=${userId}`
      , {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": secureLocalStorage.getItem("token")
        }
      }
    ).then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  }
}

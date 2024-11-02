import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class PaymentService {
  async addPayment(payment) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/payments/addPayment`,
      data: payment,
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

  getPaymentByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/payments/getPaymentByUserId?userId=${userId}`
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

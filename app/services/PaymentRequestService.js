import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class PaymentRequestService {
  async addPaymentRequest(paymentRequestDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/paymentRequests/addPaymentRequest`,
      data: paymentRequestDto,
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

  async changePaymentRequestStatus(changePaymentRequestStatusDto) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/paymentRequests/changePaymentRequestStatus`,
      data: changePaymentRequestStatusDto,
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

  getPaymentRequests() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/paymentRequests/getPaymentRequests`
      , {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": secureLocalStorage.getItem("token")
        }
      }
    );
  }

  getPaymentRequestsByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/paymentRequests/getPaymentRequestsByUserId?userId=${userId}`
      , {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": secureLocalStorage.getItem("token")
        }
      }
    );
  }
}

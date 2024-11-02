import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class BusOfferService {
  async addBusOffer(busOffer) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/busOffers/addBusOffer`,
        data: busOffer,
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

  getBusOffers(pageNumber, pageElementSize) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/busOffers/getBusOffers?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`);
  }

  getBusOfferById(id) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/getBusOfferById?id=${id}`
    );
  }

  getAllByUserId(pageNumber, pageElementSize, userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/getAllByUserId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`)
  }

  findAllByNumberOfGuest(pageNumber, pageElementSize, numberOfGuest) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/findAllByNumberOfGuest?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&numberOfGuest=${numberOfGuest}`
    );
  }
  findAllByOfferStatusIdIn(pageNumber, pageElementSize, offerStatusIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/findAllByOfferStatusIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}`
    );
  }
  getBusOffersByCurrencyNameAndOfferAmountBetween(
    pageNumber,
    pageElementSize,
    currencyName,
    minOfferAmount,
    maxOfferAmount
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/getBusOffersByCurrencyNameAndOfferAmountBetween?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}`
    );
  }
  
  changeOfferStatusToEvaluating(busOfferId, evaluatorId) {
    return axios.get(
        `https://holidayoffer-production.up.railway.app/api/busOffers/changeOfferStatusToEvaluating?busOfferId=${busOfferId}&evaluatorId=${evaluatorId}`, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": secureLocalStorage.getItem("token")
          }
        }).then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  changeOfferStatusToApproved(busOfferId, departureTime, busCompanyId) {
    return axios.get(
        `https://holidayoffer-production.up.railway.app/api/busOffers/changeOfferStatusToApproved?busOfferId=${busOfferId}&departureTime=${departureTime}&busCompanyId=${busCompanyId}`, {
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
  getCountOfBusOffers() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/busOffers/getCountOfBusOffers`);
  }
  findAllForMobile(pageNumber, pageElementSize, offerStatusIds, currencyName, minOfferAmount, maxOfferAmount, numberOfGuest) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/findAllForMobile?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}&numberOfGuest=${numberOfGuest}`
    );
  }
  countAllByUserIdAndIsApprovePaymentTrue(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/countAllByUserIdAndIsApprovePaymentTrue?userId=${userId}`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": secureLocalStorage.getItem("token")
        }
      }
    );
  }
  getAllByUserIdAndIsApprovePaymentTrue(pageNumber, pageElementSize, userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/getAllByUserIdAndIsApprovePaymentTrue?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }
  getAllByEvaluatorId(pageNumber, pageElementSize, evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/busOffers/getAllByEvaluatorId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&evaluatorId=${evaluatorId}`
    );
  }
}
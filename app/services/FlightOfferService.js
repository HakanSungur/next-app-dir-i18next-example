import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class FlightOfferService {
  async addFlightOffer(flightOffer) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/flightOffers/addFlightOffer`,
      data: flightOffer,
      headers: { "Content-Type": "application/json",
      "Authorization": secureLocalStorage.getItem("token") },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  getFlightOffers(pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/getFlightOffers?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  getFlightOfferById(flightOfferId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/getFlightOfferById?flightOfferId=${flightOfferId}`
    );
  }
  getAllByUserId(pageNumber, pageElementSize,userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/getAllByUserId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }

  findAllByNumberOfGuest(pageNumber, pageElementSize, numberOfGuest) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/findAllByNumberOfGuest?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&numberOfGuest=${numberOfGuest}`
    );
  }
  findAllByOfferStatusIdIn(pageNumber, pageElementSize, offerStatusIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/findAllByOfferStatusIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}`
    );
  }
  getFlightOffersByCurrencyNameAndOfferAmountBetween(
    pageNumber,
    pageElementSize,
    currencyName,
    minOfferAmount,
    maxOfferAmount
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/getFlightOffersByCurrencyNameAndOfferAmountBetween?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}`
    );
  }
  
  changeOfferStatusToEvaluating(flightOfferId,evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/changeOfferStatusToEvaluating?flightOfferId=${flightOfferId}&evaluatorId=${evaluatorId}`
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

  changeOfferStatusToApproved(flightOfferId,departureTime,airlineCompanyId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/changeOfferStatusToApproved?flightOfferId=${flightOfferId}&departureTime=${departureTime}&airlineCompanyId=${airlineCompanyId}`
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
  getCountOfFlightOffers() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/getCountOfFlightOffers`
    );
  }
  findAllForMobile(pageNumber,pageElementSize,offerStatusIds,currencyName,minOfferAmount,maxOfferAmount,numberOfGuest){
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/findAllForMobile?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}&numberOfGuest=${numberOfGuest}`
    );
  }
  countAllByUserIdAndIsApprovePaymentTrue(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/countAllByUserIdAndIsApprovePaymentTrue?userId=${userId}`
    );
  }
  getAllByUserIdAndIsApprovePaymentTrue(pageNumber,pageElementSize,userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/getAllByUserIdAndIsApprovePaymentTrue?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }
  getAllByEvaluatorId(pageNumber, pageElementSize,evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/flightOffers/getAllByEvaluatorId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&evaluatorId=${evaluatorId}`
    );
  }
}

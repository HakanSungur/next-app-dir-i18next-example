import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class CarOfferService {
  async addCarOffer(carOffer) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/carOffers/addCarOffer`,
        data: carOffer,
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

  getCarOffers(pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffers?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  getCarOfferById(carOfferId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOfferById?carOfferId=${carOfferId}`
    );
  }

  getCarOffersByPickUpDate() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByPickUpDate`);
  }

  getCarOffersByDropOffDate() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByDropOffDate`);
  }

  getCarOffersByPickUpCityName(pickUpCityName) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByPickUpCityName?pickUpCityName=${pickUpCityName}`
    );
  }

  getCarOffersByDropOffCityName(dropOffCityName) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByDropOffCityName?dropOffCityName=${dropOffCityName}`
    );
  }

  getCarOffersByPickUpAirportName(pickUpAirPortName) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByPickUpAirportName?pickUpAirPortName=${pickUpAirPortName}`
    );
  }

  getCarOffersByDropOffAirportName(dropOffAirPortName) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByDropOffAirportName?dropOffAirPortName=${dropOffAirPortName}`
    );
  }

  getCarOffersByCarId(pageNumber, pageElementSize, carId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByCarId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&carId=${carId}`
    );
  }

  getCarOffersByOfferAmount() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByOfferAmount`);
  }

  getCarOffersByOfferConfirmStatusWaiting() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByOfferConfirmStatusWaiting`
    );
  }

  getCarOffersByOfferConfirmStatusApproved() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByOfferConfirmStatusApproved`
    );
  }

  getCarOffersByOfferConfirmStatusNotApproved() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getCarOffersByOfferConfirmStatusNotApproved`
    );
  }

  getAllByUserId(pageNumber, pageElementSize, userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getAllByUserId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }
  countAllByCarUserId(carUserId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/countAllByCarUserId?carUserId=${carUserId}`
    );
  }
  countAllByCarId(carId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/countAllByCarId?carId=${carId}`
    );
  }
  changeOfferStatusToEvaluating(carOfferId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/changeOfferStatusToEvaluating?carOfferId=${carOfferId}`, {
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
  
  changeOfferStatusToApproved(carOfferId, carCompanyId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/changeOfferStatusToApproved?carOfferId=${carOfferId}&carCompanyId=${carCompanyId}`, {
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
  findAllByOfferStatusIds(pageNumber, pageElementSize, offerStatusIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/findAllByOfferStatusIds?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}`
    );
  }
  findAllByCarTypeIdIn(pageNumber, pageElementSize, carTypeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/findAllByCarTypeIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&carTypeIds=${carTypeIds}`
    );
  }
  findAllByTransmissionTypeIdIn(
    pageNumber,
    pageElementSize,
    transmissionTypeIds
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/findAllByTransmissionTypeIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&transmissionTypeIds=${transmissionTypeIds}`
    );
  }
  findAllByTransmissionTypeIdInAndCarTypeIdIn(
    pageNumber,
    pageElementSize,
    transmissionTypeIds,
    carTypeIds
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/findAllByTransmissionTypeIdInAndCarTypeIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&transmissionTypeIds=${transmissionTypeIds}&carTypeIds=${carTypeIds}`
    );
  }
  findAllByCurrencyNameAndOfferAmountBetween(
    pageNumber,
    pageElementSize,
    currencyName,
    minOfferAmount,
    maxOfferAmount
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/findAllByCurrencyNameAndOfferAmountBetween?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}`
    );
  }
  getCountOfCarOffers() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/carOffers/getCountOfCarOffers`);
  }
  findAllForMobile(pageNumber, pageElementSize, offerStatusIds, currencyName, minOfferAmount, maxOfferAmount, transmissionTypeIds, carTypeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/findAllForMobile?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}&transmissionTypeIds=${transmissionTypeIds}&carTypeIds=${carTypeIds}`
    );
  }
  findFirstByCarId(carId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/findFirstByCarId?carId=${carId}`
    )
  }
  countAllByUserIdAndIsApprovePaymentTrue(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/countAllByUserIdAndIsApprovePaymentTrue?userId=${userId}`
    );
  }
  getAllByUserIdAndIsApprovePaymentTrue(pageNumber, pageElementSize, userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getAllByUserIdAndIsApprovePaymentTrue?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }
  getAllByEvaluatorId(pageNumber, pageElementSize, evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carOffers/getAllByEvaluatorId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&evaluatorId=${evaluatorId}`
    );
  }
}
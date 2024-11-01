import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class HolidayOfferService {
  async addHolidayOffer(holidayOffer) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/holidayOffers/addHolidayOffer`,
        data: holidayOffer,
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

  getHolidayOffers(pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getHolidayOffers?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  getHolidayOfferByOfferAmount(holidayOfferAmount) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getHolidayOfferByOfferAmount?holidayOfferAmount=${holidayOfferAmount}`
    );
  }

  getHolidayOffersByOfferConfirmStatusWaiting() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getHolidayOffersByOfferConfirmStatusWaiting`
    );
  }

  getHolidayOffersByHotelId(pageNumber, pageElementSize, hotelId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getHolidayOffersByHotelId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&hotelId=${hotelId}`
    );
  }

  getAllByUserId(pageNumber, pageElementSize, userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getAllByUserId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }

  getHolidayOfferById(id) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getHolidayOfferById?id=${id}`
    );
  }

  changeOfferStatusToEvaluating(holidayOfferId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/changeOfferStatusToEvaluating?holidayOfferId=${holidayOfferId}`
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

  changeOfferStatusToApproved(holidayOfferId) {
    return axios.get(
        `https://holidayoffer-production.up.railway.app/api/holidayOffers/changeOfferStatusToApproved?holidayOfferId=${holidayOfferId}`, {
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

  countAllByHotelUserId(hotelUserId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/countAllByHotelUserId?hotelUserId=${hotelUserId}`
    );
  }

  countAllByHotelId(hotelId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/countAllByHotelId?hotelId=${hotelId}`
    );
  }

  countAllByUserIdAndIsApprovePaymentTrue(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/countAllByUserIdAndIsApprovePaymentTrue?userId=${userId}`
    );
  }

  getHolidayOffersByUserIdAndIsApprovePaymentTrue(pageNumber, pageElementSize, userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getHolidayOffersByUserIdAndIsApprovePaymentTrue?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }
  
  findAllByOfferStatusIds(pageNumber, pageElementSize, offerStatusIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/findAllByOfferStatusIds?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}`
    );
  }
  findAllByNumberOfGuest(pageNumber, pageElementSize, numberOfGuest) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/findAllByNumberOfGuest?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&numberOfGuest=${numberOfGuest}`
    );
  }
  getHolidayOffersByCurrencyNameAndOfferAmountBetween(
    pageNumber,
    pageElementSize,
    currencyName,
    minOfferAmount,
    maxOfferAmount
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getHolidayOffersByCurrencyNameAndOfferAmountBetween?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}`
    );
  }
  findHolidayOffersByHotelConceptIdIn(pageNumber, pageElementSize, hotelConceptIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/findHolidayOffersByHotelConceptIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&hotelConceptIds=${hotelConceptIds}`
    );
  }
  findAllByHotelTypeIdIn(pageNumber, pageElementSize, hotelTypeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/findAllByHotelTypeIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&hotelTypeIds=${hotelTypeIds}`
    );
  }
  findAllByHotelConceptIdInAndHotelTypeIdIn(pageNumber, pageElementSize, hotelConceptIds, hotelTypeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/findAllByHotelConceptIdInAndHotelTypeIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&hotelConceptIds=${hotelConceptIds}&hotelTypeIds=${hotelTypeIds}`
    );
  }
  getCountOfHolidayOffers() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getCountOfHolidayOffers`
    );
  }
  findFirstByHotelId(hotelId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/findFirstByHotelId?hotelId=${hotelId}`
    );
  }
  findAllForMobile(pageNumber, pageElementSize, offerStatusIds, numberOfGuest, currencyName, minOfferAmount, maxOfferAmount, hotelConceptIds, hotelTypeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/findAllForMobile?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}&numberOfGuest=${numberOfGuest}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}&hotelConceptIds=${hotelConceptIds}&hotelTypeIds=${hotelTypeIds}`
    );
  }
  getAllByEvaluatorId(pageNumber, pageElementSize, evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/getAllByEvaluatorId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&evaluatorId=${evaluatorId}`
    );
  }
  findTop8HotelsWithOfferCount() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/holidayOffers/findTop8HotelsWithOfferCount`
    );
  }
}
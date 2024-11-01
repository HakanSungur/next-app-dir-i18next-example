import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class ExperienceOfferService {
  async addExperienceOffer(experienceOffer) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/experienceOffers/addExperienceOffer`,
      data: experienceOffer,
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

  getExperienceOffers(pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/getExperienceOffers?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  getExperienceOffersByExperienceId(pageNumber, pageElementSize, experienceId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/getExperienceOffersByExperienceId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&experienceId=${experienceId}`
    );
  }

  getAllByUserId(pageNumber, pageElementSize, userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/getAllByUserId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }
  countAllByExperienceUserId(experienceUserId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/countAllByExperienceUserId?experienceUserId=${experienceUserId}`
    );
  }
  countAllByExperienceId(experienceId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/countAllByExperienceId?experienceId=${experienceId}`
    );
  }
  
  changeOfferStatusToEvaluating(experienceOfferId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/changeOfferStatusToEvaluating?experienceOfferId=${experienceOfferId}`, {
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
  
  changeOfferStatusToApproved(experienceOfferId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/changeOfferStatusToApproved?experienceOfferId=${experienceOfferId}`, {
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
  findAllByNumberOfGuest(pageNumber, pageElementSize, numberOfGuest) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/findAllByNumberOfGuest?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&numberOfGuest=${numberOfGuest}`
    );
  }
  findAllByOfferStatusIdIn(pageNumber, pageElementSize, offerStatusIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/findAllByOfferStatusIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}`
    );
  }
  findAllByExperienceTypesIdIn(
    pageNumber,
    pageElementSize,
    experienceTypesIds
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/findAllByExperienceTypesIdIn?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&experienceTypesIds=${experienceTypesIds}`
    );
  }
  getExperienceOffersByCurrencyNameAndOfferAmountBetween(
    pageNumber,
    pageElementSize,
    currencyName,
    minOfferAmount,
    maxOfferAmount
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/getExperienceOffersByCurrencyNameAndOfferAmountBetween?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}`
    );
  }
  getExperienceOfferById(experienceOfferId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/getExperienceOfferById?experienceOfferId=${experienceOfferId}`
    );
  }
  getCountOfExperienceOffers() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/getCountOfExperienceOffers`
    );
  }
  findFirstByExperienceId(experienceId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/findFirstByExperienceId?experienceId=${experienceId}`
    );
  }
  findAllForMobile(
    pageNumber,
    pageElementSize,
    offerStatusIds,
    numberOfGuest,
    currencyName,
    minOfferAmount,
    maxOfferAmount,
    experienceTypeIds
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/findAllForMobile?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&offerStatusIds=${offerStatusIds}&numberOfGuest=${numberOfGuest}&currencyName=${currencyName}&minOfferAmount=${minOfferAmount}&maxOfferAmount=${maxOfferAmount}&experienceTypeIds=${experienceTypeIds}`
    );
  }
  countAllByUserIdAndIsApprovePaymentTrue(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/countAllByUserIdAndIsApprovePaymentTrue?userId=${userId}`
    );
  }
  getAllByUserIdAndIsApprovePaymentTrue(pageNumber,pageElementSize,userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/getAllByUserIdAndIsApprovePaymentTrue?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&userId=${userId}`
    );
  }
  getAllByEvaluatorId(pageNumber, pageElementSize,evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceOffers/getAllByEvaluatorId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&evaluatorId=${evaluatorId}`
    );
  }
}

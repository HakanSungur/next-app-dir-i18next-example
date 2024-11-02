import axios from "axios";

export default class OfferStatusService {
  getOfferStatuses() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/offerStatuses/getOfferStatuses`
    );
  }
}

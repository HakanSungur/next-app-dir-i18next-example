import axios from "axios";

export default class TransmissionTypeService {

  getTransmissionTypes() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/transmissionTypes/getTransmissionTypes`
    );
  }
}

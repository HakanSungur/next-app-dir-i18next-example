import axios from "axios";

export default class CarTypeService {
  

  getCarTypes() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/carTypes/getCarTypes`);
  }
}

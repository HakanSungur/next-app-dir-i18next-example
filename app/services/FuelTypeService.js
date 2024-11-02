import axios from "axios";

export default class FuelTypeService {

  getFuelTypes() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/fuelTypes/getFuelTypes`);
  }

}

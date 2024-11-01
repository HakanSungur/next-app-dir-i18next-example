import axios from "axios";

export default class HotelTypeService {
  
  getHotelTypes() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/hotelTypes/getHotelTypes`);
  }

  getHotelTypeById(hotelTypeId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotelTypes/getHotelTypeById?hotelTypeId=${hotelTypeId}`
    );
  }
}

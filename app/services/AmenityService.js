import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class AmenityService {
  
  async addAmenity(amenity) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/amenities/addAmenity`,
      data: amenity,
      headers: { 
      "Content-Type": "application/json;charset-UTF-8",
      "Authorization":secureLocalStorage.getItem("token")
     },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  getAmenities() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/amenities/getAmenities`);
  }

  getAmenitiesByIds(amenityIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/amenities/getAmenitiesByIds?amenityIds=${amenityIds}`
    );
  }
}

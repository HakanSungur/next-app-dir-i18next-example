import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class RegionService {
  async addRegion(region) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/regions/addRegion`,
      data: region,
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

  getRegionByHotelId(hotelId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/regions/getRegionByHotelId?hotelId=${hotelId}`
    );
  }

  getRegionsByCountryId(countryId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/regions/getRegionsByCountryId?countryId=${countryId}`
    );
  }
  getRegionsForSearchStartingWith(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/regions/getRegionsForSearchStartingWith?searchInput=${searchInput}`
    );
  }
  getRegionsForSearchContaining(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/regions/getRegionsForSearchContaining?searchInput=${searchInput}`
    );
  }
  getCountOfRegions() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/regions/getCountOfRegions`
    );
  }
}

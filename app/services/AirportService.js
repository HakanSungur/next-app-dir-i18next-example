import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class AirportService {
  
  async addAirport(airport) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/airports/addAirport`,
      data: airport,
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

  getAirportsByCountryId(countryId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/airports/getAirportsByCountryId?countryId=${countryId}`
    );
  }

  getAirportByName(name) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/airports/getAirportByName?name=${name}`
    );
  }

  getAirportsForSearch() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/airports/getAirportsForSearch`);
  }
  getAirportsForSearchContaining(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/airports/getAirportsForSearchContaining?searchInput=${searchInput}`
    );
  }
  getAirportsForSearchStartingWith(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/airports/getAirportsForSearchStartingWith?searchInput=${searchInput}`
    );
  }
  getAirportsRandom() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/airports/getAirportsRandom`);
  }
  getCountOfAirports() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/airports/getCountOfAirports`);
  }
  
}

import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class CountryService {
  async addCountry(country) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/countries/addCountry`,
      data: country,
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

  getCountries(pageNumber, pageElementSize) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/countries/getCountries?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`);
  }

  getCountryById(id) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/countries/getCountryById?id=${id}`);
  }
  getCountriesForSearch(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/countries/getCountriesForSearch?searchInput=${searchInput}`
    );
  }
  getTenCountriesRandom() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/countries/getTenCountriesRandom`);
  }
  getCountriesForSearchStartingWith(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/countries/getCountriesForSearchStartingWith?searchInput=${searchInput}`
    );
  }
  getCountOfCountries() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/countries/getCountOfCountries`);
  }
}


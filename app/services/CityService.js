import axios from "axios";
import secureLocalStorage from "react-secure-storage";


export default class CityService {
  async addCity(city) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/cities/addCity`,
      data: city,
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

  getCityByName(name) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/cities/getCityByName?name=${name}`);
  }

  getCitiesByCountryId(countryId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cities/getCitiesByCountryId?countryId=${countryId}`
    );
  }
  getCitiesForSearchContaining(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cities/getCitiesForSearchContaining?searchInput=${searchInput}`
    );
  }
  getCitiesForSearchStartingWith(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cities/getCitiesForSearchStartingWith?searchInput=${searchInput}`
    );
  }
  getCitiesRandom() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/cities/getCitiesRandom`);
  }
  getCountOfCities() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/cities/getCountOfCities`);
  }
  findRandom5CitiesWithHotels() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/cities/findRandom5CitiesWithHotels`);
  }
  findRandom10CitiesWithHotels() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/cities/findRandom10CitiesWithHotels`);
  }
  async addCityImage(cityImageDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/cities/addCityImage`,
      data: cityImageDto,
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": secureLocalStorage.getItem("token")
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  getCitiesByCountryIdSlice(countryId,pageNumber,pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cities/getCitiesByCountryIdSlice?countryId=${countryId}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
}

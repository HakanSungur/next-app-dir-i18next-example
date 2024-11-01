import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class AirlineCompanyService {
  
  
  async addAirlineCompany(airlineCompanyDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/airlineCompanies/addAirlineCompany`,
      data: airlineCompanyDto,
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

  getByCountryId(countryId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/airlineCompanies/getByCountryId?countryId=${countryId}`
    );
  }
  getAll() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/airlineCompanies/getAll`
    );
  }

}
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class CarCompanyService {

  async addCarCompany(carCompanyDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/carCompanies/addCarCompany`,
      data: carCompanyDto,
      headers: {
        "Content-Type": "application/json;charset-UTF-8",
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

  getByCountryId(countryId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carCompanies/getByCountryId?countryId=${countryId}`
    );
  }

}
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class BusCompanyService {

  async addBusCompany(busCompanyDto) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/busCompanies/addBusCompany`,
        data: busCompanyDto,
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
      `https://holidayoffer-production.up.railway.app/api/busCompanies/getByCountryId?countryId=${countryId}`
    );
  }

}
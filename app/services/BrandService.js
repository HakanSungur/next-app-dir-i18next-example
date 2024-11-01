import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class BrandService {
  async addBrand(brand) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/brands/addBrand`,
        data: brand,
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

  getBrands() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/brands/getBrands`);
  }
}
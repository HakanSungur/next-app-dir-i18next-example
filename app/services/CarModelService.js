import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class CarModelService {
  async addCarModel(carModel) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/carModels/addCarModel`,
      data: carModel,
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

  getCarModels() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/carModels/getCarModels`);
  }

  getCarModelsByBrandId(brandId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/carModels/getCarModelsByBrandId?brandId=${brandId}`
    );
  }
  async addCarModelImage(carModelImageDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/carModels/addCarModelImage`,
      data: carModelImageDto,
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
}

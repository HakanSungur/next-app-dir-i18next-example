import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class ExperienceTypeService {
  async addExperienceType(experienceType) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/experienceTypes/addExperienceType`,
      data: experienceType,
      headers: { "Content-Type": "application/json;charset-UTF-8",
      "Authorization": secureLocalStorage.getItem("token") },
    })
      .then((res) => {
        return res.data.message;
      })
      .catch((err) => {
        return err.error.error;
      });
  }

  getExperienceTypes() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceTypes/getExperienceTypes`
    );
  }

  getExperienceTypesByExperienceId(experienceId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceTypes/getExperienceTypeByExperienceId?experienceId=${experienceId}`
    );
  }
  getExperienceTypesByIds(experienceTypeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experienceTypes/getExperienceTypesByIds?experienceTypeIds=${experienceTypeIds}`
    );
  }
}

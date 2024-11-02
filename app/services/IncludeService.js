import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class IncludeService {
  async addInclude(include) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/includes/addInclude`,
      data: include,
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

  getIncludes() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/includes/getIncludes`);
  }

  getIncludesByIds(includeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/includes/getIncludesByIds?includeIds=${includeIds}`
    );
  }
}

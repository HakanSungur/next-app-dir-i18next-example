import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class ConceptService {
  async addConcept(concept) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/concepts/addConcept`,
      data: concept,
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

  getConcepts() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/concepts/getConcepts`);
  }

}

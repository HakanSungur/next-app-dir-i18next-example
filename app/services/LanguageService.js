import axios from "axios";

export default class LanguageService {

  getLanguages() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/languages/getLanguages`);
  }

  getLanguagesByIds(ids) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/languages/getLanguagesByIds?ids=${ids}`
    );
  }
}

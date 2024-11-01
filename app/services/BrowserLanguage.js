import axios from "axios";

export default class BrowserLanguageService {
  getBrowserLanguageByName(browserLanguageName) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/browserLanguages/getBrowserLanguageByName?browserLanguageName=${browserLanguageName}`
    );
  }
}


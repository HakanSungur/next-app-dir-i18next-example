import axios from "axios";

export default class WhatsAppStatusImageService {

    getByBrowserLanguageName(browserLanguageName) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/whatsAppStatusImages/getByBrowserLanguageName?browserLanguageName=${browserLanguageName}`
    );
  }
  
}
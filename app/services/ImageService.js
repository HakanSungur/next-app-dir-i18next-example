import axios from "axios";

export default class ImageService {
 
  getImageByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/images/getImageByUserId?userId=${userId}`
      
    );
  }
}

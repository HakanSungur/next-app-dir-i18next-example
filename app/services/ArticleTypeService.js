import axios from "axios";

export default class ArticleTypeService {
  
  findAll() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/articleTypes/findAll`);
  }

}
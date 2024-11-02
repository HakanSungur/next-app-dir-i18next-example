import axios from "axios";

export default class ArticleCategoryService {

  getArticleCategories() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/articleCategories/getArticleCategories`
    );
  }
}

import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class ArticleService {

  async addArticle(articleDto) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/articles/addArticle`,
        data: articleDto,
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
  async updateArticle(updateArticleDto) {
    return await axios({
        method: "PUT",
        url: `https://holidayoffer-production.up.railway.app/api/articles/updateArticle`,
        data: updateArticleDto,
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

  getArticles(pageNumber, pageElementSize) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/articles/getArticles?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`);
  }

  getArticleById(articleId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/articles/getArticleById?articleId=${articleId}`
    );
  }
  getArticleBySlug(slug) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/articles/getArticleBySlug?slug=${slug}`
    );
  }

  findTop4ByArticleCategoryIdOrderByIdDesc(articleCategoryId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/articles/findTop4ByArticleCategoryIdOrderByIdDesc?articleCategoryId=${articleCategoryId}`
    );
  }

  countAllByArticleCategoryId(articleCategoryId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/articles/countAllByArticleCategoryId?articleCategoryId=${articleCategoryId}`
    );
  }
  getLast4Article() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/articles/getLast4Article`);
  }
  findTop10Tags() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/articles/findTop10Tags`);
  }

  getAllByArticleCategoryId(pageNumber, pageElementSize, articleCategoryId) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/articles/getAllByTagsContaining?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&articleCategoryId=${articleCategoryId}`)
  }
  getLast4ArticleByLanguage(languageCode) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/articles/getLast4ArticleByLanguage?languageCode=${languageCode}`);
  }
  getArticlesByLanguage(pageNumber, pageElementSize, languageCode) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/articles/getArticlesByLanguage?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&languageCode=${languageCode}`);
  }
}
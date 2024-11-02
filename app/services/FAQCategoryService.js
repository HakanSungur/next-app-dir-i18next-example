import axios from "axios";

export default class FAQCategoryService {
  getFAQCategories() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/faqCategories/getFAQCategories`
    );
  }
}

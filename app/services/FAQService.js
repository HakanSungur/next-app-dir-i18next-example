import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class FAQService {
  async addFAQ(fAQ) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/faqs/addFAQ`,
      data: fAQ,
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

  getAllByFaqCategoryId(pageNumber, pageElementSize, faqCategoryId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/faqs/getAllByFaqCategoryId?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&faqCategoryId=${faqCategoryId}`
    );
  }
}

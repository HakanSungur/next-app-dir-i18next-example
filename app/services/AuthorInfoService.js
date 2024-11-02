import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class AuthorInfoService {

  async addAuthorInfo(authorInfoDto) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/authorInfos/addAuthorInfo`,
        data: authorInfoDto,
        headers: {
          "Content-Type": "application/json;charset-UTF-8",
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
  isApplyBefore(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/authorInfos/isApplyBefore?userId=${userId}`
    );
  }
  getAuthorInfosByIsActiveFalseAndIsRejectedFalse() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/authorInfos/getAuthorInfosByIsActiveFalseAndIsRejectedFalse`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": secureLocalStorage.getItem("token")
        }
      }
    ).then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  }
  rejectAuthorApplication(userId, evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/authorInfos/rejectAuthorApplication?userId=${userId}&evaluatorId=${evaluatorId}`,{
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": secureLocalStorage.getItem("token")
        }
      }
    ).then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  }
}
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class EvaluatorInfoService {

  async addEvaluatorInfo(evaluatorInfoDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/evaluatorInfos/addEvaluatorInfo`,
      data: evaluatorInfoDto,
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
  isApplyBefore(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/evaluatorInfos/isApplyBefore?userId=${userId}`
    );
  }
  getEvaluatorInfosByIsActiveFalseAndIsRejectedFalse() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/evaluatorInfos/getEvaluatorInfosByIsActiveFalseAndIsRejectedFalse`
      , {
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
  rejectEvaluatorApplication(userId,evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/evaluatorInfos/rejectEvaluatorApplication?userId=${userId}&evaluatorId=${evaluatorId}`
      , {
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

import axios from "axios";
import secureLocalStorage from "react-secure-storage";


export default class FreeBidService {
  async addFreeBidApplication(freeBidApplicationDto) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/freeBidApplications/addFreeBidApplication`,
        data: freeBidApplicationDto,
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

  getAllByIsApprovedFalseAndIsRejectedFalse() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/freeBidApplications/getAllByIsApprovedFalseAndIsRejectedFalse`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": secureLocalStorage.getItem("token")
      }
    }).then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  }

  approveFreeBidApplication(freeBidApplicationId, evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/freeBidApplications/approveFreeBidApplication?freeBidApplicationId=${freeBidApplicationId}&evaluatorId=${evaluatorId}`
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
  rejectFreeBidApplication(freeBidApplicationId, evaluatorId, rejectDescription) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/freeBidApplications/rejectFreeBidApplication?freeBidApplicationId=${freeBidApplicationId}&evaluatorId=${evaluatorId}&rejectDescription=${rejectDescription}`
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
  isThereAnyPastApplication(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/freeBidApplications/isThereAnyPastApplication?userId=${userId}`
    );
  }
}
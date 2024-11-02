import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class UserService {
  getUserById(id) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/getUserById?userId=${id}`
    );
  }
  getUsersByEvaluator() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/users/getUsersByEvaluator`);
  }
  getCurrentLoggedInUserRoles() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/getCurrentLoggedInUserRoles`
    );
  }
  getCurrentLoggedInUserRoleName(){
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/getCurrentLoggedInUserRoleName`
    );
  }
  isLoggedInUserAdmin(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/isLoggedInUserAdmin?userId=${userId}`
    );
  }
  isLoggedInUserAuthor(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/isLoggedInUserAuthor?userId=${userId}`
    );
  }
  getLoggedInUser(){
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/getLoggedInUser`
    );
  }
  isLoggedInUserEvaluator(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/isLoggedInUserEvaluator?userId=${userId}`
    );
  }
  getUsersByManager() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/users/getUsersByManager`);
  }

  async createUser(user) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/users/createUser`,
      data: user,
      headers: { "Content-Type": "application/json;charset-UTF-8" },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  async refresh(refreshDto) {
    try {
      const response = await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/users/refresh`,
        data: refreshDto,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async login(login) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/users/login`,
      data: login,
      headers: { 
        "Content-Type": "application/json;charset-UTF-8",
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  async addPicture(userId, pictureFile) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/users/uploadPicture?userId=${userId}`,
      data: pictureFile,
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": secureLocalStorage.getItem("token")
      },
    });
  }

  async updateUser(updateUserDto) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/users/updateUser`,
      data: updateUserDto,
      headers: { "Content-Type": "application/json;charset-UTF-8" },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  isCurrentUserLoggedIn() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/users/isCurrentUserLoggedIn`);
  }

  addEvaluatorRoleToUser(userId,evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/addEvaluatorRoleToUser?userId=${userId}&evaluatorId=${evaluatorId}`
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
  addAuthorRoleToUser(userId,evaluatorId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/addAuthorRoleToUser?userId=${userId}&evaluatorId=${evaluatorId}`
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
  getUserOfferPieceByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/getUserOfferPieceByUserId?userId=${userId}`
      
    );
  }
  getCountOfUsers() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/users/getCountOfUsers`);
  }
  getCountOfEvaluators() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/users/getCountOfEvaluators`);
  }
  getEvaluatorsRandom() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/users/getEvaluatorsRandom`);
  }
  getUserWhatsappImageId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/getUserWhatsappImageId?userId=${userId}`
    );
  }
  isFreeBidFinished(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/isFreeBidFinished?userId=${userId}`
    );
  }
  async changePassword(changePassDto) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/users/changePassword`,
      data: changePassDto,
      headers: { "Content-Type": "application/json;charset-UTF-8",
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
  forgotPassword(email) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/forgotPassword?email=${email}`
    );
  }
  verifyOTP(email,otp) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/verifyOTP?email=${email}&otp=${otp}`
    );
  }
  async changeForgotPassword(forgotPassDto) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/users/changeForgotPassword`,
      data: forgotPassDto,
      headers: { "Content-Type": "application/json;charset-UTF-8" },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  getTop10UsersByHotelCount() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/users/getTop10UsersByHotelCount`);
  }

  isFreeBidUsed(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/users/isFreeBidUsed?userId=${userId}`
    );
  }

  async addFreeBid(freeBidDto) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/users/addFreeBid`,
      data: freeBidDto,
      headers: { "Content-Type": "application/json;charset-UTF-8",
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

}

import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class ContactService {
  async addContact(contact) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/contacts/addContact`,
      data: contact,
      headers: { "Content-Type": "application/json;charset-UTF-8" },
    })
      .then((res) => {
        return res.data.message;
      })
      .catch((err) => {
        return err.error.error;
      });
  }

  async changeContactAnswerById(contactId) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/contacts/changeContactAnswerById`,
      data: contactId,
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
  getContactsByIsAnswerFalse() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/contacts/getContactsByIsAnswerFalse`
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

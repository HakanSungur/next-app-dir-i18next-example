import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class VideoService {
  async addVideo(videoDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/videos/addVideo`,
      data: videoDto,
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

  getVideosRandom() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/videos/getVideosRandom`);
  }
}

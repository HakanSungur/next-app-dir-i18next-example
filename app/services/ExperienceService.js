import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class ExperienceService {
  async addExperience(experience) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/experiences/addExperience`,
      data: experience,
      headers: { "Content-Type": "multipart/form-data",
      "Authorization": secureLocalStorage.getItem("token") },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  async updateExperience(updateExperienceDto) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/experiences/updateExperience`,
      data: updateExperienceDto,
      headers: { "Content-Type": "multipart/form-data",
      "Authorization": secureLocalStorage.getItem("token") },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  getExperienceById(id) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/experiences/getExperienceById?id=${id}`);
  }

  getExperiencesByType(type) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesByType?type=${type}`
    );
  }

  getExperiencesByNameOrCityNameOrCountryNameAndIsActiveTrue(
    experienceName,
    cityName,
    countryName,
    pageNumber,
    pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesByNameOrCityNameOrCountryNameAndIsActiveTrue?experienceName=${experienceName}&cityName=${cityName}&countryName=${countryName}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  getExperiencesByExperienceTypeName(experienceTypeName) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesByExperienceTypeName?experienceTypeName=${experienceTypeName}`
    );
  }
  
  getExperiencesByExperienceIds(pageNumber, pageElementSize, experienceIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesByExperienceIds?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&experienceIds=${experienceIds}`
    );
  }
  countAllByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/countAllByUserId?userId=${userId}`
    );
  }
  filterExperiencesByExperienceTypeWithoutLocation(experienceTypeIds,pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/filterExperiencesByExperienceTypeWithoutLocation?experienceTypeIds=${experienceTypeIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterExperiencesByExperienceTypeWithLocation(
    cityName,
    countryName,
    experienceTypeIds,
    pageNumber,
    pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/filterExperiencesByExperienceTypeWithLocation?cityName=${cityName}&countryName${countryName}&experienceTypeIds${experienceTypeIds}&pageNumber${pageNumber}&pageElementSize${pageElementSize}`
    );
  }

  filterExperiencesByLanguageAndInclude(languageIds, includeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/filterExperiencesByLanguageAndInclude?languageIds=${languageIds}&includeIds${includeIds}`
    );
  }
  filterExperiencesByLanguageAndIncludeWithLocation(
    cityName,
    countryName,
    languageIds,
    includeIds
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/filterExperiencesByLanguageAndIncludeWithLocation?cityName=${cityName}&countryName${countryName}&languageIds${languageIds}&includeIds${includeIds}`
    );
  }
  filterExperiencesByAllProperty(
    experienceTypeIds,
    languageIds,
    includeIds, pageNumber, pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/filterExperiencesByAllProperty?experienceTypeIds=${experienceTypeIds}&languageIds${languageIds}&includeIds${includeIds}&pageNumber${pageNumber}&pageElementSize${pageElementSize}`
    );
  }
  filterExperiencesByAllPropertyWithLocation(
    cityName,
    countryName,
    experienceTypeIds,
    languageIds,
    includeIds
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/filterExperiencesByAllPropertyWithLocation?cityName=${cityName}&countryName=${countryName}&experienceTypeIds=${experienceTypeIds}&languageIds${languageIds}&includeIds${includeIds}`
    );
  }
  getExperiencesRandom() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesRandom`);
  }
  getExperiencesForSearchStartingWith(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesForSearchStartingWith?searchInput=${searchInput}`
    );
  }
  getExperiencesForSearchContaining(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesForSearchContaining?searchInput=${searchInput}`
    );
  }
  getCountOfExperiences() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/experiences/getCountOfExperiences`);
  }
  getExperiencesByUserIdAndIsActiveTrue(userId, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesByUserIdAndIsActiveTrue?userId=${userId}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getExperiencesByIsActiveTrue(pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesByIsActiveTrue?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  
  getExperiencesByCountryIdIsActiveTrue(countryId, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/getExperiencesByCountryIdIsActiveTrue?countryId=${countryId}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  findExperiencesInBounds(minLat,maxLat,minLng,maxLng,pageNumber,pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/experiences/findExperiencesInBounds?minLat=${minLat}&maxLat=${maxLat}&minLng=${minLng}&maxLng=${maxLng}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getExperienceNamesAndExperienceIdsForSitemap() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/experiences/getExperienceNamesAndExperienceIdsForSitemap`);
  }
}

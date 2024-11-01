import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class HotelService {
  async addHotel(hotelDto) {
    return await axios({
      method: "POST",
      url: `https://holidayoffer-production.up.railway.app/api/hotels/addHotel`,
      data: hotelDto,
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

  async updateHotel(updateHotelDto) {
    return await axios({
      method: "PUT",
      url: `https://holidayoffer-production.up.railway.app/api/hotels/updateHotel`,
      data: updateHotelDto,
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

  getHotelById(id) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/hotels/getHotelById?id=${id}`);
  }

  getHotelByName(name) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/hotels/getHotelByName?name=${name}`);
  }

  getHotelsByIsActiveTrue(pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsByIsActiveTrue?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getHotelsByRegionIdIsActiveTrue(regionId, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsByRegionIdIsActiveTrue?regionId=${regionId}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  getHotelsByNameOrCountryNameOrCityNameOrRegionNameOrHotelTypeNameAndIsActiveTrue(
    hotelName,
    countryName,
    cityName,
    regionName,
    hotelTypeName,
    pageNumber,
    pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsByNameOrCountryNameOrCityNameOrRegionNameOrHotelTypeNameAndIsActiveTrue?hotelName=${hotelName}&countryName=${countryName}&cityName=${cityName}&regionName=${regionName}&hotelTypeName=${hotelTypeName}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  getHotelsByHotelIds(pageNumber, pageElementSize, hotelIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsByHotelIds?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&hotelIds=${hotelIds}`
    );
  }
  countAllByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/countAllByUserId?userId=${userId}`
    );
  }
  filterHotelsByHotelTypeWithoutLocation(hotelTypeIds, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/filterHotelsByHotelTypeWithoutLocation?hotelTypeIds=${hotelTypeIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterHotelsByHotelTypeWithLocation(
    hotelName,
    countryName,
    cityName,
    regionName,
    hotelTypeIds,
    pageNumber,
    pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/filterHotelsByHotelTypeWithLocation?hotelName=${hotelName}&countryName=${countryName}&cityName=${cityName}&regionName=${regionName}&hotelTypeIds=${hotelTypeIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  filterHotelsByConceptWithoutLocation(conceptIds,
    pageNumber,
    pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/filterHotelsByConceptWithoutLocation?conceptIds=${conceptIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterHotelsByConceptWithLocation(
    hotelName,
    countryName,
    cityName,
    regionName,
    conceptIds,
    pageNumber,
    pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/filterHotelsByConceptWithLocation?hotelName=${hotelName}&countryName=${countryName}&cityName=${cityName}&regionName=${regionName}&conceptIds=${conceptIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterHotelsByLanguageAndAmenityWithoutLocation(languageIds, amenityIds,
    pageNumber,
    pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/filterHotelsByLanguageAndAmenityWithoutLocation?languageIds=${languageIds}&amenityIds=${amenityIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterHotelsByLanguageAndAmenityWithLocation(
    hotelName,
    countryName,
    cityName,
    regionName,
    languageIds,
    amenityIds,
    pageNumber,
    pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/filterHotelsByLanguageAndAmenityWithLocation?hotelName=${hotelName}&countryName=${countryName}&cityName=${cityName}&regionName=${regionName}&languageIds=${languageIds}&amenityIds=${amenityIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterHotelsByAllPropertyWithoutLocation(
    hotelTypeIds,
    conceptIds,
    languageIds,
    amenityIds,
    pageNumber,
    pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/filterHotelsByAllPropertyWithoutLocation?hotelTypeIds=${hotelTypeIds}&conceptIds=${conceptIds}&languageIds=${languageIds}&amenityIds=${amenityIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterHotelsByAllPropertyWithLocation(
    hotelName,
    countryName,
    cityName,
    regionName,
    hotelTypeIds,
    conceptIds,
    languageIds,
    amenityIds,
    pageNumber,
    pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/filterHotelsByAllPropertyWithLocation?hotelName=${hotelName}&countryName=${countryName}&cityName=${cityName}&regionName=${regionName}&hotelTypeIds=${hotelTypeIds}&conceptIds=${conceptIds}&languageIds=${languageIds}&amenityIds=${amenityIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getHotelsForSearchStartingWith(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsForSearchStartingWith?searchInput=${searchInput}`
    );
  }
  getHotelsForSearchContaining(searchInput) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsForSearchContaining?searchInput=${searchInput}`
    );
  }
  isHotelAdded(hotelName) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/isHotelAdded?hotelName=${hotelName}`
    );
  }
  getHotelsRandom() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/hotels/getHotelsRandom`);
  }
  getHotelsByUserIdAndIsActiveTrue(userId, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsByUserIdAndIsActiveTrue?userId=${userId}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getCountOfHotels() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/hotels/getCountOfHotels`);
  }
  getHotelsByCityNameAndIsActiveTrue(cityName, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsByCityNameAndIsActiveTrue?cityName=${cityName}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getHotelsCountByCityId(cityId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsCountByCityId?cityId=${cityId}`
    );
  }
  getHotelsCountByHotelTypeId(hotelTypeId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/getHotelsCountByHotelTypeId?hotelTypeId=${hotelTypeId}`
    );
  }
  findHotelsInBounds(minLat,maxLat,minLng,maxLng,pageNumber,pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/hotels/findHotelsInBounds?minLat=${minLat}&maxLat=${maxLat}&minLng=${minLng}&maxLng=${maxLng}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  
  getRandom100Hotels() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/hotels/getRandom100Hotels`);
  }
  getHotelNamesAndHotelIdsForSitemap() {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/hotels/getHotelNamesAndHotelIdsForSitemap`);
  }
}


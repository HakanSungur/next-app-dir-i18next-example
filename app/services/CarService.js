import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class CarService {
  async addCar(car) {
    return await axios({
        method: "POST",
        url: `https://holidayoffer-production.up.railway.app/api/cars/addCar`,
        data: car,
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

  async updateCar(updateCarDto) {
    return await axios({
        method: "PUT",
        url: `https://holidayoffer-production.up.railway.app/api/cars/updateCar`,
        data: updateCarDto,
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

  getCarById(id) {
    return axios.get(`https://holidayoffer-production.up.railway.app/api/cars/getCarById?id=${id}`);
  }

  getCarsByCarIds(pageNumber, pageElementSize, carIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/getCarsByCarIds?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}&carIds=${carIds}`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": secureLocalStorage.getItem("token")
        }
      }
    );
  }
  countAllByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/countAllByUserId?userId=${userId}`
    );
  }
  isCarAddedThisCity(carModelId, cityId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/isCarAddedThisCity?carModelId=${carModelId}&cityId=${cityId}`
    );
  }
  isCarAddedThisCity2(carModelId, city2Id) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/isCarAddedThisCity2?carModelId=${carModelId}&city2Id=${city2Id}`
    );
  }
  isCarAddedThisAirport(carModelId, airportId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/isCarAddedThisAirport?carModelId=${carModelId}&airportId=${airportId}`
    );
  }
  filterByCarType(carTypeIds, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterByCarType?carTypeIds=${carTypeIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterByCarTypeWithLocation(cityName, airportName, carTypeIds, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterByCarTypeWithLocation?cityName=${cityName}&airportName=${airportName}&carTypeIds=${carTypeIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterByTransmissionType(transmissionTypeIds, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterByTransmissionType?transmissionTypeIds=${transmissionTypeIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterByTransmissionTypeWithLocation(
    cityName,
    airportName,
    transmissionTypeIds
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterByTransmissionTypeWithLocation?cityName=${cityName}&airportName=${airportName}&transmissionTypeIds=${transmissionTypeIds}`
    );
  }
  filterBySeatAndBag(numberOfSeat, numberOfBag) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterBySeatAndBag?numberOfSeat=${numberOfSeat}&numberOfBag=${numberOfBag}`
    );
  }
  filterBySeatAndBagWithLocation(
    cityName,
    airportName,
    numberOfSeat,
    numberOfBag
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterBySeatAndBagWithLocation?cityName=${cityName}&airportName=${airportName}&numberOfSeat=${numberOfSeat}&numberOfBag=${numberOfBag}`
    );
  }
  filterByBrandAndFuelType(brandIds, fuelTypeIds, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterByBrandAndFuelType?brandIds=${brandIds}&fuelTypeIds=${fuelTypeIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterByBrandAndFuelTypeWithLocation(
    cityName,
    airportName,
    brandIds,
    fuelTypeIds,
    pageNumber, pageElementSize
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterByBrandAndFuelTypeWithLocation?cityName=${cityName}&airportName=${airportName}&brandIds=${brandIds}&fuelTypeIds=${fuelTypeIds}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  filterAllProperty(carTypeIds, transmissionTypeIds, brandIds, fuelTypeIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterAllProperty?carTypeIds=${carTypeIds}&transmissionTypeIds=${transmissionTypeIds}&brandIds=${brandIds}&fuelTypeIds=${fuelTypeIds}`
    );
  }
  filterAllPropertyWithLocation(
    cityName,
    airportName,
    carTypeIds,
    transmissionTypeIds,
    brandIds,
    fuelTypeIds
  ) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/filterAllPropertyWithLocation?cityName=${cityName}&airportName=${airportName}&carTypeIds=${carTypeIds}&transmissionTypeIds=${transmissionTypeIds}&brandIds=${brandIds}&fuelTypeIds=${fuelTypeIds}`
    );
  }
  getCountOfCars() {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/getCountOfCars`
    );
  }
  getCarsByUserIdAndIsActiveTrue(userId, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/getCarsByUserIdAndIsActiveTrue?userId=${userId}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getCarsByCityNameOrCity2NameOrAirPortNameAndIsActiveTrue(cityName, cityName2, airportName, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/getCarsByCityNameOrCity2NameOrAirPortNameAndIsActiveTrue?cityName=${cityName}&cityName2=${cityName2}&airportName=${airportName}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getCarsByCityIdAndIsActiveTrue(cityId, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/getCarsByCityIdAndIsActiveTrue?cityId=${cityId}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

  findAllByCountryCountryCodeAndIsActiveTrue(countryCode, pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/findAllByCountryCountryCodeAndIsActiveTrue?countryCode=${countryCode}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  getCarsIsActiveTrue(pageNumber, pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/getCarsIsActiveTrue?pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }
  findCarsInBounds(minLat,maxLat,minLng,maxLng,pageNumber,pageElementSize) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/cars/findCarsInBounds?minLat=${minLat}&maxLat=${maxLat}&minLng=${minLng}&maxLng=${maxLng}&pageNumber=${pageNumber}&pageElementSize=${pageElementSize}`
    );
  }

}
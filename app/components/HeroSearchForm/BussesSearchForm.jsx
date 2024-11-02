"use client"
import 'react-dates/lib/initialize.js';
import React,{ useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import FlightDateSingleInput from "./FlightDateSingleInput";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useRouter } from 'next/router';
import moment from "moment";
import NcInputNumber from "../../components/NcInputNumber/NcInputNumber";
import CityService from "../../services/CityService";
import BusOfferService from "../../services/BusOfferService";
import UserService from "../../services/UserService";
import Swal from "sweetalert2";
import FlightButtonSubmit from "./FlightButtonSubmit";
import BidInput from "./BidInput";
import secureLocalStorage from "react-secure-storage";
import AirportService from "../../services/AirportService";
import HotelService from "../../services/HotelService";
import { useTranslation } from "react-i18next";

const BussesSearchForm = ({
  haveDefaultValue,
  isBusBidDataChanged,
  setIsBusBidDataChanged,
}) => {
  const { t } = useTranslation();
  const [dateValue, setDateValue] = useState(moment().add(7, "days"));
  const [pickUpInputValue, setPickUpInputValue] = useState("");
  const [dropOffInputValue, setDropOffInputValue] = useState("");
  const [fieldFocused, setFieldFocused] = useState(null);
  const [dropOffLocationType, setDropOffLocationType] = useState("oneWay");
  const [guests, setGuests] = useState(1);
  const [cities, setCities] = useState([]);
  const [cities2, setCities2] = useState([]);
  const [airports, setAirports] = useState([]);
  const [airports2, setAirports2] = useState([]);
  const [stays, setStays] = useState([]);
  const [stays2, setStays2] = useState([]);
  const [dateFocused, setDateFocused] = useState(false);
  const [userId] = useState(secureLocalStorage.getItem("userId"));
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [offerAmount, setOfferAmount] = useState("");
  let router = useRouter();
  const [isSelectedPickUpInputValue, setIsSelectedPickUpInputValue] =
    useState(false);
  const [isSelectedDropOffInputValue, setIsSelectedDropOffInputValue] =
    useState(false);
  const [concatenatedData, setConcanetedData] = useState([]);
  const [concatenatedData2, setConcanetedData2] = useState([]);
  const [pickUpAirport, setPickUpAirport] = useState({});
  const [dropOffAirport, setDropOffAirport] = useState({});
  const [pickUpCity, setPickUpCity] = useState({});
  const [dropOffCity, setDropOffCity] = useState({});
  const [pickUpStay, setPickUpStay] = useState({});
  const [dropOffStay, setDropOffStay] = useState({});

  //GET USER
  useEffect(() => {
    if (userId) {
      let userService = new UserService();
      userService
        .getUserById(userId)
        .then((result) => setUser(result.data.data));
    }
  }, []);

  //INITIAL VALUES
  useEffect(() => {
    const cityService = new CityService();
    cityService
      .getCitiesRandom()
      .then((res) => setCities(res.data.data.content));
    cityService
      .getCitiesRandom()
      .then((res) => setCities2(res.data.data.content));
  }, []);

  //AIRPORTS PICKUP
  useEffect(() => {
    const hotelService = new HotelService();
    if (pickUpInputValue !== "" && pickUpInputValue.length > 1) {
      hotelService
        .getHotelsForSearchStartingWith(pickUpInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setStays(res.data.data);
          } else {
            hotelService
              .getHotelsForSearchContaining(pickUpInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setStays(res.data.data);
                }
              });
          }
        });
    }
  }, [pickUpInputValue]);

  //AIRPORTS DROPOFF
  useEffect(() => {
    const hotelService = new HotelService();
    if (dropOffInputValue !== "" && dropOffInputValue.length > 1) {
      hotelService
        .getHotelsForSearchStartingWith(dropOffInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setStays2(res.data.data);
          } else {
            hotelService
              .getHotelsForSearchContaining(dropOffInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setStays2(res.data.data);
                }
              });
          }
        });
    }
  }, [dropOffInputValue]);

  //AIRPORTS PICKUP
  useEffect(() => {
    const airportService = new AirportService();
    if (pickUpInputValue !== "" && pickUpInputValue.length > 1) {
      airportService
        .getAirportsForSearchStartingWith(pickUpInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setAirports(res.data.data);
          } else {
            airportService
              .getAirportsForSearchContaining(pickUpInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setAirports(res.data.data);
                }
              });
          }
        });
    }
  }, [pickUpInputValue]);

  //AIRPORTS DROPOFF
  useEffect(() => {
    const airportService = new AirportService();
    if (dropOffInputValue !== "" && dropOffInputValue.length > 1) {
      airportService
        .getAirportsForSearchStartingWith(dropOffInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setAirports2(res.data.data);
          } else {
            airportService
              .getAirportsForSearchContaining(dropOffInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setAirports2(res.data.data);
                }
              });
          }
        });
    }
  }, [dropOffInputValue]);

  //CITIES PICKUP
  useEffect(() => {
    const cityService = new CityService();
    if (pickUpInputValue !== "" && pickUpInputValue.length > 1) {
      cityService
        .getCitiesForSearchStartingWith(pickUpInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setCities(res.data.data);
          } else {
            cityService
              .getCitiesForSearchContaining(pickUpInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setCities(res.data.data);
                }
              });
          }
        });
    }
  }, [pickUpInputValue]);

  //CITIES DROPOFF
  useEffect(() => {
    const cityService = new CityService();
    if (dropOffInputValue !== "" && dropOffInputValue.length > 1) {
      cityService
        .getCitiesForSearchStartingWith(dropOffInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setCities2(res.data.data);
          } else {
            cityService
              .getCitiesForSearchContaining(dropOffInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setCities2(res.data.data);
                }
              });
          }
        });
    }
  }, [dropOffInputValue]);

  /// USER EFFECT
  useEffect(() => {
    if (haveDefaultValue) {
      setDateValue(moment().add(8, "day"));
      setPickUpInputValue(pickUpInputValue);
      setDropOffInputValue(dropOffInputValue);
    }
  }, []);

  useEffect(() => {
    setConcanetedData(cities.concat(airports, stays));
  }, [cities, stays, airports]);

  useEffect(() => {
    setConcanetedData2(cities2.concat(airports2, stays2));
  }, [cities2, stays2, airports2]);

  //FILTERED CITYAIRPORTSTAY
  let filteredData = concatenatedData?.filter((cityOrAirportOrStay) => {
    let filteredCityOrAirportOrStay =
      cityOrAirportOrStay?.name
        ?.toLowerCase()
        .indexOf(pickUpInputValue.toLocaleLowerCase()) !== -1;

    return filteredCityOrAirportOrStay;
  });

  //FILTERED CITYAIRPORTSTAY
  let filteredData2 = concatenatedData2?.filter((cityOrAirportOrStay) => {
    let filteredCityOrAirportOrStay =
      cityOrAirportOrStay?.name
        ?.toLowerCase()
        .indexOf(dropOffInputValue.toLocaleLowerCase()) !== -1;

    return filteredCityOrAirportOrStay;
  });

  //HANDLE BID
  const handleClickBid = (e) => {
    e?.preventDefault();
    setLoading(true);
    let minStartDate = moment().add(6, "days");

    if (!isSelectedPickUpInputValue) {
      Swal.fire({
        title: t("bussesSearchForm1"),
        text: t("bussesSearchForm2"),
        icon: "error",
      });
      setLoading(false);
    } else if (!isSelectedDropOffInputValue) {
      Swal.fire({
        title: t("bussesSearchForm1"),
        text: t("bussesSearchForm3"),
        icon: "error",
      });
      setLoading(false);
    } else if (userId === null) {
      Swal.fire({
        title: t("bussesSearchForm1"),
        text: t("bussesSearchForm4"),
        icon: "error",
      }).then(function () {
        router.push("/login");
      });
    } else if (pickUpInputValue === dropOffInputValue) {
      Swal.fire({
        title: t("bussesSearchForm1"),
        text: t("bussesSearchForm5"),
        icon: "error",
      }).then(function () {
        setLoading(false);
      });
    } else if (minStartDate.isAfter(dateValue)) {
      Swal.fire({
        title: t("bussesSearchForm1"),
        text: t("bussesSearchForm6"),
        icon: "error",
      });
    } else if (user.offerPiece < 1) {
      Swal.fire({
        title: t("bussesSearchForm1"),
        text: t("bussesSearchForm7"),
        icon: "error",
      }).then(function () {
        router.push("/bid-packages");
      });
    } else if (
      offerAmount === 0 ||
      offerAmount === "undefined" ||
      offerAmount === "" ||
      offerAmount === null ||
      offerAmount[0] === "0"
    ) {
      Swal.fire({
        title: t("bussesSearchForm1"),
        text: t("bussesSearchForm8"),
        icon: "error",
      });
      setLoading(false);
    } else if (
      pickUpInputValue === null ||
      pickUpInputValue === undefined ||
      pickUpInputValue === "" ||
      dropOffInputValue === null ||
      dropOffInputValue === undefined ||
      dropOffInputValue === ""
    ) {
      Swal.fire({
        title: t("bussesSearchForm1"),
        text: t("bussesSearchForm9"),
        icon: "error",
      });
    } else {
      const form = {
        numberOfGuest: guests,
        takeOffDate: dateValue,
        offerAmount: offerAmount,
        offerStatusId: 1,
        userId: userId,
        currencyName: secureLocalStorage.getItem("currencyName"),
        currencyIcon: secureLocalStorage.getItem("currencyIcon"),
        busFromCityId: pickUpCity?.id,
        busToCityId: dropOffCity?.id,
        busFromAirportId: pickUpAirport?.id,
        busToAirportId: dropOffAirport?.id,
        busFromStayId: pickUpStay?.id,
        busToStayId: dropOffStay?.id,
      };

      let busOfferService = new BusOfferService();
      busOfferService.addBusOffer(form).then((res) => {
        if (res?.data?.message === "true") {
          if (router.pathname === "/bus-bids") {
            setIsBusBidDataChanged(!isBusBidDataChanged);
            Swal.fire({
              title: t("bussesSearchForm10"),
              text: t("bussesSearchForm11"),
              icon: "success",
              confirmButtonText: t("bussesSearchForm12"),
            });
            setLoading(false);
          } else {
            Swal.fire({
              title: t("bussesSearchForm10"),
              text: t("bussesSearchForm11"),
              icon: "success",
              confirmButtonText: t("bussesSearchForm12"),
            });
            setLoading(false);
          }
        } else if (res?.response.status === 401) {
          const refreshDto = {
            userId: secureLocalStorage.getItem("userId"),
            refreshToken: secureLocalStorage.getItem("refreshToken"),
          };
          const userService = new UserService();
          userService.refresh(refreshDto).then((res) => {
            if (res.success === true) {
              secureLocalStorage.setItem("token", res.data.jwtToken);
              secureLocalStorage.setItem("refreshToken", res.data.refreshToken);
              handleClickBid();
            } else {
              secureLocalStorage.removeItem("isEva");
              secureLocalStorage.removeItem("isAdm");
              secureLocalStorage.removeItem("isAut");
              secureLocalStorage.removeItem("token");
              secureLocalStorage.removeItem("userId");
              secureLocalStorage.removeItem("refreshToken");
              secureLocalStorage.removeItem("userEmail");
              secureLocalStorage.removeItem("userFirstName");
              secureLocalStorage.removeItem("userLastName");
              router.push("/login");
            }
          });
        }
      });
    }
  };

  //DROPDAWN DATA COUNT
  const dropDownData = filteredData?.filter((_, i) => i < 7);
  const dropDownData2 = filteredData2?.filter((_, i) => i < 7);

  //SET IS SELECTED ITEM
  useEffect(() => {
    setIsSelectedPickUpInputValue(
      dropDownData.filter(
        (dropDownData) => dropDownData.name === pickUpInputValue
      ).length > 0
    );
  }, [pickUpInputValue]);

  //SET IS SELECTED ITEM
  useEffect(() => {
    setIsSelectedDropOffInputValue(
      dropDownData2.filter(
        (dropDownData2) => dropDownData2.name === dropOffInputValue
      ).length > 0
    );
  }, [dropOffInputValue]);

  //SET CITY BY NAME
  useEffect(() => {
    if (isSelectedPickUpInputValue) {
      const cityService = new CityService();
      cityService.getCityByName(pickUpInputValue).then((res) => {
        if (res.data.data) {
          setPickUpCity(res.data.data);
          setPickUpAirport(null);
          setPickUpStay(null);
        }
      });
    }
  }, [pickUpInputValue, isSelectedPickUpInputValue]);

  //SET CITY BY NAME
  useEffect(() => {
    if (isSelectedDropOffInputValue) {
      const cityService = new CityService();
      cityService.getCityByName(dropOffInputValue).then((res) => {
        if (res.data.data) {
          setDropOffCity(res.data.data);
          setDropOffAirport(null);
          setDropOffStay(null);
        }
      });
    }
  }, [dropOffInputValue, isSelectedDropOffInputValue]);

  //SET AIRPORT BY AIRPORT NAME
  useEffect(() => {
    if (isSelectedPickUpInputValue) {
      const airportService = new AirportService();
      airportService.getAirportByName(pickUpInputValue).then((res) => {
        if (res.data.data) {
          setPickUpAirport(res.data.data);
          setPickUpCity(null);
          setPickUpStay(null);
        }
      });
    }
  }, [pickUpInputValue, isSelectedPickUpInputValue]);

  //SET AIRPORT BY AIRPORT NAME
  useEffect(() => {
    if (isSelectedDropOffInputValue) {
      const airportService = new AirportService();
      airportService.getAirportByName(dropOffInputValue).then((res) => {
        if (res.data.data) {
          setDropOffAirport(res.data.data);
          setDropOffCity(null);
          setDropOffStay(null);
        }
      });
    }
  }, [dropOffInputValue, isSelectedDropOffInputValue]);

  //SET STAY BY NAME
  useEffect(() => {
    if (isSelectedPickUpInputValue) {
      const hotelService = new HotelService();
      hotelService
        .getHotelByName(encodeURIComponent(pickUpInputValue))
        .then((res) => {
          if (res.data.data) {
            setPickUpStay(res.data.data);
            setPickUpCity(null);
            setPickUpAirport(null);
          }
        });
    }
  }, [pickUpInputValue, isSelectedPickUpInputValue]);

  //SET STAY BY NAME
  useEffect(() => {
    if (isSelectedDropOffInputValue) {
      const hotelService = new HotelService();
      hotelService
        .getHotelByName(encodeURIComponent(dropOffInputValue))
        .then((res) => {
          if (res.data.data) {
            setDropOffStay(res.data.data);
            setDropOffCity(null);
            setDropOffAirport(null);
          }
        });
    }
  }, [dropOffInputValue, isSelectedDropOffInputValue]);

  const renderGuest = () => {
    return (
      <div className="">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
           ${open ? "" : ""}
            px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
              >
                <span>{`${guests} ${t("bussesSearchForm13")}`}</span>
                <ChevronDownIcon
                  className={`${
                    open ? "" : "text-opacity-70"
                  } ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ">
                  <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative bg-white dark:bg-neutral-800 p-4">
                      <NcInputNumber
                        onChange={(e) => setGuests(e)}
                        min={1}
                        defaultValue={guests}
                        max={55}
                      />
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    );
  };

  const renderRadioBtn = () => {
    return (
      <div className=" py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap border-b border-neutral-100 dark:border-neutral-800">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-4 ${
            dropOffLocationType === "oneWay"
              ? "bg-black text-white shadow-black/10 shadow-lg"
              : "border border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("oneWay")}
        >
          {t("bussesSearchForm14")}
        </div>
        <div className=" mr-2 my-1 sm:mr-4 border border-neutral-300 dark:border-neutral-700 rounded-full"></div>
        <div className="my-1 border border-neutral-300 dark:border-neutral-700 rounded-full">
          {renderGuest()}
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="w-full">
        <form className="w-full relative mt-8 rounded-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900">
          {renderRadioBtn()}
          <div className=" flex flex-col md:flex-row md:items-center w-full rounded-full [ nc-divide-field ] ">
            <div className="relative flex flex-col md:flex-row flex-grow [ nc-divide-field ] ">
              <LocationInput
                defaultValue={pickUpInputValue}
                dropDownData={dropDownData}
                onChange={(e) => setPickUpInputValue(e)}
                onInputDone={() => setFieldFocused("dropOffInput")}
                placeHolder={t("bussesSearchForm15")}
                desc={t("bussesSearchForm16")}
              />
              <LocationInput
                defaultValue={dropOffInputValue}
                dropDownData={dropDownData2}
                onChange={(e) => setDropOffInputValue(e)}
                onInputDone={() => setFieldFocused("startDate")}
                placeHolder={t("bussesSearchForm17")}
                desc={t("bussesSearchForm18")}
                autoFocus={fieldFocused === "dropOffInput"}
              />
            </div>
            <div className="flex-shrink-0">
              <FlightDateSingleInput
                defaultValue={dateValue}
                onChange={(date) => setDateValue(date)}
                defaultFocus={dateFocused}
                onInputDone={() => setFieldFocused("bidAmount")}
                onFocusChange={(focus) => {
                  setDateFocused(focus);
                }}
              />
            </div>

            {/* <div className="text-neutral-300 dark:text-neutral-400"> */}
            <div className="flex-shrink-0">
              <BidInput
                defaultValue={offerAmount}
                onChange={(e) => setOfferAmount(e)}
                onInputDone={() => setDateFocused(true)}
                placeHolder={t("bussesSearchForm19")}
              />
            </div>
            {/* BUTTON SUBMIT OF FORM */}
            <div className="px-4 py-3">
              <FlightButtonSubmit onClick={handleClickBid} loading={loading} />
            </div>
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default BussesSearchForm;

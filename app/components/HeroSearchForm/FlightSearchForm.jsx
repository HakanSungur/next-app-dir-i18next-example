import 'react-dates/lib/initialize.js';
import React,{ useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import { useRouter } from 'next/router';
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import moment from "moment";
import NcInputNumber from "../../components/NcInputNumber/NcInputNumber";
import AirportService from "../../services/AirportService";
import Swal from "sweetalert2";
import FlightOfferService from "../../services/FlightOfferService";
import UserService from "../../services/UserService";
import FlightButtonSubmit from "./FlightButtonSubmit";
import FlightDateSingleInput from "./FlightDateSingleInput";
import BidInput from "./BidInput";
import secureLocalStorage from "react-secure-storage";
import { useTranslation } from "react-i18next";

const FlightSearchForm = ({
  haveDefaultValue,
  isBidDataChanged,
  setIsBidDataChanged,
}) => {
  const { t } = useTranslation();
  const [dateValue, setDateValue] = useState(moment().add(7, "days"));
  const [dateFocused, setDateFocused] = useState(false);
  const [pickUpInputValue, setPickUpInputValue] = useState("");
  const [dropOffInputValue, setDropOffInputValue] = useState("");
  const [pickUpAirport, setPickUpAirport] = useState({});
  const [dropOffAirport, setDropOffAirport] = useState({});
  const [fieldFocused, setFieldFocused] = useState(null);
  const [dropOffLocationType, setDropOffLocationType] = useState("oneWay");
  const [guests, setGuests] = useState(1);
  const [airports, setAirports] = useState([]);
  const [airports2, setAirports2] = useState([]);
  const [userId] = useState(secureLocalStorage.getItem("userId"));
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [offerAmount, setOfferAmount] = useState("");
  let router = useRouter();
  const [isSelectedPickUpInputValue, setIsSelectedPickUpInputValue] =
    useState(false);
  const [isSelectedDropOffInputValue, setIsSelectedDropOffInputValue] =
    useState(false);

  //GET USER
  useEffect(() => {
    if (userId) {
      let userService = new UserService();
      userService
        .getUserById(userId)
        .then((result) => setUser(result.data.data));
    }
  }, []);

  //INTIAL VALUES
  useEffect(() => {
    const airportService = new AirportService();
    airportService
      .getAirportsRandom()
      .then((res) => setAirports(res.data.data.content));
    airportService
      .getAirportsRandom()
      .then((res) => setAirports2(res.data.data.content));
  }, []);

  //GET AIRPORTS PICUPINPUT VALUE
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

  //GET AİRPORTS DROPOFFINPUT VALUE
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

  //FILTERED AIRPORTNAME1
  let filteredAirports = airports.filter((airport) => {
    let filteredAirport =
      airport.name
        .toLowerCase()
        .indexOf(pickUpInputValue.toLocaleLowerCase()) !== -1;
    return filteredAirport;
  });

  //FILTERED AIRPORTNAME2
  let filteredAirports2 = airports2.filter((airport) => {
    let filteredAirport2 =
      airport.name
        .toLowerCase()
        .indexOf(dropOffInputValue.toLocaleLowerCase()) !== -1;
    return filteredAirport2;
  });

  // USER EFFECT
  useEffect(() => {
    if (haveDefaultValue) {
      setDateValue(moment().add(8, "day"));
      setPickUpInputValue(pickUpInputValue);
      setDropOffInputValue(dropOffInputValue);
    }
  }, []);

  //SET IS SELECTED AİRPORT
  useEffect(() => {
    setIsSelectedPickUpInputValue(
      airports.filter((airport) => airport.name === pickUpInputValue).length > 0
    );
  }, [pickUpInputValue]);

  //SET IS SELECTED AİRPORT2
  useEffect(() => {
    setIsSelectedDropOffInputValue(
      airports2.filter((airport) => airport.name === dropOffInputValue).length >
        0
    );
  }, [dropOffInputValue]);

  //SET AIRPORT BY AIRPORT NAME
  useEffect(() => {
    if (isSelectedPickUpInputValue) {
      const airportService = new AirportService();
      airportService.getAirportByName(pickUpInputValue).then((res) => {
    
        if (res.data.data) {
          setPickUpAirport(res.data.data);
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
        }
      });
    }
  }, [dropOffInputValue, isSelectedDropOffInputValue]);

  //HANDLE BID
  const handleClickBid = (e) => {
    e?.preventDefault();
    setLoading(true);
    let minStartDate = moment().add(6, "days");
    if (!isSelectedPickUpInputValue) {
      Swal.fire({
        title: t("flightSearchForm1"),
        text: t("flightSearchForm2"),
        icon: "error",
      });
      setLoading(false);
    } else if (!isSelectedDropOffInputValue) {
      Swal.fire({
        title: t("flightSearchForm1"),
        text: t("flightSearchForm3"),
        icon: "error",
      });
      setLoading(false);
    } else if (userId === null) {
      Swal.fire({
        title: t("flightSearchForm1"),
        text: t("flightSearchForm4"),
        icon: "error",
      }).then(function () {
        router.push("/login");
      });
    } else if (pickUpInputValue === dropOffInputValue) {
      Swal.fire({
        title: t("flightSearchForm1"),
        text: t("flightSearchForm5"),
        icon: "error",
      }).then(function () {
        setLoading(false);
      });
    }
    else if (pickUpAirport.city?.name === dropOffAirport.city?.name) {
      Swal.fire({
        title: t("flightSearchForm1"),
        text: t("flightSearchForm5"),
        icon: "error",
      }).then(function () {
        setLoading(false);
      });
    } else if (minStartDate.isAfter(dateValue)) {
      Swal.fire({
        title: t("flightSearchForm1"),
        text: t("flightSearchForm6"),
        icon: "error",
      });
    } else if (user.offerPiece < 1) {
      Swal.fire({
        title: t("flightSearchForm1"),
        text: t("flightSearchForm7"),
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
        title: t("flightSearchForm1"),
        text: t("flightSearchForm8"),
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
        title: t("flightSearchForm1"),
        text: t("flightSearchForm9"),
        icon: "error",
      });
    } else {
      const form = {
        numberOfGuest: guests,
        takeOffDate: dateValue,
        offerAmount: offerAmount,
        flyingFromAirportId: pickUpAirport.id,
        flyingToAirportId: dropOffAirport.id,
        offerStatusId: 1,
        userId: userId,
        currencyName: secureLocalStorage.getItem("currencyName"),
        currencyIcon: secureLocalStorage.getItem("currencyIcon"),
      };
      let flightOfferService = new FlightOfferService();
      flightOfferService.addFlightOffer(form).then((res) => {
        if (res?.data?.message === "true") {
          if (router.pathname === "/flight-bids") {
            setIsBidDataChanged(!isBidDataChanged);
            Swal.fire({
              title: t("flightSearchForm10"),
              text: t("flightSearchForm11"),
              icon: "success",
              confirmButtonText: t("flightSearchForm12"),
            });
            setLoading(false);
          } else {
            Swal.fire({
              title: t("flightSearchForm10"),
              text: t("flightSearchForm11"),
              icon: "success",
              confirmButtonText: t("flightSearchForm12"),
            });
            setLoading(false);
          }
        }
        else if (res?.response.status === 401) {
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
  const dropDownData = filteredAirports.filter((_, i) => i < 7);
  const dropDownData2 = filteredAirports2.filter((_, i) => i < 7);

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
                <span>{`${guests} ${t("flightSearchForm13")}`}</span>
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
                        max={20}
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
          {t("flightSearchForm14")}
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
                placeHolder={t("flightSearchForm15")}
                desc={t("flightSearchForm16")}
              />
              <LocationInput
                defaultValue={dropOffInputValue}
                dropDownData={dropDownData2}
                onChange={(e) => setDropOffInputValue(e)}
                onInputDone={() => setDateFocused(true)}
                placeHolder={t("flightSearchForm17")}
                desc={t("flightSearchForm18")}
                autoFocus={fieldFocused === "dropOffInput"}
              />
            </div>
            <div className="flex-shrink-0">
              <FlightDateSingleInput
                defaultValue={dateValue}
                onChange={(date) => setDateValue(date)}
                defaultFocus={dateFocused}
                onFocusChange={(focus) => {
                  setDateFocused(focus);
                }}
              />
            </div>

            <div className="flex-shrink-0">
              <BidInput
                defaultValue={offerAmount}
                onChange={(e) => setOfferAmount(e)}
                onInputDone={() => setDateFocused(true)}
                placeHolder={t("flightSearchForm19")}
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

export default FlightSearchForm;

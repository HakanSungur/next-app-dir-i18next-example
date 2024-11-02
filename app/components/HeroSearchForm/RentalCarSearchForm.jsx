import 'react-dates/lib/initialize.js';
import "react-dates/lib/css/_datepicker.css";
import React,{ useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import LocationInput2 from "./LocationInput2";
import RentalCarDatesRangeInput from "./RentalCarDatesRangeInput";
import CarButtonSubmit from "./CarButtonSubmit";
import moment from "moment";
import CityService from "../../services/CityService";
import AirportService from "../../services/AirportService";
import Swal from "sweetalert2";
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";

const RentalCarSearchForm = ({ haveDefaultValue }) => {
  const [dateRangeValue, setDateRangeValue] = useState({
    startDate: moment().add(7, "days"),
    endDate: moment().add(11, "days"),
  });
  const [timeRangeValue, setTimeRangeValue] = useState({
    startTime: "10:00",
    endTime: "10:00",
  });
  const { t,i18n } = useTranslation();
  const [pickUpInputValue, setPickUpInputValue] = useState("");
  const [dropOffInputValue, setDropOffInputValue] = useState("");
  const [fieldFocused, setFieldFocused] = useState(null);
  const [dropOffLocationType, setDropOffLocationType] = useState("same");
  const [cities, setCities] = useState([]);
  const [cities2, setCities2] = useState([]);
  const [airports, setAirports] = useState([]);
  const [airports2, setAirports2] = useState([]);
  const router = useRouter();
  const [isSelectedPickUpInputValue, setIsSelectedPickUpInputValue] =
    useState(false);
  const [isSelectedDropOffInputValue, setIsSelectedDropOffInputValue] =
    useState(false);
  const [pathName, setPathName] = useState("/cars")
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");

    useEffect(() => {
      if(router.pathname==="/cars-map"){
        setPathName(router.pathname)
      }
    }, [])

  //AIRPORTS
  useEffect(() => {
    const airportService = new AirportService();
    if (pickUpInputValue === "" && pickUpInputValue.length < 1) {
      airportService.getAirportsRandom().then((res) => {
        setAirports(res.data.data.content);
      });
    } else if (pickUpInputValue !== "" && pickUpInputValue.length > 1) {
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

  //AIRPORTS2
  useEffect(() => {
    const airportService = new AirportService();
    if (
      dropOffInputValue === "" &&
      dropOffInputValue.length < 1 &&
      dropOffLocationType !== "same"
    ) {
      airportService
        .getAirportsRandom()
        .then((result) => setAirports2(result.data.data.content));
    } else if (dropOffInputValue !== "" && dropOffInputValue.length > 1) {
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
  }, [dropOffInputValue, dropOffLocationType]);

  //CITIES
  useEffect(() => {
    const cityService = new CityService();
    if (pickUpInputValue === "" && pickUpInputValue.length < 1) {
      cityService.getCitiesRandom().then((res) => {
        setCities(res.data.data.content);
      });
    } else if (pickUpInputValue !== "" && pickUpInputValue.length > 1) {
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
  
  //CİTİES2
  useEffect(() => {
    const cityService = new CityService();
    if (
      dropOffInputValue === "" &&
      dropOffInputValue.length < 1 &&
      dropOffLocationType !== "same"
    ) {
      cityService
        .getCitiesRandom()
        .then((result) => setCities2(result.data.data.content));
    } else if (dropOffInputValue !== "" && dropOffInputValue.length > 1) {
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
  }, [dropOffInputValue, dropOffLocationType]);

  let airportsAndCities = airports.concat(cities);
  let airportsAndCities2 = airports2.concat(cities2);

  //FILTERED CITYORAIRPORTNAME
  let filteredAirportAndCities = airportsAndCities.filter((airportOrCity) => {
    let filteredAirportOrCity =
      airportOrCity.name
        .toLowerCase()
        .indexOf(pickUpInputValue.toLocaleLowerCase()) !== -1;

    return filteredAirportOrCity;
  });

  //FILTERED CITYORAIRPORTNAME
  let filteredAirportAndCities2 = airportsAndCities2.filter((airportOrCity) => {
    let filteredAirportOrCity2 =
      airportOrCity.name
        .toLowerCase()
        .indexOf(dropOffInputValue.toLocaleLowerCase()) !== -1;
    return filteredAirportOrCity2;
  });

  // USE EFFECT
  useEffect(() => {
    if (!haveDefaultValue) {
      setDateRangeValue({
        startDate: moment().add(7, "days"),
        endDate: moment().add(11, "days"),
      });
      setPickUpInputValue("");
      setDropOffInputValue("");
    }
  }, []);

  //DROPDAWN DATA COUNT
  const dropDownData = filteredAirportAndCities.filter((_, i) => i < 7);
  const dropDownData2 = filteredAirportAndCities2.filter((_, i) => i < 7);

  useEffect(() => {
    setIsSelectedPickUpInputValue(
      airportsAndCities.filter((airCity) => airCity.name === pickUpInputValue)
        .length > 0
    );
  }, [pickUpInputValue,airportsAndCities]);

  useEffect(() => {
    setIsSelectedDropOffInputValue(
      airportsAndCities2.filter((airCity) => airCity.name === dropOffInputValue)
        .length > 0
    );
  }, [dropOffInputValue,airportsAndCities2]);

  useEffect(() => {
    if (dateRangeValue.startDate) {
      setFormattedStartDate(
        moment(dateRangeValue.startDate).format("YYYY-MM-DD")
      );
    }
  }, [dateRangeValue.startDate]);

  useEffect(() => {
    if (dateRangeValue.endDate) {
      setFormattedEndDate(
        moment(dateRangeValue.endDate).format("YYYY-MM-DD")
      );
    }
  }, [dateRangeValue.endDate]);

  //HANDLE CLICK
  const handleClick = (e) => {
    e.preventDefault();
    if (
      dropOffLocationType === "same" &&
      dropOffLocationType !== "different" &&
      !isSelectedPickUpInputValue
    ) {
      Swal.fire({
        title: t("rentalCarSearchForm1"),
        text: t("rentalCarSearchForm2"),
        icon: "error",
      });
    } else if (
      dropOffLocationType === "same" &&
      dropOffLocationType !== "different" &&
      isSelectedPickUpInputValue
    ) {
      router.push(
        `${pathName}?pickUpInputValue=${pickUpInputValue}&dropOffInputValue=${dropOffInputValue}&startDate=${formattedStartDate}&endDate=${formattedEndDate}&startTime=${timeRangeValue?.startTime}&endTime=${timeRangeValue?.endTime}&dropOffLocationType=${dropOffLocationType}`
      );
    }

    if (
      dropOffLocationType !== "same" &&
      dropOffLocationType === "different" &&
      (!isSelectedPickUpInputValue || !isSelectedDropOffInputValue)
    ) {
      Swal.fire({
        title: t("rentalCarSearchForm1"),
        text: t("rentalCarSearchForm2"),
        icon: "error",
      });
    } else if (
      dropOffLocationType !== "same" &&
      dropOffLocationType === "different" &&
      isSelectedPickUpInputValue &&
      isSelectedDropOffInputValue
    ) {
      router.push(
        `/${pathName}?pickUpInputValue=${pickUpInputValue}&dropOffInputValue=${dropOffInputValue}&startDate=${dateRangeValue?.startDate}&endDate=${dateRangeValue?.endDate}&startTime=${timeRangeValue?.startTime}&endTime=${timeRangeValue?.endTime}&dropOffLocationType=${dropOffLocationType}`
      );
    }
  };

  const renderRadioBtn = () => {
    return (
      <div className=" py-5 [ nc-hero-field-padding ] flex items-center flex-wrap flex-row border-b border-neutral-100 dark:border-neutral-800">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-4 ${
            dropOffLocationType === "same"
              ? "bg-black text-white shadow-black/10 shadow-lg"
              : "border border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("same")}
        >
          {t("rentalCarSearchForm3")}
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-4 ${
            dropOffLocationType === "different"
              ? "bg-black text-white shadow-black/10 shadow-lg"
              : "border border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("different")}
        >
          {t("rentalCarSearchForm4")}
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="w-full">
       <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": `https://vacbid.com/${i18n.language}`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `/cars?locationInputValue={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }) }}
    />
        <form className="w-full relative mt-8 rounded-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900">
          {renderRadioBtn()}
          <div className=" flex flex-col md:flex-row md:items-center w-full rounded-full [ nc-divide-field ] ">
            <div className="relative flex flex-col md:flex-row flex-grow [ nc-divide-field ] ">
              <LocationInput
                dropDownData={dropDownData}
                defaultValue={pickUpInputValue}
                onChange={(e) => {
                  setPickUpInputValue(e);
                }}
                onInputDone={() =>
                  setFieldFocused(
                    dropOffLocationType === "different"
                      ? "dropOffInput"
                      : "startDate"
                  )
                }
                placeHolder={t("rentalCarSearchForm5")}
                desc={t("rentalCarSearchForm6")}
              />
              {dropOffLocationType === "different" && (
                <LocationInput2
                  dropDownData2={dropDownData2}
                  defaultValue={dropOffInputValue}
                  onChange={(e) => setDropOffInputValue(e)}
                  onInputDone={() => setFieldFocused("startDate")}
                  placeHolder={t("rentalCarSearchForm5")}
                  desc={t("rentalCarSearchForm7")}
                  autoFocus={fieldFocused === "dropOffInput"}
                />
              )}
            </div>
            <RentalCarDatesRangeInput
              defaultDateValue={dateRangeValue}
              defaultTimeValue={timeRangeValue}
              defaultFocus={
                fieldFocused === "dropOffInput" ? null : fieldFocused
              }
              onFocusChange={(focus) => setFieldFocused(focus)}
              onChange={(data) => {
                setDateRangeValue(data.stateDate);
                setTimeRangeValue(data.stateTimeRage);
              }}
            />

            {/* BUTTON SUBMIT OF FORM */}
            <div className="px-4 py-3">
              <CarButtonSubmit onClick={handleClick} />
            </div>
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default RentalCarSearchForm;

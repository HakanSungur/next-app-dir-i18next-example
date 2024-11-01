"use client"
import 'react-dates/lib/initialize.js';
import React,{ useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import StayDatesRangeInput from "./StayDatesRangeInput";
import ButtonSubmit from "./ButtonSubmit";
import CityService from "../../services/CityService";
import CountryService from "../../services/CountryService";
import HotelService from "../../services/HotelService";
import RegionService from "../../services/RegionService";
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from "../../i18n/client";
import moment from "moment";

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "";
const defaultDateRange = {
  //startDate: moment().add(7, "days"),
  //endDate: moment().add(11, "days"),
  startDate: null,
  endDate: null,
};

const defaultGuestValue = {
  guestAdults: 2,
  guestChildren: 0,
  guestInfants: 0,
};

const StaySearchForm = ({ haveDefaultValue = false, lng }) => {
  const [dateRangeValue, setDateRangeValue] = useState(defaultDateRange);
  const [locationInputValue, setLocationInputValue] = useState("");
  const [guestValue, setGuestValue] = useState(defaultGuestValue);
  const [dateFocused, setDateFocused] = useState(null);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [stays, setStays] = useState([]);
  const [concatenatedData, setConcanetedData] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const [pathName, setPathName] = useState("/stays");
  const { t } = useTranslation(lng);
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");


  useEffect(() => {
    if (router.pathname === "/stays-map") {
      setPathName(router.pathname);
    }
  }, []);


  //CITIES
  useEffect(() => {
    const cityService = new CityService();
    if (locationInputValue !== "" && locationInputValue.length > 1) {
      cityService
        .getCitiesForSearchStartingWith(locationInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setCities(res.data.data);
          } else {
            cityService
              .getCitiesForSearchContaining(locationInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setCities(res.data.data);
                }
              });
          }
        });
    }
  }, [locationInputValue]);

  //INITIAL VALUES
  useEffect(() => {
    const countryService = new CountryService();
    countryService.getTenCountriesRandom().then((res) => {
      setCountries(res.data.data?.content);
    });
    const cityService = new CityService();
    cityService
      .getCitiesRandom()
      .then((res) => setCities(res.data.data?.content));
    const hotelService = new HotelService();
    hotelService
      .getHotelsRandom()
      .then((res) => setStays(res.data.data?.content));
  }, []);

  //COUNTRIES
  useEffect(() => {
    const countryService = new CountryService();
    if (locationInputValue !== "" && locationInputValue.length > 1) {
      countryService
        .getCountriesForSearchStartingWith(locationInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setCountries(res.data.data);
          } else {
            countryService
              .getCountriesForSearch(locationInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setCountries(res.data.data);
                }
              });
          }
        });
    }
  }, [locationInputValue]);

  //HOTELS
  useEffect(() => {
    const hotelService = new HotelService();
    if (locationInputValue !== "" && locationInputValue.length > 1) {
      hotelService
        .getHotelsForSearchStartingWith(locationInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setStays(res.data.data);
          } else {
            hotelService
              .getHotelsForSearchContaining(locationInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setStays(res.data.data);
                }
              });
          }
        });
    }
  }, [locationInputValue]);

  //REGİONS
  useEffect(() => {
    const regionService = new RegionService();
    if (locationInputValue !== "" && locationInputValue.length > 1) {
      regionService
        .getRegionsForSearchStartingWith(locationInputValue)
        .then((res) => {
          if (res.data.message !== "false" && res.data.data !== null) {
            setRegions(res.data.data);
          } else {
            regionService
              .getRegionsForSearchContaining(locationInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setRegions(res.data.data);
                }
              });
          }
        });
    }
  }, [locationInputValue]);

  useEffect(() => {
    setConcanetedData(countries?.concat(cities, stays, regions));
  }, [countries, cities, stays, regions]);

  //FILTERED CITYORCOUNTRYNAMEORHOTELNAME
  let filteredData = concatenatedData?.filter((countryOrCityOrHotel) => {
    let filteredcountryOrCityOrHotel =
      countryOrCityOrHotel?.name
        ?.toLowerCase()
        .indexOf(locationInputValue.toLocaleLowerCase()) !== -1;

    return filteredcountryOrCityOrHotel;
  });

  //DROPDAWN DATA COUNT
  const dropDownData = filteredData?.filter((_, i) => i < 300);

  //
  useEffect(() => {
    if (haveDefaultValue) {
      setDateRangeValue(defaultDateRange);
      setLocationInputValue(defaultLocationValue);
      setGuestValue(defaultGuestValue);
    }
  }, []);

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


  const renderForm = () => {
    return (
      <div>
      <form className="w-full relative mt-8 flex flex-col md:flex-row md:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700 md:divide-y-0">
        <LocationInput
          dropDownData={dropDownData}
          defaultValue={locationInputValue}
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused("startDate")}
          placeHolder={t("staySearchForm1")}
          desc={t("staySearchForm2")}
        />
        <StayDatesRangeInput className="flex-1" defaultValue={dateRangeValue}
          defaultFocus={dateFocused}
          onFocusChange={(focus) => setDateFocused(focus)}
          onChange={(data) => setDateRangeValue(data)} />
        {/* <StayDatesRangeInput
          defaultValue={dateRangeValue}
          defaultFocus={dateFocused}
          onFocusChange={(focus) => setDateFocused(focus)}
          onChange={(data) => setDateRangeValue(data)}
        /> */}
        <GuestsInput
          defaultValue={guestValue}
          onChange={(data) => setGuestValue(data)}
        />
        {/* BUTTON SUBMIT OF FORM */}
        <div className="px-4 py-4 lg:py-0">
          <ButtonSubmit
            href={`/hotels?locationInputValue=${locationInputValue}&startDate=${formattedStartDate}&endDate=${formattedEndDate}&guestAdults=${guestValue.guestAdults}&guestChildren=${guestValue.guestChildren}&guestInfants=${guestValue.guestInfants}`}
          />
        </div>
      </form></div>
    );
  };

  return renderForm();
};

export default StaySearchForm;

import 'react-dates/lib/initialize.js';
import { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";
import ButtonSubmit from "./ButtonSubmit";
import moment from "moment";
import CityService from "../../services/CityService";
import CountryService from "../../services/CountryService";
import ExperienceService from "../../services/ExperienceService";
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "";
const defaultDate = moment().add(7, "days");
const defaultGuestValue = {
  guestAdults: 2,
  guestChildren: 0,
  guestInfants: 0,
};

const ExperiencesSearchForm = ({ haveDefaultValue }) => {
  const [dateValue, setdateValue] = useState(moment().add(7, "days"));
  const [locationInputValue, setLocationInputValue] = useState("");
  const [guestValue, setGuestValue] = useState({
    guestAdults: 2,
    guestChildren: 0,
    guestInfants: 0,
  });
  const { t,i18n } = useTranslation();
  const [dateFocused, setDateFocused] = useState(false);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [concatenatedData, setConcanetedData] = useState([]);
  let router = useRouter();
  const [pathName, setPathName] = useState("/experiences");

  useEffect(() => {
    if (router.pathname === "/experiences-map") {
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

  //EXPERIENCES
  useEffect(() => {
    const experienceService = new ExperienceService();
    if (locationInputValue !== "" && locationInputValue.length > 1) {
      experienceService
        .getExperiencesForSearchStartingWith(locationInputValue)
        .then((res) => {
          if (res.data.message !== "false") {
            setExperiences(res.data.data);
          } else {
            experienceService
              .getExperiencesForSearchContaining(locationInputValue)
              .then((res) => {
                if (res.data.message !== "false") {
                  setExperiences(res.data.data);
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
      setCountries(res.data.data.content);
    });
    const cityService = new CityService();
    cityService
      .getCitiesRandom()
      .then((res) => setCities(res.data.data.content));
    const experienceService = new ExperienceService();
    experienceService
      .getExperiencesRandom()
      .then((res) => setExperiences(res.data.data.content));
  }, []);

  useEffect(() => {
    setConcanetedData(countries.concat(cities, experiences));
  }, [countries, cities, experiences]);

  //FILTERED CITYORCOUNTRYNAME
  let filteredCountriesAndCities = concatenatedData?.filter((countryOrCity) => {
    let filteredcountryOrCity =
      countryOrCity?.name
        .toLowerCase()
        .indexOf(locationInputValue.toLocaleLowerCase()) !== -1;

    return filteredcountryOrCity;
  });

  //DROPDAWN DATA COUNT
  const dropDownData = filteredCountriesAndCities.filter((_, i) => i < 12);

  useEffect(() => {
    if (haveDefaultValue) {
      setdateValue(defaultDate);
      setLocationInputValue(defaultLocationValue);
      setGuestValue(defaultGuestValue);
    }
  }, []);

  //

  const renderForm = () => {
    return (
      <div>
        <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": `https://vacbid.com/${i18n.language}`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `/experiences?locationInputValue={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }) }}
    />
      
      <form className="w-full relative mt-8 flex flex-col md:flex-row md:items-center rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700  md:divide-y-0">
        <LocationInput
          placeHolder={t("experienceSearchForm1")}
          desc={t("experienceSearchForm2")}
          dropDownData={dropDownData}
          defaultValue={locationInputValue}
          filteredCountriesAndCities={filteredCountriesAndCities}
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused(true)}
        />

        <ExperiencesDateSingleInput
          defaultValue={dateValue}
          onChange={(date) => setdateValue(date)}
          defaultFocus={dateFocused}
          onFocusChange={(focus) => {
            setDateFocused(focus);
          }}
        />

        <GuestsInput
          defaultValue={guestValue}
          onChange={(data) => setGuestValue(data)}
        />
        {/* BUTTON SUBMIT OF FORM */}
        <div className="px-4 py-4 lg:py-0">
          <ButtonSubmit
            to={`${pathName}?locationInputValue=${locationInputValue}&dateValue=${dateValue}&guestAdults=${guestValue?.guestAdults}&guestChildren=${guestValue?.guestChildren}&guestInfants=${guestValue?.guestInfants}`}
          />
        </div>
      </form>
      </div>
    );
  };

  return renderForm();
};

export default ExperiencesSearchForm;

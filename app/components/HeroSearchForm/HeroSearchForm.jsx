"use client"
import React,{ useState} from "react";
import StaySearchForm from "./StaySearchForm";
import ExperiencesSearchForm from "./(experiences-search-form)/ExperiencesSearchForm";
import RentalCarSearchForm from "./(car-search-form)/RentalCarSearchForm";
import FlightSearchForm from "./(flight-search-form)/FlightSearchForm";
import BussesSearchForm from "./(bus-search-form)/BusSearchForm";
import { useTranslation } from "../../i18n/client";


const HeroSearchForm = ({
  className = "",
  currentTab = "Stays",
  currentPage,
  isBidDataChanged,
  setIsBidDataChanged,
  isBusBidDataChanged,
  setIsBusBidDataChanged,
  lng
}) => {
  const {t}=useTranslation(lng);
  console.log(lng);

  const tabs = [
    {
      id: "Stays",
      name: t("heroSearchForm1"),
    },
    {
      id: "Experiences",
      name: t("heroSearchForm2"),
    },
    {
      id: "Cars",
      name: t("heroSearchForm3"),
    },
    {
      id: "Flights",
      name: t("heroSearchForm4"),
    },
    {
      id: "Busses & Transfers",
      name: t("heroSearchForm5"),
    },
  ];
  const [tabActive, setTabActive] = useState(currentTab);

  const renderTab = () => {

    return (
      <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-7 overflow-x-auto hiddenScrollbar">
        {tabs.map((tab) => {
          const active = tab.id === tabActive;
          return (
            <li
              onClick={() => setTabActive(tab.id)}
              className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium ${
                active
                  ? ""
                  : "text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-500"
              } `}
              key={tab.id}
            >
              {active && (
                <span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
              )}
              <span>{tab.name}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderForm = () => {
    // if (!isRendered) return null;
    const isArchivePage = !!currentPage && !!currentTab;
    
    switch (tabActive) {
      case "Stays":
        return <StaySearchForm haveDefaultValue={isArchivePage} lng={lng} />
      case "Experiences":
        return <ExperiencesSearchForm haveDefaultValue={isArchivePage} />;
      case "Cars":
        return <RentalCarSearchForm haveDefaultValue={isArchivePage} />;
      case "Flights":
        return (
          <FlightSearchForm
            haveDefaultValue={isArchivePage}
            isBidDataChanged={isBidDataChanged}
            setIsBidDataChanged={setIsBidDataChanged}
          />
        );
      case "Busses & Transfers":
        return (
          <BussesSearchForm
            haveDefaultValue={isArchivePage}
            isBusBidDataChanged={isBusBidDataChanged}
            setIsBusBidDataChanged={setIsBusBidDataChanged}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
      data-nc-id="HeroSearchForm"
    >
      {renderTab()}
      {renderForm()}
    </div>
  );
};

export default HeroSearchForm;

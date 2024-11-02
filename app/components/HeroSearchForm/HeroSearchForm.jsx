"use client"
import React,{ useLayoutEffect, useState} from "react";
import StaySearchForm from "./StaySearchForm";
import { useTranslation } from "../../i18n/client";
import moment from "moment";

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
  const {t}=useTranslation();
console.log(lng)
  useLayoutEffect(() => {
    const loadLocale = async () => {
      try {
        // Dil kodunu basit hale getir (örn. 'en-US' => 'en')
        const locale = lng.split('-')[0];
        // Dinamik olarak locale dosyasını yükle
        await import(`moment/locale/${locale}`);
        
        // Moment'in locale'ini ayarla
        moment.locale(locale);
      } catch (error) {
        
        // Hata olursa varsayılan dil İngilizce olsun
        moment.locale('en');
      }
    };
  
    // Locale'i yüklemek için async fonksiyonu çağır
    loadLocale();
  }, []);
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
        return <StaySearchForm haveDefaultValue={isArchivePage} lng={lng}  />;
     

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


import HeroSearchForm from "../HeroSearchForm/HeroSearchForm";
import { useTranslation } from "../../i18n/index";

const SectionHero = async({ className = "", lng }) => {
  const { t } = await useTranslation(lng);

  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h1 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            {t("sectionHero1")}
          </h1>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            {t("sectionHero2")}
          </span>

    
        </div>
        <div className="flex-grow">

        </div>
      </div>

      <div id="search" className="z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm lng={lng}/>
      </div>
    </div>
  );
};

export default SectionHero;

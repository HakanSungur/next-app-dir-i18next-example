import { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import ButtonSubmit from "./ButtonSubmit";
import PropertyTypeSelect from "./PropertyTypeSelect";
import PriceRangeInput from "./PriceRangeInput";


// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";

const RealEstateSearchForm = ({
  haveDefaultValue = false,
}) => {
  const [locationInputValue, setLocationInputValue] = useState("");

  //
  useEffect(() => {
    if (haveDefaultValue) {
      setLocationInputValue(defaultLocationValue);
    }
  }, []);
  //

  const renderForm = () => {
    return (
      <form className="w-full relative xl:mt-8 flex flex-col lg:flex-row lg:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
        <LocationInput
          defaultValue={locationInputValue}
          onChange={(e) => setLocationInputValue(e)}
        />

        <PropertyTypeSelect />
        <PriceRangeInput />
        {/* BUTTON SUBMIT OF FORM */}
        <div className="px-4 py-4 lg:py-0">
          <ButtonSubmit />
        </div>
      </form>
    );
  };

  return renderForm();
};

export default RealEstateSearchForm;

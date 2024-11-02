"use client"
import { useRouter } from 'next/navigation';
import { useTranslation } from "../../i18n/client";



const StaySearchForm = ({ haveDefaultValue = false, lng }) => {

  const router = useRouter();
  const { t } = useTranslation(lng);

 
  const renderForm = () => {
    return (
      <div>
      <form className="w-full relative mt-8 flex flex-col md:flex-row md:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700 md:divide-y-0">
       
       
       
      </form></div>
    );
  };

  return renderForm();
};

export default StaySearchForm;

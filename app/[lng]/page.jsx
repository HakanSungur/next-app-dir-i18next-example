
import { useTranslation } from "../../app/i18n/index";
import SectionHero from "../components/SectionHero/SectionHero";

const PageHome = async ({ params: { lng } }) => {

  const {t} = await useTranslation(lng);

  return (
    <div className="nc-PageHome relative overflow-hidden">


      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" lng={lng} />

        {/* SECTION 1 */}
       


        

     


       

   

      </div>
    </div>
  );
};

export default PageHome;

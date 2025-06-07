import Divider from "@/components/ui/Divider";
import Intro from "@/sections/intro/Intro";
import Services from "@/components/view/service/components/Services";
import { useTranslations } from "next-intl";
import { ServiceProvider } from "@/components/view/service/context/ServiceContext";
import PricingList from "@/components/view/pricing/components/PricingList";
import { pricingLists } from "@/mock/pricing";
import ServiceSection from "@/sections/services/ServiceSection";
import { mainServices, makeups, massages } from "@/mock/services";

export default function HomePage() {
  const t = useTranslations();
  return (
    <main className="max-w-7xl mx-auto">
      <Intro
        header={t("heading.intro")}
        description={t("text.intro")}
        actionBtn={t("button.makeAppointment")}
        infoBtn={t("button.findOutMore")}
      />
      <Divider />

      <ServiceProvider
        services={mainServices}
        serviceVariants={[...makeups, ...massages]}
      >
        <ServiceSection />
        <h2 className="text-center text-[34px] font-semibold" id="cennik">
          Cennik usług
        </h2>

        <Services />
      </ServiceProvider>

      <section>
        {pricingLists.map((list, index) => (
          <PricingList list={list} key={index} />
        ))}
      </section>
    </main>
  );
}

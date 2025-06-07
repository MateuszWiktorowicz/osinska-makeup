"use client";
import ServiceCard from "@/components/view/service/components/ServiceCard";
import { useService } from "../context/ServiceContext";
import { Slider } from "@/components/ui/sliders";
export default function Services() {
  const { serviceVariants, activeServiceVariant } = useService();

  return (
    <section className="flex gap-3 flex-wrap my-5 py-5">
      <div className="w-full">
        <Slider
          itemsToShow={{
            xxl: 4,
            xl: 3,
            lg: 2,
            md: 1,
            sm: 1,
            s: 1,
          }}
          showDots
          childClassName="my-10"
        >
          {serviceVariants?.map((service, index) => (
            <ServiceCard activeServiceVariant={service} key={index} />
          ))}
        </Slider>
      </div>
      <div className="border border-primary rounded-[10px] p-4">
        <h3 className="text-[24px] mb-3 font-medium">
          {activeServiceVariant?.title}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: activeServiceVariant?.description ?? "",
          }}
        />
      </div>
    </section>
  );
}

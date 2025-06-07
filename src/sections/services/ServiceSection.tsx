"use client";
import { iconMap } from "@/assets/icons";
import { Heading } from "@/components/ui/Heading/Heading";
import { useService } from "@/components/view/service/context/ServiceContext";

function getRoundedClass(index: number, total: number) {
  if (index === 0) {
    return "rounded-tl-[10px]";
  } else if (index === total - 1) {
    return "rounded-tr-[10px]";
  } else {
    return "";
  }
}

export default function ServiceSection() {
  const { activeService, services, setActiveService } = useService();
  return (
    <section>
      <Heading level={2}>
        Usługi prowadzone w Osińska Studio
      </Heading>
      <p className="my-2">
        W Osińska Studio tworzę przestrzeń, w której każda kobieta może poczuć
        się piękna, zadbana i zaopiekowana. Specjalizuję się w makijażu
        profesjonalnym oraz w japońskim masażu Kobido – połączeniu relaksu i
        naturalnego liftingu. Pracuję z pasją i pełnym zaangażowaniem, bo wiem,
        jak ważne są te chwile tylko dla Ciebie.
      </p>
      <div className="flex border border-primary rounded-t-[10px] mt-5">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <button
              key={index}
              className={`
    flex-1 flex justify-center cursor-pointer
    transition-transform duration-300 group
    ${service === activeService ? "border border-primary bg-primary/10" : ""}
    ${getRoundedClass(index, services.length)}
  `}
              onClick={() => setActiveService(service)}
            >
              <Icon
                className={`w-[250px] h-[250px] ${service === activeService ? "text-primary" : "group-hover:text-primary text-gray-400"}`}
              />
            </button>
          );
        })}
      </div>
      <div
        className="border-x border-b border-primary rounded-b-[10px] p-4"
        dangerouslySetInnerHTML={{ __html: activeService?.description ?? "" }}
      />

      <div>
        <p></p>
      </div>
    </section>
  );
}

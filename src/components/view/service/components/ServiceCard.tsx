import { ServiceVariant } from "@/@types/objects/service/service";
import { useService } from "../context/ServiceContext";
import { ClockIcon, WalletIcon } from "lucide-react";

export default function ServiceCard({
  activeServiceVariant,
  className = "",
}: {
  activeServiceVariant: ServiceVariant;
  className?: string;
}) {
  const {
    activeServiceVariant: currentActiveVariant,
    setActiveServiceVariant,
  } = useService();

  const isActive = currentActiveVariant?.id === activeServiceVariant.id;

  // Overlay i tekst widoczne jeśli karta jest aktywna lub hover
  const overlayVisible = isActive
    ? "opacity-100"
    : "opacity-0 group-hover:opacity-100";
  const textVisible = isActive
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0";

  return (
    <button
      className={`relative group flex items-between justify-center p-5 border border-accent rounded-[10px] h-[280px] max-w-[280px] overflow-hidden cursor-pointer bg-cover bg-center shadow-[0_4px_20px_rgba(107,76,30,0.4)] ${className}`}
      style={{
        backgroundImage: `url(${activeServiceVariant.image.url})`,
      }}
      aria-label={activeServiceVariant.image.alt}
      onClick={() => setActiveServiceVariant(activeServiceVariant)}
    >
      {/* Overlay on hover or active */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${overlayVisible}`}
      />

      {/* Text content */}
      <div
        className={`relative text-white text-center transition-all duration-300 flex flex-col gap-2 text-sm ${textVisible}`}
      >
        <h2 className="text-lg font-semibold">{activeServiceVariant.title}</h2>
        <h3 className="text-sm">{activeServiceVariant.subtitle}</h3>
        <div className="flex flex-col gap-2 absolute bottom-0 left-0">
          <div className="flex items-center gap-2">
            <span><WalletIcon width={15} height={15}/></span>
            <span>{activeServiceVariant.price} PLN</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <ClockIcon width={15} height={15}/>
            </span>
            <span>{activeServiceVariant.time} minut</span>
          </div>
        </div>
      </div>
    </button>
  );
}

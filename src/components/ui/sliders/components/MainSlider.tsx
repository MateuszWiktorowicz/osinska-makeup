import { useTranslations } from "next-intl";
import Slider from "./Slider";

const slides = [
  {
    image: "/images/main-slider.jpg",
    title: "title-1",
    subtitle: "subtitle-1",
    description: "description-1",
  },
  {
    image: "/images/main-slider.jpg",
    title: "title-1",
    subtitle: "subtitle-1",
    description: "description-1",
  },
  {
    image: "/images/studio-kulinarne.jpeg",
    title: "title-1",
    subtitle: "subtitle-1",
    description: "description-1",
  },
  {
    image: "/images/main-slider.jpg",
    title: "title-1",
    subtitle: "subtitle-1",
    description: "description-1",
  },
  {
    image: "/images/main-slider.jpg",
    title: "title-1",
    subtitle: "subtitle-1",
    description: "description-1",
  },
];

export default function MainSlider({ className = "" }: { className?: string }) {
  const tSlider = useTranslations("MainSlider");

  return (
    <div className={`overflow-hidden ${className}`}>
      <Slider
        itemsToShow={{
          xxl: 1,
          xl: 1,
          lg: 1,
          md: 1,
          sm: 1,
          s: 1,
        }}
        showDots={true}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col w-full items-center justify-center h-[570px] text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-secondary/75 h-full w-full flex flex-col items-center justify-center ml-0 w-full md:items-end md:max-w-[500px] md:ml-auto">
              <h1 className="text-[30px] mb-2 text-center flex flex-col md:pr-10">
                <span className="font-bold">{tSlider(slide.title)}</span>
                <span>{tSlider(slide.subtitle)}</span>
              </h1>
              <p className="text-[20px] text-center md:pr-10">
                {tSlider(slide.description)}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

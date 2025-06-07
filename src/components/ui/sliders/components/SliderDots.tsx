interface SliderDotsProps {
  totalSlides: number;
  currentSlide: number;
}

export default function SliderDots({
  totalSlides,
  currentSlide,
}: SliderDotsProps) {
  return (
    <div className="flex justify-center flex-wrap gap-2 px-5 mt-5 absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            currentSlide === index ? "bg-primary-300" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

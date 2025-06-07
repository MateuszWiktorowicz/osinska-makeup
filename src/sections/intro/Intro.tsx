import Brandmark from "@/assets/icons/Brandmark";
import Button from "@/components/ui/Button";

interface IntroProps {
  header: string;
  description: string;
  actionBtn: string;
  infoBtn: string;
}

export default function Intro({
  header,
  description,
  actionBtn,
  infoBtn,
}: IntroProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col justify-center max-w-xl mb-8 md:mb-0">
        <h1 className="text-[40px] font-bold mb-4">{header}</h1>
        <p className="text-[18px] text-gray-600 mb-6">{description}</p>
        <div className="flex space-x-4">
          <Button>{actionBtn}</Button>
          <Button variant="info">{infoBtn}</Button>
        </div>
      </div>
      <div className="max-w-md">
        <img
          src="/img/intro.jpeg"
          alt="Makijaż i masaż Kobido"
          className="rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
}

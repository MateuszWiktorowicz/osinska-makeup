import Brandmark from "@/assets/icons/Brandmark";

export default function Divider() {
  return (
    <div className="flex items-center justify-center w-full my-8 max-w-7xl mx-auto">
      <div className="flex-grow border-t border-primary"></div>
      <div className="mx-4">
        <Brandmark width="32" height="32" />
      </div>
      <div className="flex-grow border-t border-primary"></div>
    </div>
  );
}

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-primary text-white">
      <div className="text-sm">&copy; 2025 Osińska Makeup Kobido</div>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/iga.wiktorowicz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-5 h-5 hover:text-blue-500" />
        </a>
        <a
          href="https://www.instagram.com/iga.osinska/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-5 h-5 hover:text-pink-500" />
        </a>
      </div>
    </footer>
  );
}

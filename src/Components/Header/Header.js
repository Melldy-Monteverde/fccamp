import "./Header.css";
import { FaFreeCodeCamp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">
        FreeCodeCamp <FaFreeCodeCamp />
      </h1>
    </header>
  );
};
export default Header;

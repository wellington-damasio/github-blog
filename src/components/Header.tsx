import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="relative flex min-h-[16.5rem] flex-col items-center justify-center bg-darkGray-800 before:absolute before:left-0 after:absolute md:before:content-headerPatternLeft md:after:right-0 md:after:content-headerPatternRight">
      <Link to="/">
        <img src={logoSvg} alt="" />
      </Link>
    </header>
  );
};

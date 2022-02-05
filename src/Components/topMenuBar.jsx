import Logo from "../img/SimpleWeatherLogo.png";
import LocalW from "../Components/localWeatherSquare";
import SearchBox from "../Components/searchBox";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import bars from "../img/burger-bar.png";
import "../utilities/menuOptions";

export default function Menu() {
  return (
    <>
      <nav>
        <img className="logo" src={Logo} alt="logo" />
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn" id="menu-toggle">
          <img src={bars} alt="check" className="menubars" />
        </label>
        <ul className="options" id="nav-menu">
          <li>
            <Link to="/localWeatherSquare" className="btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="/searchBox" className="btn">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

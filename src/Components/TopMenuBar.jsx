import Logo from "../img/SimpleWeatherLogo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function TopMenuBar() {
  return (
    <Router>
      <nav>
        <img className="logo" src={Logo} alt="logo" />
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <ul className="options">
          <li>
            <a href="localWeatherSquare" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="searchBox">Search</a>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          {/* <li><Link to="./searchBox" style={{textDecoration:"none"}}>Search</Link></li> */}
        </ul>
      </nav>
    </Router>
  );
}

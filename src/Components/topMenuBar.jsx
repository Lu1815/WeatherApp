import Logo from '../img/SimpleWeatherLogo.png'
import LocalW from '../Components/localWeatherSquare'
import SearchBox from '../Components/searchBox'
import { BrowserRouter as Router, Routes as Switch, Route, NavLink } from 'react-router-dom';
import bars from '../img/burger-bar.png'
import '../utilities/menuOptions'

export default function Menu () {
    return (
        <Router>
        <>
            <nav>
                <img className="logo" src={Logo} alt="logo"/>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn" id="menu-toggle">
                    <img src={bars} alt="check" className="menubars"/>
                </label>
                <ul className="options" id="nav-menu">
                    <li><NavLink to="/localWeatherSquare" className="btn">Home</NavLink></li>
                    <li><NavLink to="/searchBox" className="btn">Search</NavLink></li>
                </ul>
            </nav>

            
          <Switch>
              <Route exact path="/" element={<LocalW />} />
              <Route exact path="/WeatherApp" element={<LocalW />} />
              <Route exact path="/localWeatherSquare" element={<LocalW />} />
              <Route exact path="/searchBox" element={<SearchBox />} />
          </Switch>
        </>
        </Router>
    );
}
import Logo from '../img/SimpleWeatherLogo.png'
import LocalW from '../Components/localWeatherSquare'
import SearchBox from '../Components/searchBox'
import { BrowserRouter as Router, Routes as Switch, Route, NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default function Menu () {
    return (        
        <Router>
            <nav>
                <img className="logo" src={Logo} alt="logo"/>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul className="options">
                    {/* <li><a href="localWeatherSquare" className="active">Home</a></li>
                    <li><a href="searchBox">Search</a></li> */}
                    <li><NavLink to="/localWeatherSquare" className="btn active">Home</NavLink></li>
                    <li><NavLink to="/searchBox" className="btn active">Search</NavLink></li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/localWeatherSquare" element={<LocalW/>}/>
                <Route exact path="/searchBox" element={<SearchBox/>}/>
            </Switch>
        </Router>
    );
}
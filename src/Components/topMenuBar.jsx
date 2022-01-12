import Logo from '../img/SimpleWeatherLogo.png'
// import { Link } from 'react-router-dom';

function Menu () {
    return (        
        <nav>
            <img class="logo" src={Logo} alt="logo"/>
            <input type="checkbox" id="check"/>
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <ul class="options">
                <li><a href="localWeatherSquare" class="active">Home</a></li>
                <li><a href="searchBox">Search</a></li>
                {/* <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li> */}
                {/* <li><Link to="./searchBox" style={{textDecoration:"none"}}>Search</Link></li> */}
            </ul>
        </nav>
    );
}

export default Menu;
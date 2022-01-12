import Menu from './Components/topMenuBar'
import './App.css';
import bg from './img/BgLinearImage.png'
import LocalW from './Components/localWeatherSquare'
import SearchBox from './Components/searchBox'
// import Index from './index.js'
// import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${bg})`}}>
      <header>
        <Menu></Menu>
        <SearchBox/>
        <LocalW></LocalW>
        {/* <Switch>
          <Route exact path="/Components/searchBox" element={<searchBox/>}></Route>
        </Switch> */}
      </header>
    </div>
  );
}

export default App;

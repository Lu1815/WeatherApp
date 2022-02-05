import Menu from "./Components/topMenuBar";
import Footer from "./Components/footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocalW from "./Components/localWeatherSquare";
import SearchBox from "./Components/searchBox";
// import SearchBox from './Components/searchBox'
// import Index from './index.js'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Menu />
        </header>

        <Routes>
          <Route exact path="/" element={<LocalW />} />
          <Route exact path="/WeatherApp" element={<LocalW />} />
          <Route exact path="/localWeatherSquare" element={<LocalW />} />
          <Route exact path="/searchBox" element={<SearchBox />} />
        </Routes>

        <footer></footer>
      </div>
    </Router>
  );
}

export default App;

import TopMenuBar from "./Components/TopMenuBar";
import "./App.css";
import bg from "./img/BgLinearImage.png";
import LocalW from "./Components/localWeatherSquare";
import SearchBox from "./Components/searchBox";

function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <header>
        <TopMenuBar />
        <SearchBox />
      </header>
      <LocalW />
    </div>
  );
}

export default App;

import searchImg from '../img/search.svg'

function SearchBox (){
    return (
        <div className="searchContainer">
            <input className="searchBox" type="text" placeholder="Busca una ciudad"></input>
            <div className="searchBtn" >
                <img src={searchImg} alt="Search"></img>
            </div>
        </div>
    );
}

export default SearchBox;
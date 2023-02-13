import React, { useState } from "react";
import { Routes, Route, Link, useParams ,useLocation} from "react-router-dom";
import "./App.css";
import newsData from "./article/articles.json";


function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(newsData);
  const {state} = useLocation();
  console.log(state.details["preference"])
  const k = Object.keys(newsData.title)
  const [keys,setKeys] = useState(k);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if(event.target.value==="")
    {
      
      setKeys(k)
      return
    }
    
    console.log(event.target.value)
    console.log(event.target.value)
    const someth = keys.filter(
        (key) =>
          newsData.title[key].toLowerCase().indexOf(searchTerm.toLowerCase()) !==
            -1 ||
          newsData.category[key].toLowerCase().indexOf(searchTerm.toLowerCase()) !==
            -1
      )
      console.log('me!',someth)
      const joel = someth.map(key=>{return {}})
      
    setKeys(
      someth
    );
  };

  const handleRecommendClick = () => {
    console.log("Recommend button clicked!");
   
    const someth = keys.filter(
        (key) =>
          newsData.category[key].toLowerCase().indexOf(state.details["preference"]) !==
            -1
      )
      console.log('me!',someth)
      const joel = someth.map(key=>{return {}})
      
    setKeys(
      someth
    );
  };

  console.log(newsData.title[0])
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="recommend-button" onClick={handleRecommendClick}>Recommend Feed</button>
      </header>
      <main className="App-main">
        {keys.map((key,index) => (
          <Link to={`/article/`+key} key={index}>
            <article key={index} className="Article">
              <div className="Article-top">
                <h2 className="Article-title">{newsData.title[key]}</h2>
                <p className="Article-category">{newsData.category[key]}</p>
              </div>
              <div className="Article-bottom">
                {/* <img src={article.image} alt={article.title} /> */}
                <p className="Article-description">{newsData.content[key].slice(0,100)+'...'}</p>
              </div>
            </article>
          </Link>
        ))}
      </main>
      {/* {window.location.pathname.startsWith("/article/") && <Page />} */}
    </div>
  );
}

export default Home;

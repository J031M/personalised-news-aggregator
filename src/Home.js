import React, { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

const newsData = [
  {
    fname: "",
    title: "Article 1",
    category: "Technology",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Article 2",
    category: "Politics",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
  // Add more articles here
];


function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(newsData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredData(
      newsData.filter(
        (article) =>
          article.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
            -1 ||
          article.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
            -1
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>
      <main className="App-main">
        {filteredData.map((article) => (
          <Link to={`/article/${article.title}`} key={article.title}>
            <article key={article.title} className="Article">
              <div className="Article-top">
                <h2 className="Article-title">{article.title}</h2>
                <p className="Article-category">{article.category}</p>
              </div>
              <div className="Article-bottom">
                <img src={article.image} alt={article.title} />
                <p className="Article-description">{article.description}</p>
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

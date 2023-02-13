import React from "react";
import "./NewsArticle.css";
import {useParams} from "react-router-dom";
import newsData from "./articles.json";

function Article1() {
  const{title}=useParams()
  const paragraphs = newsData.content[title].split("\n");
  console.log(title)
  return (
    <div className="news-article-container">
      <h1>{newsData.title[title]}</h1>
      <h3>{newsData.category[title]}</h3>
      {paragraphs.map((paragraph, index) => {
        if(paragraph.includes("Image Credits"))return
        
      return (
      <p key={index}>{paragraph}</p>)
    })}
    </div>
  );
}

export default Article1;

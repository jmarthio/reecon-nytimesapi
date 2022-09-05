import React from "react";
import NewsArticleStyles from "../styles/newsArticle.module.css";
import NewsItem from "./NewsItem";

const NewsArticle = ({ newsArticle }) => {
  return (
    <div className={NewsArticleStyles.grid}>
      {newsArticle.results.map((article) => (
        <React.Fragment key={article.id}>
          <NewsItem article={article} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default NewsArticle;

import NewsArticleStyles from "../styles/newsArticle.module.css";
import NewsItem from "./NewsItem";

const NewsArticle = ({ newsArticle }) => {
  return (
    <div className={NewsArticleStyles.grid}>
      {newsArticle.results.map((article) => (
        <NewsItem article={article} />
      ))}
    </div>
  );
};

export default NewsArticle;

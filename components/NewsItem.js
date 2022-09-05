import Link from "next/link";
import newsArticleStyle from "../styles/newsArticle.module.css";

const NewsItem = (newsArticle) => {
  const selectArticle = () => {
    const jsonString = JSON.stringify(newsArticle);
    localStorage.setItem("selectedArticle", jsonString);
  };
  return (
    <Link
      href="articleDetail/[id]"
      as={`/articleDetail/${newsArticle.article.id}`}
    >
      <a onClick={selectArticle} className={newsArticleStyle.card}>
        <h3>{newsArticle.article.title}</h3>
        <p>{newsArticle.article.abstract}</p>
      </a>
    </Link>
  );
};

export default NewsItem;

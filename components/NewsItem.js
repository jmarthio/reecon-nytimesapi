import Link from "next/link";
import newsArticleStyle from "../styles/newsArticle.module.css";

const NewsItem = (newsArticle) => {
  // console.log(newsArticle.article);
  return (
    <Link
      href="articleDetail/[id]"
      as={`/articleDetail/${newsArticle.article.id}`}
    >
      <a className={newsArticleStyle.card}>
        <h3>{newsArticle.article.title}</h3>
        <p>{newsArticle.article.abstract}</p>
      </a>
    </Link>
  );
};

export default NewsItem;

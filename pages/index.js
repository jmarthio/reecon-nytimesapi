import Head from "next/head";
import Image from "next/image";
import NewsArticle from "../components/NewsArticle";
import styles from "../styles/Layout.module.css";

export default function Home({ newsArticle }) {
  return (
    <div className={styles.container}>
      <Head>
        <title> Reeracoen Newz</title>
        <meta name="keywords" content="web programming" />
      </Head>

      <NewsArticle newsArticle={newsArticle} />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=3AzuoHqIA5CJixL6DxwrwQbgYNpVo1Su`
  );

  const newsArticle = await res.json();

  return {
    props: {
      newsArticle,
    },
  };
};

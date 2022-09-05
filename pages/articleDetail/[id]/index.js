import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const articleDetail = () => {
  const router = useRouter();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    let selectedArticle = localStorage.getItem("selectedArticle");
    selectedArticle = JSON.parse(selectedArticle);

    setDetail(selectedArticle.article);
  }, []);

  if (!detail.id) {
    return null;
  }

  if (router.query.id && router.query.id !== `${detail.id}`) {
    router.replace("/");
  }

  return (
    <div>
      <Image
        src={detail.media[0]["media-metadata"][2].url}
        width={detail.media[0]["media-metadata"][2].width}
        height={detail.media[0]["media-metadata"][2].height}
      />
      <h3>{detail.title}</h3>
      <p>{detail.abstract}</p>
      <br />
      <Link href="/"> Go Back </Link>
    </div>
  );
};

export default articleDetail;

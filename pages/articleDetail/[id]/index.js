import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import detailArticle from "../../../styles/detailArticle.module.css";
import { Card, Grid } from "@mui/material";

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
      <Grid className={detailArticle.grid}>
        <Image
          src={detail.media[0]["media-metadata"][2].url}
          width={detail.media[0]["media-metadata"][2].width}
          height={detail.media[0]["media-metadata"][2].height}
        />
        <Card sx={{ maxWidth: 700 }} className={detailArticle.card}>
          <h2>{detail.title}</h2>
          <p>{detail.abstract}</p>
          <br />
          <p>
            {detail.published_date} | {detail.byline}
          </p>
          <br />
          <div className={detailArticle.button}>
            <Link href="/"> Go Back </Link>
          </div>
        </Card>
      </Grid>
    </div>
  );
};

export default articleDetail;

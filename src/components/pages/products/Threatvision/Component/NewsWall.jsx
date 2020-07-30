import React, { useContext } from "react";
import styles from "./NewsWall.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";

const newsWallConfig = {
  title: "solution.vision.newswall.title",
  news: [
    "solution.vision.newswall.news-1",
    "solution.vision.newswall.news-2",
    "solution.vision.newswall.news-3",
    "solution.vision.newswall.news-4",
    "solution.vision.newswall.news-5",
    "solution.vision.newswall.news-6",
  ],
};

const NewsWall = () => {
  const { t } = useTranslation(useContext);
  return (
    <div className={styles["container"]}>
      <h3
        className={[styles["title"]]}
        dangerouslySetInnerHTML={{ __html: `${t(newsWallConfig.title)}` }}
      />
      <div className={[styles["dialog-box"]]}>
        {newsWallConfig.news.map((dialog, index) => (
          <div
            key={index}
            className={[styles["dialog"]]}
            dangerouslySetInnerHTML={{ __html: `${t(dialog)}` }}
          />
        ))}
      </div>
      <div className={[styles["bg-arrow"]]} />
    </div>
  );
};

export default NewsWall;

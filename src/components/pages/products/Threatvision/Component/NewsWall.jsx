import React, { useState } from "react";
import styles from "./NewsWall.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";
import IntersectionVisible from "react-intersection-visible";

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
  const { t } = useTranslation();
  const [scrollToThisElementArr, setScrollToThisElementArr] = useState(
    newsWallConfig.news.map(() => false)
  );
  const onShow = (e, index) => {
    if (e && !scrollToThisElementArr[index]) {
      setScrollToThisElementArr((prevState) =>
        prevState.map((isShow, i) => (i === index ? true : isShow))
      );
    }
  };
  const renderShowClass = (index) => {
    if (scrollToThisElementArr[index]) {
      return styles["show"];
    }
    return "";
  };
  return (
    <div className={styles["container"]}>
      <h3
        className={[styles["title"]]}
        dangerouslySetInnerHTML={{ __html: `${t(newsWallConfig.title)}` }}
      />
      {newsWallConfig.news.map((dialog, index) => (
        <IntersectionVisible
          key={index}
          onShow={(e) => onShow(e, index)}
          className={`${styles["dialog"]} ${renderShowClass(index)}`}
          options={{ rootMargin: "-30%" }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `${t(dialog)}`,
            }}
          />
        </IntersectionVisible>
      ))}
      <div className={[styles["bg-arrow"]]} />
    </div>
  );
};

export default NewsWall;

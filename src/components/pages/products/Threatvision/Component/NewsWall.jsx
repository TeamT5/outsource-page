import React, { useRef, useState, useEffect, createRef } from "react";
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
  const { t } = useTranslation();
  const dialogCardRefs = useRef(newsWallConfig.news.map((_, i) => createRef()));
  const [currentScrollTop, setCurrentScrollTop] = useState({
    offsetHeight: 0,
    clientHeight: 0,
    scrollTop: 0,
  });

  const getScrollTop = (e) => {
    const { offsetHeight, clientHeight, scrollTop } = e.target.scrollingElement;
    if (currentScrollTop.scrollTop === scrollTop) {
      return;
    }
    setCurrentScrollTop({ offsetHeight, clientHeight, scrollTop });
  };

  useEffect(() => {
    document.addEventListener("scroll", getScrollTop);
    return () => {
      document.removeEventListener("scroll", getScrollTop);
    };
  }, []);
  const renderDialogShowClassName = (i) => {
    if (
      dialogCardRefs.current[i] &&
      dialogCardRefs.current[i].current &&
      !dialogCardRefs.current[i].current.isShow &&
      currentScrollTop.scrollTop -
        currentScrollTop.clientHeight -
        dialogCardRefs.current[i].current.getBoundingClientRect().top >=
        dialogCardRefs.current[i].current.getBoundingClientRect().top
    ) {
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
      {dialogCardRefs.current.map((_, index) => (
        <div
          key={index}
          className={`${styles["dialog"]} ${renderDialogShowClassName(index)}`}
          ref={dialogCardRefs.current[index]}
          dangerouslySetInnerHTML={{
            __html: `${t(newsWallConfig.news[index])}`,
          }}
        />
      ))}
      <div className={[styles["bg-arrow"]]} />
    </div>
  );
};

export default NewsWall;

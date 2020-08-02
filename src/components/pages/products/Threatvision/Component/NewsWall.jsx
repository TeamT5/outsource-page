import React, {
  useRef,
  useState,
  useEffect,
  createRef,
  useCallback,
} from "react";
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
  const dialogCardRefs = useRef(newsWallConfig.news.map(() => createRef()));
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
  const isShowClass = useCallback(
    (currentRef) => {
      if (!currentRef.current) {
        return "";
      }
      if (currentRef.current.className.indexOf("show") > -1) {
        return styles["show"];
      }
      if (
        currentScrollTop.scrollTop -
          currentScrollTop.clientHeight / 2 -
          currentRef.current.getBoundingClientRect().top >=
        currentRef.current.getBoundingClientRect().top
      ) {
        return styles["show"];
      }
      return "";
    },
    [currentScrollTop]
  );
  return (
    <div className={styles["container"]}>
      <h3
        className={[styles["title"]]}
        dangerouslySetInnerHTML={{ __html: `${t(newsWallConfig.title)}` }}
      />
      {newsWallConfig.news.map((dialog, index) => (
        <div
          key={index}
          className={`${styles["dialog"]} ${isShowClass(
            dialogCardRefs.current[index]
          )}`}
          ref={dialogCardRefs.current[index]}
          dangerouslySetInnerHTML={{
            __html: `${t(dialog)}`,
          }}
        />
      ))}
      <div className={[styles["bg-arrow"]]} />
    </div>
  );
};

export default NewsWall;

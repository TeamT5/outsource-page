import React, {
  useRef,
  useState,
  useEffect,
  createRef,
  useCallback,
} from "react";
import styles from "./ContentSection.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";

const content = [
  {
    context: "solution.sonar.intro.context",
    img: "/images/ThreatSonar/what_is_sonar.svg",
    reverse: true,
  },
  {
    title: "solution.sonar.function.ca-title",
    context: "solution.sonar.function.ca-context",
    img: "/images/ThreatSonar/CompromiseAssessment.svg",
    reverse: false,
  },
  {
    title: "solution.sonar.function.ir-title",
    context: "solution.sonar.function.ir-context",
    img: "/images/ThreatSonar/IncidentResponse.svg",
    reverse: true,
  },
  {
    title: "solution.sonar.function.mdr-title",
    context: "solution.sonar.function.mdr-context",
    img: "/images/ThreatSonar/MDRplatform.svg",
    reverse: false,
  },
];
const renderClassName = (contentItem) => {
  if (contentItem.reverse) {
    return `${styles["card-reverse"]} ${styles["card"]}`;
  }
  return styles["card"];
};
const ContentSection = () => {
  const { t } = useTranslation();
  const contentRefs = useRef(content.map(() => createRef()));
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
        currentScrollTop.scrollTop +
          currentScrollTop.clientHeight -
          currentRef.current.getBoundingClientRect().top * 3 >=
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
      {content.map((contentItem, index) => {
        return (
          <div
            key={index}
            className={`${renderClassName(contentItem)} ${isShowClass(
              contentRefs.current[index]
            )}`}
            ref={contentRefs.current[index]}
          >
            <img src={contentItem.img} />
            <div className={styles["content"]}>
              {contentItem.title && (
                <h4
                  className={styles["title"]}
                  dangerouslySetInnerHTML={{ __html: t(contentItem.title) }}
                />
              )}
              <div
                className={styles["text"]}
                dangerouslySetInnerHTML={{ __html: t(contentItem.context) }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;

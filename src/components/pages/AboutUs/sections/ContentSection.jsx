import React, { useState } from "react";
import IntersectionVisible from "react-intersection-visible";
import styles from "./ContentSection.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";

const content = [
  {
    title: "about-us.our-cyber-threat-experts.analyst-title",
    context: "about-us.our-cyber-threat-experts.analyst-context",
  },
  {
    title: "about-us.our-cyber-threat-experts.engine-lab-title",
    context: "about-us.our-cyber-threat-experts.engine-lab-context",
  },
  {
    title: "about-us.our-cyber-threat-experts.d39-title",
    context: "about-us.our-cyber-threat-experts.d39-context",
  },
  {
    title: "about-us.our-cyber-threat-experts.ir-team-title",
    context: "about-us.our-cyber-threat-experts.ir-team-context",
  },
];

const ContentSection = () => {
  const { t, locale } = useTranslation();
  const [scrollToThisElementArr, setScrollToThisElementArr] = useState(
    content.map(() => false)
  );
  const [scrollToThisElement, setScrollToThisElement] = useState({
    leaderShipTitle: false,
    mask: false,
    leadershipContent: false,
    leaderShipHeadBottom: false,
  });

  const onShow = (e, index) => {
    if (e && typeof index === "string") {
      setScrollToThisElement((prevState) => ({ ...prevState, [index]: true }));
    } else if (e && !scrollToThisElementArr[index]) {
      setScrollToThisElementArr((prevState) =>
        prevState.map((isShow, i) => (i === index ? true : isShow))
      );
    }
  };
  const renderShowClass = (index) => {
    if (scrollToThisElement[index] || scrollToThisElementArr[index]) {
      return styles["show"];
    }
    return "";
  };

  const renderClassName = (locale) => {
    if (locale === "tw") {
      return `${styles["card-container"]} ${styles["card-container-tw"]}`;
    } else {
      return styles["card-container"];
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={`${styles["card-with-photo-container"]}`}>
        <IntersectionVisible
          onShow={(e) => onShow(e, "leaderShipTitle")}
          className={`${styles["left-side"]}  ${renderShowClass(
            "leaderShipTitle"
          )}`}
          options={{ rootMargin: "-30%" }}
        >
          <h5
            className={`${styles["leadership-text"]}`}
            dangerouslySetInnerHTML={{
              __html: t("about-us.our-leadership.title"),
            }}
          />
        </IntersectionVisible>
        <div className={styles["right-side"]}>
          <IntersectionVisible
            onShow={(e) => onShow(e, "mask")}
            className={`${styles["mask"]}  ${renderShowClass("mask")}`}
            options={{ rootMargin: "-30%" }}
          ></IntersectionVisible>
          <img src="/images/about_us/CEO_TT.jpg" />
          <IntersectionVisible
            onShow={(e) => onShow(e, "leadershipContent")}
            className={`${styles["leadership-content"]}  ${renderShowClass(
              "leadershipContent"
            )}`}
            options={{ rootMargin: "-30%" }}
          >
            <p
              className={styles["leadership-head"]}
              dangerouslySetInnerHTML={{
                __html: t("about-us.our-leadership.content.title"),
              }}
            />
            <div
              className={styles["article-context"]}
              dangerouslySetInnerHTML={{
                __html: t("about-us.our-leadership.content.context"),
              }}
            />
          </IntersectionVisible>
        </div>
      </div>
      <div className={renderClassName(locale)}>
        <IntersectionVisible
          onShow={(e) => onShow(e, "leaderShipHeadBottom")}
          className={`${styles["left-side"]}  ${renderShowClass(
            "leaderShipHeadBottom"
          )}`}
          options={{ rootMargin: "-30%" }}
        >
          <h5
            className={`${styles["leadership-text"]} `}
            dangerouslySetInnerHTML={{
              __html: t("about-us.our-cyber-threat-experts.title"),
            }}
          />
        </IntersectionVisible>
        <div className={styles["right-side"]}>
          {content.map((card, index) => (
            <IntersectionVisible
              key={index}
              onShow={(e) => onShow(e, index)}
              className={`${styles["leadership-content"]}  ${renderShowClass(
                index
              )}`}
              options={{ rootMargin: "-30%" }}
            >
              <p
                className={styles["leadership-head"]}
                dangerouslySetInnerHTML={{ __html: t(card.title) }}
              />
              <div
                className={styles["article-context"]}
                dangerouslySetInnerHTML={{ __html: t(card.context) }}
              />
            </IntersectionVisible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

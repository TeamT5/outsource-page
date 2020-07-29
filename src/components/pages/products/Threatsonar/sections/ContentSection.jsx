import React from "react";
import styles from "./ContentSection.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";
import { console } from "globalthis/implementation";

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

const ContentSection = () => {
  const { t, locale } = useTranslation();
  const renderClassName = (contentItem) => {
    if (locale === "tw") {
      if (contentItem.reverse) {
        return `${styles["card-reverse"]} ${styles["card"]}`;
      }
      return styles["card"];
    } else {
      if (contentItem.reverse) {
        return `${styles["card-reverse"]} ${styles["card"]} ${styles["card-en"]}`;
      }
      return `${styles["card"]} ${styles["card-en"]}`;
    }
  };
  return (
    <div className={styles["container"]}>
      {content.map((contentItem, index) => {
        return (
          <div key={index} className={renderClassName(contentItem)}>
            <img src={contentItem.img} />
            <div className={styles["content"]}>
              <h4
                className={styles["title"]}
                dangerouslySetInnerHTML={{ __html: t(contentItem.title) }}
              ></h4>
              <p
                className={styles["text"]}
                dangerouslySetInnerHTML={{ __html: t(contentItem.context) }}
              ></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;

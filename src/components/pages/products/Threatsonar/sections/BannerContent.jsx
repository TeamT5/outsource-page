import React from "react";
import styles from "./BannerContent.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";

const BannerContent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["container"]}>
      <div className={styles["title-wrap"]}>
        <img
          className={styles["title-img"]}
          src="/images/ThreatSonar/ts_logo.svg"
        />
        <div className={styles["title-box"]}>
          <p className={styles["title"]}>{t("solution.sonar.title.title")}</p>
          <div className={styles["light-height"]}></div>
          <p
            className={styles["subtitle"]}
            dangerouslySetInnerHTML={{
              __html: t("solution.sonar.title.context"),
            }}
          ></p>
        </div>
      </div>
      <div className={styles["img-wrap"]}>
        <img
          className={styles["left-hero"]}
          src="/images/ThreatSonar/sonar_hero_left.png"
        />
        <img
          className={styles["right-hero"]}
          src="/images/ThreatSonar/ThreatSonar_hero_illustration.png"
        />
        <img className={styles["mask"]} />
      </div>
      <div className={styles["bubble"]}>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default BannerContent;

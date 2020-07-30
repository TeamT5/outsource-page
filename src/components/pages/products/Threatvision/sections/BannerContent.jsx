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
          src="/images/ThreatVision/tv_logo.svg"
        />
        <div className={styles["title-box"]}>
          <p
            dangerouslySetInnerHTML={{
              __html: `${t("solution.vision.title")}`,
            }}
            className={styles["title"]}
          />
          <div className={styles["light-height"]}></div>
        </div>
      </div>
      <div className={styles["img-wrap"]}>
        <img
          className={styles["left-hero"]}
          src="/images/ThreatVision/vision_hero_left.png"
        />
        <img
          className={styles["right-up-hero"]}
          src="/images/ThreatVision/vision_hero_right_up.png"
        />
        <img
          className={styles["right-down-hero"]}
          src="/images/ThreatVision/vision_hero_right_down.png"
        />
        <img className={styles["mask"]} />
      </div>
    </div>
  );
};

export default BannerContent;

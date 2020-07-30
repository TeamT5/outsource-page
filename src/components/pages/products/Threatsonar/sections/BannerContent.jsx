import React, { useState, useRef, useEffect } from "react";
import styles from "./BannerContent.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";

const BannerContent = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const windowWidthRef = useRef({ current: null });

  useEffect(() => {
    if (window.innerWidth) {
      windowWidthRef.current = window.innerWidth;
    }
  }, []);
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
      <img
        className={styles["left-hero"]}
        src="/images/ThreatSonar/sonar_hero_left.png"
      />
      <img
        className={styles["right-hero"]}
        src="/images/ThreatSonar/ThreatSonar_hero_illustration.png"
      />
      <img className={styles["mask"]} />
      {isOpen && (
        <div
          className={
            windowWidthRef.current !== null && windowWidthRef.current > 375
              ? styles["demo-mask"]
              : `${styles["demo-mask"]} ${styles["demo-mask-mobile"]}`
          }
        >
          <img
            src={
              windowWidthRef.current !== null && windowWidthRef.current > 375
                ? "/images/form_demo.png"
                : "/images/form_demo_mobile.png"
            }
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BannerContent;

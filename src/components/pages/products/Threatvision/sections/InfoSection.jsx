import React, { useState } from "react";
import styles from "./InfoSection.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";
import {
  NewsWall,
  CategoryCard,
} from "components/pages/products/Threatvision/Component";
import { XGrid } from "components/common/ui-components";

const tabConfig = {
  ce: {
    title: "solution.vision.advantage.ce-title",
    context: "solution.vision.advantage.ce-context",
  },
  apac: {
    title: "solution.vision.advantage.apac-title",
    context: "solution.vision.advantage.apac-context",
  },
};

const imagesConfig = {
  ce: [
    {
      title: "solution.vision.advantage.ce-trait-1",
      img: "/images/ThreatVision/Customer Engagement_online_sandbox.svg",
    },
    {
      title: "solution.vision.advantage.ce-trait-2",
      img: "/images/ThreatVision/Customer Engagement_Keyword_search.svg",
    },
    {
      title: "solution.vision.advantage.ce-trait-3",
      img: "/images/ThreatVision/Customer Engagement_Technical_data.svg",
    },
    {
      title: "solution.vision.advantage.ce-trait-4",
      img: "/images/ThreatVision/Customer Engagement_API.svg",
    },
  ],
  apac: [
    {
      title: "solution.vision.advantage.apac-trait-1",
      img: "/images/ThreatVision/APACcentric_samples.svg",
    },
    {
      title: "solution.vision.advantage.apac-trait-2",
      img: "/images/ThreatVision/APACcentric_malware.svg",
    },
    {
      title: "solution.vision.advantage.apac-trait-3",
      img: "/images/ThreatVision/APACcentric_Adversary.svg",
    },
  ],
};

const Tab = () => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);
  const isShowClass = (thisTabIndex) => {
    if (tabIndex === thisTabIndex) {
      return styles["show"];
    }
    return "";
  };

  return (
    <div className={styles["tab-container"]}>
      <div className={styles["tab-wrap"]}>
        <button
          dangerouslySetInnerHTML={{ __html: `${t(tabConfig.ce.title)}` }}
          onClick={() => {
            setTabIndex(0);
          }}
          className={
            tabIndex === 0
              ? `${styles["tab"]} ${styles["active"]}`
              : `${styles["tab"]}`
          }
        />
        <button
          dangerouslySetInnerHTML={{ __html: `${t(tabConfig.apac.title)}` }}
          onClick={() => {
            setTabIndex(1);
          }}
          className={
            tabIndex === 1
              ? `${styles["tab"]} ${styles["active"]}`
              : `${styles["tab"]}`
          }
        />
      </div>
      <div className={`${styles["tab-content-ce"]} ${isShowClass(0)}`}>
        <p
          className={styles["title"]}
          dangerouslySetInnerHTML={{ __html: `${t(tabConfig.ce.context)}` }}
        />
        <div className={styles["context"]}>
          {imagesConfig.ce.map((card, index) => {
            return (
              <div className={styles["img-box"]} key={index}>
                <img src={card.img} />
                <p
                  className={styles["card-title"]}
                  dangerouslySetInnerHTML={{ __html: `${t(card.title)}` }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles["tab-content-apac"]} ${isShowClass(1)}`}>
        <p
          className={styles["title"]}
          dangerouslySetInnerHTML={{
            __html: `${t(tabConfig.apac.context)}`,
          }}
        />
        <div className={styles["context"]}>
          {imagesConfig.apac.map((card, index) => {
            return (
              <div className={styles["img-box"]} key={index}>
                <img src={card.img} />
                <p
                  className={styles["card-title"]}
                  dangerouslySetInnerHTML={{ __html: `${t(card.title)}` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const InfoSection = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["tab-box"]}>
        <Tab />
      </div>
      <div className={styles["newswall-container"]}>
        <NewsWall />
      </div>
      <div className={styles["category-container"]}>
        <CategoryCard />
      </div>
      <div className={styles["xgrid-container-left"]}>
        <XGrid type="dark" />
      </div>
      <div className={styles["xgrid-container-right"]}>
        <XGrid type="dark" />
      </div>
    </div>
  );
};

export default InfoSection;

import React, {
  useRef,
  useState,
  useEffect,
  createRef,
  useCallback,
} from "react";
import styles from "./PlanSection.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";
import { XGrid } from "../../../../common/ui-components";

const whys = [
  {
    title: "solution.sonar.why.intel-correlation.title",
    traits: [
      "solution.sonar.why.intel-correlation.trait-1",
      "solution.sonar.why.intel-correlation.trait-2",
    ],
    img: "/images/ThreatSonar/why_IntelligenceCorelation.svg",
  },
  {
    title: "solution.sonar.why.cross-platform.title",
    traits: [
      "solution.sonar.why.cross-platform.trait-1",
      "solution.sonar.why.cross-platform.trait-2",
    ],
    img: "/images/ThreatSonar/why_Cross-platformOperation.svg",
  },
  {
    title: "solution.sonar.why.multi-scenarios.title",
    traits: [
      "solution.sonar.why.multi-scenarios.trait-1",
      "solution.sonar.why.multi-scenarios.trait-2",
      "solution.sonar.why.multi-scenarios.trait-3",
      "solution.sonar.why.multi-scenarios.trait-4",
    ],
    img: "/images/ThreatSonar/why_Multi-Scenarios.svg",
  },
  {
    title: "solution.sonar.why.forensic-analysis.title",
    traits: [
      "solution.sonar.why.forensic-analysis.trait-1",
      "solution.sonar.why.forensic-analysis.trait-2",
    ],
    img: "/images/ThreatSonar/why_ForensicAnalysis.svg",
  },
];

const PlanSection = () => {
  const { t } = useTranslation();
  const whysRefs = useRef(whys.map(() => createRef()));
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
  const Card = whys.map((why, index) => (
    <div
      key={index}
      className={`${styles["card"]} ${isShowClass(whysRefs.current[index])}`}
      ref={whysRefs.current[index]}
    >
      <div className={styles["img-wrap"]}>
        <img src={why.img} />
      </div>
      <div className={styles["context"]}>
        <h4
          className={styles["title"]}
          dangerouslySetInnerHTML={{
            __html: t(why.title),
          }}
        />
        <ul className={styles["lists"]}>
          {why.traits.map((item, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{
                __html: t(item),
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  ));
  return (
    <div className={styles["container"]}>
      <div className={styles["top"]}>
        <div className={styles["rect1"]}>
          <XGrid type="white" />
        </div>
        <div className={styles["rect2"]}>
          <XGrid type="white" />
        </div>
        <h2
          className={styles["title"]}
          dangerouslySetInnerHTML={{
            __html: t("solution.sonar.why.title"),
          }}
        />
        <div className={styles["border"]}></div>
        <div className={styles["slogan-title-wrap"]}>
          <h3
            className={styles["slogan-title"]}
            dangerouslySetInnerHTML={{
              __html: t("solution.sonar.why.slogan.title"),
            }}
          />
          <div className={styles["slogan-title-highlight"]} />
        </div>
        <p
          className={styles["slogan-context"]}
          dangerouslySetInnerHTML={{
            __html: t("solution.sonar.why.slogan.context"),
          }}
        />
      </div>
      <div className={styles["border-bottom"]}></div>
      <div className={styles["bottom"]}>{Card}</div>
    </div>
  );
};

export default PlanSection;

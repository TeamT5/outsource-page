import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  createRef,
  useCallback,
} from "react";
import styles from "./CategoryCard.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";

const planCardConfig = [
  {
    title: "solution.vision.category.enterprises-title",
    traits: [
      "solution.vision.category.enterprises-trait-1",
      "solution.vision.category.enterprises-trait-2",
    ],
    tags: "solution.vision.category.enterprises-tags",
    image: "/images/ThreatVision/Enterprises.svg",
  },
  {
    title: "solution.vision.category.financial-service-title",
    traits: [
      "solution.vision.category.financial-service-trait-1",
      "solution.vision.category.financial-service-trait-2",
    ],
    tags: "solution.vision.category.financial-service-tags",
    image: "/images/ThreatVision/FinancialService.svg",
  },
  {
    title: "solution.vision.category.public-sectors-title",
    traits: [
      "solution.vision.category.public-sectors-trait-1",
      "solution.vision.category.public-sectors-trait-2",
    ],
    tags: "solution.vision.category.public-sectors-tags",
    image: "/images/ThreatVision/PublicSectors.svg",
  },
];

const CategoryCard = () => {
  const { t } = useTranslation(useContext);
  const planCardRefs = useRef(planCardConfig.map(() => createRef()));
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
      {planCardConfig &&
        planCardConfig.map((card, index) => (
          <div
            key={index}
            className={`${styles["card"]} ${isShowClass(
              planCardRefs.current[index]
            )}`}
            ref={planCardRefs.current[index]}
          >
            <div className={styles["image-wrap"]}>
              <img src={card.image} />
            </div>
            <div className={styles["context"]}>
              <h4
                className={styles["title"]}
                dangerouslySetInnerHTML={{ __html: `${t(card.title)}` }}
              />
              <ul>
                {card.traits &&
                  card.traits.map((trait, index) => (
                    <li
                      className={styles["list"]}
                      key={index}
                      dangerouslySetInnerHTML={{ __html: `${t(trait)}` }}
                    />
                  ))}
              </ul>
              <span
                className={styles["tags"]}
                dangerouslySetInnerHTML={{ __html: `${t(card.tags)}` }}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryCard;

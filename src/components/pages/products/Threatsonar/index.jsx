import React, { useContext, useEffect, useState, useRef } from "react";
import BaseLayout from "../../../layout/BaseLayout";
import Head from "next/head";
import { BannerContent, ContentSection, PlanSection, Bubble } from "./sections";
import styles from "./index.module.scss";
import useTranslation from "src/scripts/translations/useTranslation";
import { LocaleContext } from "src/scripts/translations/LocaleContext";
import { console } from "globalthis/implementation";

const Threatsonar = () => {
  const { t } = useTranslation();
  const localContext = useContext(LocaleContext);
  const [isOpen, setIsOpen] = useState(false);
  const windowWidthRef = useRef({ current: null });

  useEffect(() => {
    if (window.innerWidth) {
      windowWidthRef.current = window.innerWidth;
    }
  }, []);
  const renderIsShow = () => {
    const openClass = isOpen ? styles["show"] : "";
    if (windowWidthRef.current !== null && windowWidthRef.current > 375) {
      return {
        className: `${styles["demo-mask"]} ${openClass}`,
        img: "/images/form_demo.png",
      };
    }
    return {
      className: `${styles["demo-mask"]} ${openClass}`,
      img: "/images/form_demo_mobile.png",
    };
  };
  return (
    <BaseLayout>
      <Head>
        <title>{"TeamT5 - Persistent Cyber Threat Hunters"}</title>
        <meta
          property="og:title"
          content="TeamT5 - Persistent Cyber Threat Hunters"
        />
        <meta
          name="description"
          content="TeamT5 is a group of hackers dedicated on cyber threat research. The team started with their outstanding research and has been delivering their cyber threat intelligence (CTI) for more than 5 years."
        />
        <meta
          property="og:description"
          content="TeamT5 is a group of hackers dedicated on cyber threat research. The team started with their outstanding research and has been delivering their cyber threat intelligence (CTI) for more than 5 years."
        />
        <meta
          property="og:url"
          content={`https://teamt5.org${
            t(localContext.locale) ? `/${localContext.locale}` : ""
          }/products/threatsonar`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
      <div className={styles["context"]}>
        <BannerContent className={styles["hero-img"]} />
        <ContentSection />
        <PlanSection />
        <Bubble setIsOpen={setIsOpen} />
        <div className={renderIsShow().className}>
          <img
            src={renderIsShow().img}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Threatsonar;

import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Business = forwardRef(({ business, lang }, ref) => {
  const { t } = useTranslation();

  return (
    <section className="exp-business-container" ref={ref}>
      {business.map((item, index) => {
        const business = lang === "en" ? item.en : item.th;
        console.log(item);

        return (
          <div key={index} className="business-container">
            <section className="left">
              <img
                src={business.exp_logo.desktop.url}
                alt={business.exp_logo.desktop.alt}
                width={business.exp_logo.desktop.width}
                height={business.exp_logo.desktop.height}
              />
            </section>
            <section className="right">
              <div
                className={`business-content-container ${
                  lang === "en" ? "en-regular" : "th-regular"
                }`}
              >
                <span className="business-content-label">
                  {t("experiences.business.label1")}
                </span>
                <h2 className="business-title">{business.exp_full_name}</h2>
              </div>
              <div
                className={`business-content-container ${
                  lang === "en" ? "en-regular" : "th-regular"
                }`}
              >
                <span className="business-content-label">
                  {t("experiences.business.label2")}
                </span>
                <h2 className="business-title">{business.exp_desc}</h2>
              </div>
              <div
                className={`business-content-container ${
                  lang === "en" ? "en-regular" : "th-regular"
                }`}
              >
                <span className="business-content-label">
                  {t("experiences.business.label3")}
                </span>
                <h2 className="business-title">
                  {business.exp_time_period.from} -{" "}
                  {business.exp_time_period.to}
                </h2>
              </div>
              {business.exp_ref.length > 0 && (
                <div
                  className={`business-content-container ${
                    lang === "en" ? "en-regular" : "th-regular"
                  }`}
                >
                  <span className="business-content-label">
                    {t("experiences.business.label4")}
                  </span>
                  <h2 className="business-title duration-500 hover:text-soft_pink">
                    <Link to={{ pathname: business.exp_ref }} target="_blank">
                      {business.exp_ref}
                    </Link>
                  </h2>
                </div>
              )}
              <div
                className={`business-content-container ${
                  lang === "en" ? "en-regular" : "th-regular"
                }`}
              >
                <span className="business-content-label">
                  {t("experiences.business.label5")}
                </span>
                {business.exp_tools.map((item, index) => (
                  <h2 key={index} className="business-title">
                    {item}
                  </h2>
                ))}
              </div>
            </section>
          </div>
        );
      })}
    </section>
  );
});

export default Business;

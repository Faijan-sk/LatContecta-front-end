import KnowledgeCard from "../cards/KnowledgeCard";
import adsetting from "/public/img/svg/adsetting.svg";
import checktwo from "/public/img/svg/checktwo.svg";
import configur_auto from "/public/img/svg/configur-auto.svg";
import forums from "/public/img/svg/forums.svg";
import portalsetup from "/public/img/svg/portalsetup.svg";
import setting from "/public/img/svg/setting.svg";

const helpItems = [
  {
    id: 1,
    icon: setting,
    title: "Get started",
    link: "URL:void(0)",
    description:
      "Set up your account, configure support channels, customize your portal to reflect your brand and more.",
  },
  {
    id: 2,
    icon: configur_auto,
    title: "Configuring Automation",
    link: "URL:void(0)",
    description:
      "Set up your account, configure support channels, customize your portal to reflect your brand and more.",
  },
  {
    id: 3,
    icon: portalsetup,
    title: "Customer Portal Setup",
    link: "URL:void(0)",
    description:
      "Set up your account, configure support channels, customize your portal to reflect your brand and more.",
  },
  {
    id: 4,
    icon: adsetting,
    title: "Advanced Configuration",
    link: "URL:void(0)",
    description:
      "Set up your account, configure support channels, customize your portal to reflect your brand and more.",
  },
  {
    id: 5,
    icon: checktwo,
    title: "Billing and Payment",
    link: "URL:void(0)",
    description:
      "Set up your account, configure support channels, customize your portal to reflect your brand and more.",
  },
  {
    id: 6,
    icon: forums,
    title: "User and Collaboration",
    link: "URL:void(0)",
    description:
      "Set up your account, configure support channels, customize your portal to reflect your brand and more.",
  },
];

const KnowledgeBase = () => {
  return (
    <section className="help__section bgsection">
      <div className="help__knowledge">
        <div className="container">
          <div className="row justify-content-center wow fadeInDown">
            <div className="col-lg-6">
              <div className="section__header section__center pb__60">
                <h2>Knowledge Base</h2>
                <p>
                  Explore How-To&#39;s and learn best practices from our
                  knowledge base.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {helpItems.map((itm) => (
              // Knowledge Card Here
              <KnowledgeCard key={itm.id} data={itm} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;

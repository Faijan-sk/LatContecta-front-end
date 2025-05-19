import DetailsLeft from "./DetailsLeft";
import RelatedArticles from "./RelatedArticles";

const HelpKnowledgeDetailsMain = () => {
  return (
    <section className="help__support__knowledge pt-80 pb-80">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-xl-8 col-lg-8">
            {/* Details Left Section */}
            <DetailsLeft />
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="knowledge__right">
              <h5 className="dtext mb__30">Knowledge Base Articles</h5>
              {/* All Related Articles */}
              <RelatedArticles />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpKnowledgeDetailsMain;

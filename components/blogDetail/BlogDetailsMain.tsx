import BlogRightSide from "../common/BlogRightSide";
import Comments from "./Comments";
import Details from "./Details";
import WriteComment from "./WriteComment";

const BlogDetailsMain = () => {
  return (
    <section className="blog__section pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="blog__details__leftwrapper">
              <div className="blog__details__box">
                {/* Details Section */}
                <Details />
              </div>
              <div className="comment__details__wrapper">
                <h3>Comments (03)</h3>

                {/* Comments Section */}
                <Comments />
              </div>

              {/* Write Comment Section */}
              <WriteComment />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            {/* Blog Right Side Section*/}
            <BlogRightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsMain;

import BlogRightSide from "../common/BlogRightSide";
import Pagination from "../pagination/Pagination";
import AllBlogs from "./AllBlogs";

const BlogListMain = () => {
  return (
    <section className="blog__section pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="blog__list__leftwrapper">
              {/* All Blogs Here*/}
              <AllBlogs />
            </div>

            {/* Pagination Section */}
            <Pagination clss="pt__40 justify-content-center" />
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

export default BlogListMain;

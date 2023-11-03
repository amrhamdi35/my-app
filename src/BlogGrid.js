import Blog from "./Blog";
import Footer from "./Footer";
import Navbar from "./Navbar";

const BlogGrid = () => {
  return (
    <div className="blog-grid">
      <Navbar />
      <div className="header">
        <h2>Blog Grid</h2>
        <p>
          Home / <span>Blog Grid</span>
        </p>
      </div>
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogGrid;

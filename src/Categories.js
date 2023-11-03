import Category from "./Category";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Categories = () => {
  return (
    <div className="categories">
      <Navbar />
      <div className="header">
        <h2>Categories</h2>
        <p>
          Home / Shop /<span>Categories</span>
        </p>
      </div>
      <Category />
      <Footer />
    </div>
  );
};

export default Categories;

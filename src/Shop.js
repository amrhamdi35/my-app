import Footer from "./Footer";
import Navbar from "./Navbar";
import Prodects from "./Prodects";

const Shop = () => {
  return (
    <div className="shop">
      <Navbar />
      <div className="header">
        <h2>Shop</h2>
        <p>
          Home / <span>Shop</span>
        </p>
      </div>
      <Prodects />
      <Footer />
    </div>
  );
};

export default Shop;

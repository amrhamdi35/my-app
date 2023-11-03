import Footer from "./Footer";
import Navbar from "./Navbar";
import Prodects from "./Prodects";
import Shoping from "./Shoping";

const ShopingCart = () => {
  return (
    <div className="shoping-cart">
      <Navbar />
      <div className="header">
        <h2>ShopingCart</h2>
        <p>
          Home / Shop /<span>ShopingCart</span>
        </p>
      </div>
      <Shoping />
      <Prodects />
      <Footer />
    </div>
  );
};

export default ShopingCart;

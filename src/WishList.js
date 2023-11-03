import Footer from "./Footer";
import Navbar from "./Navbar";
import Prodects from "./Prodects";
import Shoping from "./Shoping";

const WishList = () => {
  return (
    <div className="wish-list">
      <Navbar />
      <div className="header">
        <h2>WishList</h2>
        <p>
          Home / Shop /<span>WishList</span>
        </p>
      </div>
      <Shoping />
      <Prodects />
      <Footer />
    </div>
  );
};

export default WishList;

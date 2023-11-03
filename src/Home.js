import Blog from "./Blog";
import Category from "./Category";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Prodects from "./Prodects";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <Category />
      <Prodects />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;

import Footer from "./Footer";
import Navbar from "./Navbar";
import Prodects from "./Prodects";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <div className="header">
        <h2>Portfolio</h2>
        <p>
          Home / <span>Portfolio</span>
        </p>
      </div>
      <Prodects />
      <Footer />
    </div>
  );
};

export default Portfolio;

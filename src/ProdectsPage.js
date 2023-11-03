import Footer from "./Footer";
import Navbar from "./Navbar";
import Prodects from "./Prodects";
import ProdectsMore from "./ProdectsMore";

const ProdectsPage = () => {
  return (
    <div className="prodects-page">
      <Navbar />
      <ProdectsMore />
      <Prodects />
      <Footer />
    </div>
  );
};

export default ProdectsPage;

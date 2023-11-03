import Footer from "./Footer";
import Navbar from "./Navbar";
import Details from "./Details";

const CheckOut = () => {
  return (
    <div className="check-out">
      <Navbar />
      <div className="header">
        <h2>CheckOut</h2>
        <p>
          Home / Shop /<span>CheckOut</span>
        </p>
      </div>
      <Details />
      <Footer />
    </div>
  );
};

export default CheckOut;

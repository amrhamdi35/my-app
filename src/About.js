import ComAbout from "./ComAbout";
import Footer from "./Footer";
import Navbar from "./Navbar";
import OurShop from "./OurShop";
import OurTeam from "./OurTeam";
import Video from "./Video";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <ComAbout />
      <OurShop />
      <Video />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default About;

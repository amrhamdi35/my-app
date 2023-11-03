import { Link } from "react-router-dom/cjs/react-router-dom";

const Footer = () => {
  return (
    <div class="footer">
      <div className="container">
        <div class="foot">
          <div class="logo">
            <h3>Novur</h3>
          </div>
          <div class="newsletter">
            <div class="form">
              <input
                type="text"
                placeholder="Newsletter"
                value="Your Email Address"
              />
              <i class="i-right fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="allright"> ©All rights reserved</div>
          <ul class="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="Featured">Featured</Link>
            </li>
            <li>
              <Link to="Shop">Shop</Link>
            </li>
            <li>
              <Link to="Blog">Blog</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
            <li class="move-icon">
              <Link to="Facebook">
                <i class="i-move fa-brands fa-instagram"></i>
                <i class="i-move fa-brands fa-facebook-f"></i>
                <i class="i-move fa-brands fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

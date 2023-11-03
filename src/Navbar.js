import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./all.min.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiv, setIsActiv] = useState(false);
  const [isActi, setIsActi] = useState(false);
  const [isAct, setIsAct] = useState(false);
  const HandleClick = () => {
    setIsActive((current) => !current);
  };
  const HandleActiv = () => {
    setIsActiv((current) => !current);
  };
  const HandleActi = () => {
    setIsActi((current) => !current);
  };
  const HandleAct = () => {
    setIsAct((current) => !current);
  };
  return (
    <nav>
      <div className="container">
        <h1>Novur</h1>
        <div className="list">
          <button onClick={HandleClick}>
            <span className="bor"></span>
            <span className="bor"></span>
            <span className="bor"></span>
          </button>
          <ul className={isActive ? "active" : ""}>
            <li>
              <Link extact to="/">
                Home
              </Link>
            </li>
            <li className="list-feat" onClick={HandleActiv}>
              Featured
              {
                <ul className={isActiv ? "activeA" : ""}>
                  <div className="menu">
                    <div className="ri-shop">
                      Shop
                      {
                        <div className="list-shop">
                          <Link to="/ShopingCart">Shoping Cart</Link>
                          <Link to="/CheckOut">CheckOut</Link>
                          <Link to="/WishList">WishList</Link>
                          <Link to="/Categories">Categories</Link>
                        </div>
                      }
                    </div>
                    <div className="ri-blog">
                      Blog
                      {
                        <div className="list-blog">
                          <Link to="/Products">Products</Link>
                          <Link to="/SinglePost">Single Post</Link>
                          <Link to="/SignIn">Sign In</Link>
                          <Link to="/LogIn">Log In</Link>
                        </div>
                      }
                    </div>
                    <Link to="/Portfolio">Portfolio</Link>
                    <Link to="/About">About</Link>
                    <Link to="/*">404</Link>
                  </div>
                </ul>
              }
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/BlogGrid">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="search">
              <form onClick={HandleActi} className={isActi ? "acti" : ""}>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search" />
              </form>
            </li>
            <li className="icon">
              <Link to="#" onClick={HandleAct}>
                <i class="icon fa-solid fa-cart-plus"></i>
              </Link>
            </li>
            <li className={isAct ? "act" : ""}>
              <div class="shoping-cart">
                <i class="exist fa-solid fa-circle-xmark"></i>
                <i class="icon fa-solid fa-cart-plus"></i>
                <h4>Your shopping bag is empty</h4>
                <button>Continue shopping</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

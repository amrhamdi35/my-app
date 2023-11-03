import { useState } from "react";

const Prodects = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiv, setIsActiv] = useState(false);

  const HendleActive = () => {
    setIsActive((current) => !current);
  };
  const HendleActiv = () => {
    setIsActiv((current) => !current);
  };

  return (
    <div className="products">
      <div className="container">
        <div className="prod hi-sm">
          <button onClick={HendleActiv}>
            <span className="bor"></span>
            <span className="bor"></span>
            <span className="bor"></span>
          </button>
          <ul className={isActiv ? "activ" : ""}>
            <li className="active">All</li>
            <li>Women</li>
            <li>Man</li>
            <li>Accessories</li>
            <li>Shoes</li>
            <li class="move-1 hide">Showing 1–9 of 168 products</li>
            <li class="move-2 hide">
              sort by <i class="i-move fa-solid fa-angle-down"></i>
            </li>
          </ul>
        </div>
        <h2 className="hide">Recent Product</h2>
        <div className="product">
          <div className="box">
            <img src="https://picsum.photos/500" alt="" />
            <h3>
              Chanterelle Glasses <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$74</span>
          </div>
          <div className="box">
            <img src="https://picsum.photos/600" alt="" />
            <i class="icon fa-solid fa-cart-plus"></i>
            <h3>
              Color Sneakers Unisex <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$126</span>
          </div>
          <div className="box">
            <img src="https://picsum.photos/700" alt="" />
            <h3>
              Women's Sweatshirt <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$55</span>
          </div>
          <div className="box w-25">
            <img src="https://picsum.photos/800" alt="" />
            <h3>
              Black High Sneakers <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span className="hide">$149</span>
          </div>
          <div className="box hi-sm w-25">
            <img src="https://picsum.photos/900" alt="" />
            <h3>
              Camouflage Jacket <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$201</span>
          </div>
          <div className="box hi-sm w-25">
            <img src="https://picsum.photos/1000" alt="" />
            <h3>
              Black Leather Bag <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$96</span>
          </div>
          <div className="box hi-sm w-25">
            <img src="https://picsum.photos/1100" alt="" />
            <h3>
              Skinny Jeans Blue <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$69</span>
          </div>
          <div className="box hi-sm">
            <img src="https://picsum.photos/1200" alt="" />
            <h3>
              Reversible Windbreaker <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$145</span>
          </div>
          <div className="box hi-sm">
            <img src="https://picsum.photos/1300" alt="" />
            <h3>
              Trekking Sneakers <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$135</span>
          </div>
          <div className="box hide hi-sm">
            <img src="https://picsum.photos/1400" alt="" />
            <h3>
              Basic Denim Jacket <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$314</span>
          </div>
          <div className="box hide hi-sm hinpor">
            <img src="https://picsum.photos/1500" alt="" />
            <h3>
              Embroidered Hat <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$85</span>
          </div>
          <div className="box hide hi-sm hinpor">
            <img src="https://picsum.photos/1600" alt="" />
            <h3>
              Thick-Soled Sneakers <i class="heart fa-regular fa-heart"></i>
              <i class="i-rt fa-solid fa-arrow-right-long"></i>
            </h3>
            <span>$205</span>
          </div>
          <i class="ch-icon fa-solid fa-plus"></i>
          <h6 className="hide hi-sm">Load More</h6>
        </div>
        <span className="hi-sm hide" onClick={HendleActive}>
          <i class="fa-solid fa-plus"></i> FILTER
        </span>
        <div className={isActive ? "active" : ""}>
          <ul className="lists">
            <ul className="list-rad">
              <li class="lader">Color</li>
              <li>
                <input type="radio" name="time" id="blue" />
                <label for="blue">Blue</label>
              </li>
              <li>
                <input type="radio" name="time" id="gray" />
                <label for="gray">Gray</label>
              </li>
              <li>
                <input type="radio" name="time" id="orange" />
                <label for="orange">Orange</label>
              </li>
              <li>
                <input type="radio" name="time" id="red" />
                <label for="red">red</label>
              </li>
              <li>
                <input type="radio" name="time" id="white" />
                <label for="white">White</label>
              </li>
            </ul>
            <ul className="list-check">
              <li className="lader">size</li>
              <li>
                <input type="checkbox" id="one" />
                <label for="one">xs</label>
              </li>
              <li>
                <input type="checkbox" id="two" />
                <label for="two">S</label>
              </li>
              <li>
                <input type="checkbox" id="three" />
                <label for="three">M</label>
              </li>
              <li>
                <input type="checkbox" id="four" />
                <label for="four">L</label>
              </li>
            </ul>
            <ul>
              <li className="lader">Type</li>
              <li>Coats</li>
              <li>Dersses</li>
              <li>Jackets</li>
              <li>Jackets</li>
              <li>Shirts</li>
              <li>Tops</li>
            </ul>
            <ul>
              <li className="lader">Price</li>
              <li>$0 - $50</li>
              <li>$50 - $100</li>
              <li>$100 - $150</li>
              <li>$150 - $200</li>
              <li>$200+</li>
            </ul>
            <i class="exist fa-solid fa-circle-xmark fa-xl"></i>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prodects;

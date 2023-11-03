const Shoping = () => {
  return (
    <div className="shoping">
      <div class="container">
        <div class="shop">
          <div class="box">
            <h2 className="hide">Shopping Bag</h2>
            <h3 className="hide hi-bi">Products</h3>
            <div class="small-box">
              <span>01</span>
              <img src="https://picsum.photos/200" alt="" />
              <div class="cart">
                <h3>Color Sneakers Unisex</h3>
                <i class="exist fa-solid fa-xmark"></i>
                <ul>
                  <li>
                    Size: <span>41</span>
                  </li>
                  <li>
                    Color: <span>Orange</span>
                  </li>
                  <li>
                    Quantity: <span>1</span>
                  </li>
                  <li>
                    <span>$126</span>
                  </li>
                </ul>
                <button className="hide hi-bi">Add to cart</button>
              </div>
            </div>
            <div class="small-box">
              <span>02</span>
              <img src="https://picsum.photos/300" alt="" />
              <div class="cart">
                <h3>Polka Belt Dress</h3>
                <i class="exist fa-solid fa-xmark"></i>
                <ul>
                  <li>
                    Size: <span>xs</span>
                  </li>
                  <li>
                    Quantity: <span>1</span>
                  </li>
                  <li>
                    <span>$218</span>
                  </li>
                </ul>
                <button className="hide hi-bi">Add to cart</button>
              </div>
            </div>
            <button className="hide">Continue shopping</button>
            <button className="hide">Update cart</button>
          </div>
          <div class="box hide">
            <h2>Cart totals</h2>
            <div class="cart">
              <h3>
                Subtotal <span>$344</span>
              </h3>
              <h3>
                Shipping <span>$0.00</span>
              </h3>
              <h3>
                Total <span>$344</span>
              </h3>
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoping;

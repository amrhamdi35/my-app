const OurShop = () => {
  return (
    <div className="our-shop">
      <div class="container">
        <div class="box">
          <i class="fa-solid fa-truck"></i>
          <div class="cart">
            <h2>Free Shipping</h2>
            <span>Orders over $200</span>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-rotate-left"></i>
          <div class="cart">
            <h2>Free Returns</h2>
            <span>Within 15 days</span>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-champagne-glasses"></i>
          <div class="cart">
            <h2>Affiliate Work</h2>
            <span>Online Shopping</span>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-headset"></i>
          <div class="cart">
            <h2>100% Secure Shopping</h2>
            <span>Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;

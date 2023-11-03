const ProdectsMore = () => {
  return (
    <div className="prodects-more">
      <div class="container">
        <div class="prod">
          <div class="cart">
            <div class="box">
              <img src="https://picsum.photos/900" alt="" />
              <img src="https://picsum.photos/1000" alt="" />
              <img src="https://picsum.photos/1100" alt="" />
            </div>
            <div class="box">
              <img src="https://picsum.photos/900" alt="" />
            </div>
          </div>
          <div class="cart">
            <h2>Camouflage Jacket</h2>
            <div class="icon">
              <i class="star fa-solid fa-star"></i>
              <i class="star fa-solid fa-star"></i>
              <i class="star fa-solid fa-star"></i>
              <i class="star fa-solid fa-star"></i>
              <i class="star fa-solid fa-star"></i>
              <span>3 Reviews</span>
            </div>
            <span>$201</span>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing ferme
              vestibulum mauris. Aenean vel mi in ipsum iaculis blandit. Orci
              varius nato penatibus et magnis ridiculus.{" "}
            </p>
            <div class="change">
              <span class="i-left">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
              <span>1</span>
              <span class="i-right">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </div>
            <h3>Add to cart</h3> <i class="heart fa-regular fa-heart"></i>
            <h4>
              SKU: <span>S0001-01</span>
            </h4>
            <h4>
              Category: <span>Sneakers</span>
            </h4>
            <h4>
              Tags: <span>Shoes, Men, Clothes</span>
            </h4>
            <div class="last-icon">
              <span>Share:</span>
              <i class="i-move fa-brands fa-instagram"></i>
              <i class="i-move fa-brands fa-facebook-f"></i>
              <i class="i-move fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="box">
            <h3>Description</h3>
            <h3>additional information</h3>
            <h3>Reviews (3)</h3>
          </div>
          <div class="box">
            <ul>
              <li>Brand:</li>
              <li>Weight:</li>
              <li>Materials:</li>
              <li>Sole:</li>
              <li>Size:</li>
              <li>Other Info:</li>
            </ul>
            <ul>
              <li>Mango</li>
              <li>3.19 lbs</li>
              <li>100% bovine leather</li>
              <li>Thermoplastic</li>
              <li>One size</li>
              <li>Aliquam sodales egestas ullamcorper.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdectsMore;

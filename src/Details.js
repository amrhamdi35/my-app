const Details = () => {
  return (
    <div className="details">
      <div class="container">
        <div class="box">
          <h2>Billing Details</h2>
          <form class="box-inpt">
            <div class="helf">
              <label for="">First name</label>
              <input type="text" name="First name" id="" />
            </div>
            <div class="helf">
              <label for="">Last name</label>
              <input type="text" name="Last name" id="" />
            </div>
            <div class="full">
              <label for="">Company name (optional)</label>
              <input type="text" />
            </div>
            <div class="full">
              <label for="">Country</label>
              <input type="" name="Select a Country.." id="" />
            </div>
            <div class="full">
              <label for="">Street address</label>
              <input type="text" placeholder="House number and street name" />
              <input type="text" placeholder="Apartment, suite, unit etc." />
            </div>
            <div class="helf">
              <label for="">Town / City</label>
              <input type="text" />
            </div>
            <div class="helf">
              <label for="">State / County</label>
              <input type="text" />
            </div>
            <div class="full">
              <label for="">Postcode / ZIP</label>
              <input type="text" />
            </div>
            <div class="helf">
              <label for="">Email address</label>
              <input type="email" />
            </div>
            <div class="helf">
              <label for="">Phone</label>
              <input type="phone" />
            </div>
            <input type="checkbox" />
            <label for="">Create an account?</label>
            <h2>Aditional Information</h2>
            <label for="">Order notes (optional)</label>
            <input
              type="qustion"
              placeholder="Notes about your order, e.g. special notes for delivery. "
            />
          </form>
        </div>
        <div class="box">
          <h2>Your order</h2>
          <div class="box-small">
            <img src="https://picsum.photos/200" alt="" />
            <ul>
              <li>Mens Leather Shoes</li>
              <li>X 1</li>
              <li>$218</li>
            </ul>
          </div>
          <div class="box-small">
            <img src="https://picsum.photos/300" alt="" />
            <ul>
              <li>Polka Belt Dress</li>
              <li>X 1</li>
              <li>$218</li>
            </ul>
          </div>
          <h2>Cart total</h2>
          <div class="cart">
            <h3>
              Subtotal <span>$344</span>
            </h3>
            <h3>
              Total <span>$344</span>
            </h3>
          </div>
          <h2>Payment</h2>
          <div class="full">
            <input type="radio" id="Bank" />
            <label for="Bank">Direct Bank Transfer</label>
          </div>
          <div class="full">
            <input type="radio" id="Check" />
            <label for="Check">Check Payments</label>
            <p>
              Please send a check to Store Name, Store Street, Store Town, Store
              State / County, Store Postcode.
            </p>
          </div>
          <div class="full">
            <input type="radio" name="time" id="PayPal" />
            <label for="PayPal">PayPal</label>
          </div>
          <button>Place order</button>
        </div>
      </div>
    </div>
  );
};

export default Details;

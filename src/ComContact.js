const ComContact = () => {
  return (
    <div className="com-contact">
      <div class="container">
        <h1>Contact</h1>
        <div class="img"></div>
        <div class="contact">
          <div class="box-lt">
            <h2>Send Us a Message</h2>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="massage" placeholder="Your Massage" />
              <input type="button" value="Sand Massage" />
            </form>
          </div>
          <div class="box-rt">
            <h2>Get In Touch with us</h2>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing ferme
              vestibulum mauris. Aenean vel mi in ipsum iaculis blandit.{" "}
            </p>
            <h3>Our Office</h3>
            <h4>
              <i class="fa-solid fa-location-dot"></i>{" "}
              <span>1 S Commercial Ave, St Lawrence, SD 57373</span>
            </h4>
            <h4>
              <i class="fa-solid fa-phone"></i>{" "}
              <span>+1 605-853-2728; +1 605-853-2729</span>
            </h4>
            <h4>
              <i class="fa-solid fa-envelope"></i>{" "}
              <span>shopnovur@info.com; supportnovur@com</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComContact;

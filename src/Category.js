const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="box">
          <img src="https://picsum.photos/400" alt="" />
          <h2>Dresses</h2>
        </div>
        <div class="box">
          <img src="https://picsum.photos/500" alt="" />
          <h2>Shirts</h2>
        </div>
        <div class="box">
          <img src="https://picsum.photos/600" alt="" />
          <h2>JEANS</h2>
        </div>
        <div class="box hide">
          <img src="https://picsum.photos/700" alt="" />
          <h2>Tops</h2>
        </div>
        <div class="box hide">
          <img src="https://picsum.photos/800" alt="" />
          <h2>Sales</h2>
        </div>
        <div class="box hide">
          <img src="https://picsum.photos/900" alt="" />
          <h2>Bags</h2>
        </div>
        <div class="box hide">
          <img src="https://picsum.photos/1000" alt="" />
          <h2>Jumpers</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;

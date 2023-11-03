import { Link } from "react-router-dom/cjs/react-router-dom";

const Oops = () => {
  return (
    <div className="oops">
      <div class="container">
        <div class="box">
          <h1>oops!</h1>
          <h6>Page Not Found</h6>
          <p>
            It looks like nothing was found at this location. Click below to
            return home.
          </p>
          <button>
            <Link to="/"> Back to Homepage </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oops;

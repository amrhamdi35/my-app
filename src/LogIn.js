import { Link } from "react-router-dom/cjs/react-router-dom";

const LogIn = () => {
  return (
    <div className="log-in">
      <div className="log">
        <h2>Log In</h2>
        <Link to="/"> <i class="exist fa-solid fa-xmark"></i> </Link>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="checkbox" /> <span>Remember Me</span>
        <Link to="#">Last Your Password?</Link>
        <button class="lo-btn">Log In</button>
        <h3>Social connected:</h3>
        <button>
          <i class="i-move fa-brands fa-facebook-f"></i> Login With Facebook
        </button>
        <button>
          <i class="i-move fa-brands fa-twitter"></i> Login With Twitter
        </button>
        <h4>
          Dont have an account? <Link to="#">Register</Link>
        </h4>
      </div>
    </div>
  );
};

export default LogIn;

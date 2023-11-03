import { Link } from "react-router-dom/cjs/react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-in">
      <form>
        <h2>Sign In</h2>
        <Link to="/">
          <i class="exist fa-solid fa-xmark"></i>
        </Link>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, other purposes
          described in our <span>privacy policy.</span>
        </p>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

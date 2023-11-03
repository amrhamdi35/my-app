import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Categories from "./Categories";
import ProdectsPage from "./ProdectsPage";
import ShopingCart from "./ShopingCart";
import WishList from "./WishList";
import CheckOut from "./CheckOut";
import BlogGrid from "./BlogGrid";
import SinglePost from "./SinglePost";
import Portfolio from "./Portfolio";
import Error from "./Error";
import Contact from "./Contact";
import LogIn from "./LogIn";
import SignIn from "./SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/Categories">
            <Categories />
          </Route>
          <Route path="/Products">
            <ProdectsPage />
          </Route>
          <Route path="/ShopingCart">
            <ShopingCart />
          </Route>
          <Route path="/WishList">
            <WishList />
          </Route>
          <Route path="/CheckOut">
            <CheckOut />
          </Route>
          <Route path="/BlogGrid">
            <BlogGrid />
          </Route>
          <Route path="/SinglePost">
            <SinglePost />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


//  - - - - - - - - - - - - - - - - - - - - - -   BLOG API IN REACT

// https://www.wix.com/website/templates/html/blog
// https://www.wix.com/website-template/view/html/2135?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fblog%2F2&tpClick=view_button&esi=bbb09d69-d04f-44b0-81cf-e927b56f8c9a


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './Blog-API/Header';
import Usignup from './Blog-API/User/Usignup';
import Home from './Blog-API/Home';
import Ulogin from './Blog-API/User/Ulogin';
import Cblog from './Blog-API/Blog/Cblog';
import Blog from './Blog-API/Blog/Blog';
import Footer from './Blog-API/Footer';
import Protect from './Blog-API/Protect/Protect';
import Contact from './Blog-API/Contact';



function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* User Pages */}
          <Route path="/user/signup">
            <Usignup></Usignup>
          </Route>

          <Route path="/user/login">
            <Ulogin></Ulogin>
          </Route>

          {/* User Pages */}
          <Route path="/blog/create">
            <Protect>
              <Cblog></Cblog>
            </Protect>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/contact-us">
            <Contact></Contact>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

//  catagery.
// logout
// protect.

export default App;

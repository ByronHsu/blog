import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import CKEditor from './CKEditor';
import Catalog from './Catalog';
import '../css/NavBar.css';
/*  
import {$,jQuery} from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;*/

class Home extends Component {

  componentDidMount() {
    $(document).ready(() => {
      $('.carousel').carousel();
    });
  }
  render() {
    return (
      <div className="carousel">
        <a className="carousel-item" href="#one!"><img src="img/IMG_8735.jpg" /></a>
        <a className="carousel-item" href="#two!"><img src="img/IMG_8736.jpg" /></a>
        <a className="carousel-item" href="#three!"><img src="img/IMG_8737.jpg" /></a>
        <a className="carousel-item" href="#four!"><img src="img/IMG_8742.jpg" /></a>
        <a className="carousel-item" href="#five!"><img src="img/IMG_8749.jpg" /></a>
      </div>
    );
  }
}

const About = () => (
  <div> 
    <h2>About</h2>
  </div>
);


const CKE = () => (
  <CKEditor />
);


const NavBar = () => (
  <Router>
    <div>
      <nav>
        <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">MY BLOG</a>
        <ul className="left hide-on-med-and-down">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/catalog">CATALOG</Link></li>
            <li><Link to="/add">ADD</Link></li>
          </ul>
      </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/add" component={CKE} />
      </Switch>
    </div>
  </Router>
);
export default NavBar;

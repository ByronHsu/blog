import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import 'babel-polyfill';
import Article from './Article';
import fetch from 'isomorphic-fetch';
import '../css/Home.css';

class home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    fetch('/api/get-data')
            .then(response => response.json())
            .then((article) => {
              this.setState({ data: article });
            })
            .catch((error) => {
              console.log(error);
            });
  }
  componentDidMount() {
    $(document).ready(() => {
      $('.carousel').carousel();
    });
  }
  render() {
    return (
      <div>
        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src="img/2.jpg" /></a>
          <a className="carousel-item" href="#two!"><img src="img/7.jpg" /></a>
          <a className="carousel-item" href="#three!"><img src="img/6.jpg" /></a>
          <a className="carousel-item" href="#four!"><img src="img/4.jpg" /></a>
          <a className="carousel-item" href="#five!"><img src="img/5.jpg" /></a>
        </div>
  
        <div className="collection">
          {
                    this.state.data.map(p => (
                      <Link to={`/article/${p._id}`}>
                      <a href="#!" className="collection-item">{p.title}</a>
                    </Link>
                  ))
              }
        </div>
      </div>
    );
  }
} 

export default home;

 
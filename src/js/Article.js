import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import '../css/Article.css';
import ReactHtmlParser from 'react-html-parser';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      data: null, 
    };
  }
  componentWillMount() {
    console.log(this.props.match.params);
    fetch(`/api/get-data/${this.props.match.params.articleid}`)
            .then(response => response.json())
            .then((article) => {
              this.setState({ data: article });
            })
            .catch((error) => {
              console.log(error);
            });
  }
  
  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    } 

    console.log(this.state.data); 
    const html = this.state.data.content.replace(/\r?\n/g, '<br />'); 
    return (
        <div id = {this.props.match.params.articleid} className = "article" > 
            <div className = "title">{this.state.data.title}</div>
            <div className = "time">{this.state.data.time}</div>
            <div className = "content"> { ReactHtmlParser(html) } </div> 
        </div>      
    );
  } 
}

export default Article;


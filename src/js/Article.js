import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      data:' ',
    };
  }
  componentWillMount() {
    fetch(`/api/get-data/${this.props.match.params.articleid}`)
            .then(response => response.json())
            .then((article) => {
              this.setState({ data: article });
            })
            .catch((error) => {
              console.log(error);
            });
  }
  componentDidUpdate(){
    console.log(document.getElementById(this.props.match.params.articleid));
    console.log(this.state.data);
    document.getElementById(this.props.match.params.articleid).innerHTML=this.state.data.content;
  }

  render() {
    console.log(this.state.data.content);
    return (
        <div id = {this.props.match.params.articleid}>
        </div>
    );
  }
}

export default Article;


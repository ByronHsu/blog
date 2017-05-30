import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import '../css/CKEditor.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch, 
} from 'react-router-dom';

const CKE = require('react-ckeditor-wrapper');

class CKEDITOR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ' ',
      topic: ' ',

    };
  }
  getNowTime = () =>{
    const time = new Date();
    let t = [];
    t[0] = time.getFullYear();
    t[1] = time.getMonth() + 1;
    t[2] = time.getDate();
    t[3] = time.getHours();
    t[4] = time.getMinutes();
    t[5] = time.getSeconds();
    for (let i = 3; i <= 5; i++) {
      if (t[i] >= 0 && t[i] <= 9) {
        t[i] = '0' + t[i];
      }
    }
    return `${t[0]}/${t[1]}/${t[2]} ${t[3]}:${t[4]}:${t[5]}`;
  }
  updateContent(value) {
    this.setState({ content: value });
  }
  submitOnClick = () => {
    const article = {
      topic: this.state.topic,
      content: this.state.content,
      time: this.getNowTime(),
    };
    console.log(article);
    fetch('/api/insert', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    });
  }
  handleChange = (e) => {
    this.setState({ topic: e.target.value });
  }
  render() {
    return (
      <div>   
        <div className="input-field">
          <input
            placeholder="Placeholder" type="text" 
            className="validate" onChange={this.handleChange}
            value={this.state.topic}
          />
          <label className="active">Topic</label>
        </div>
        <CKE
          value={this.state.content}
          onChange={this.updateContent.bind(this)}
          config={{ uiColor: '#ee6e73' }}  
        />
        <Link to="/catalog">
          <button className="btn waves-effect waves-red Submit" type="submit" name="action" onClick={this.submitOnClick}>Submit
            <i className="material-icons right">send</i>
          </button>
        </Link>
      </div>
    );
  }
}

export default CKEDITOR;

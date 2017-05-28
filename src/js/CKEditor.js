import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

const CKE = require('react-ckeditor-wrapper');

class CKEDITOR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ' ',
    };
  }

  getdataOnClick = () => {
    fetch('/api/get-data')
            .then(response => response.json())
            .then((article) => {
              console.log(article);
            })
            .catch((error) => {
              console.log(error);
            });
  }

  updateContent(value) {
    this.setState({ content: value });
  }
  submitOnClick = () => {
    const article = {
      content: this.state.content,
    };
    fetch('/api/insert', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    }).then(
            this.setState({ content: ' ' }),
        );
  }
  render() {
    return (
      <div>
        <CKE
          value={this.state.content}
          onChange={this.updateContent.bind(this)}
        />
        <button onClick={this.submitOnClick} />
        <button onClick={this.getdataOnClick} />
      </div>
    );
  }
}

export default CKEDITOR;

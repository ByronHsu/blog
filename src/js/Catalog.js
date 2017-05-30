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


class catalog extends Component {
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

  render() {
    return (
      <div>
        <ul>
          {
                    this.state.data.map(p => (
                      <li>
                        <Link to={`/catalog/${p._id}`}>{p.topic}</Link>
                      </li>
                    ))
                }
        </ul>
      </div>
    );
  }
}

const Catalog = () => (
  <div>
    <Switch>
      <Route exact path="/catalog" component={catalog} />
      <Route path="/catalog/:articleid" component={props => (<Article {...props} />)} />
    </Switch>
  </div>
);
export default Catalog;


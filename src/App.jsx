import React, { Component } from 'react';
import Images from './Images';
import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Express Middleware Example</h1>
        <button
          onClick={() => {
            axios.post('/api/no_json_parsing', { message: 'hello' });
          }}
        >
          No Parsing
        </button>
        <button
          onClick={() => {
            axios.post('/api/yes_json_parsing', { message: 'hello' });
          }}
        >
          Yes Parsing
        </button>

        <button
          onClick={() => {
            // check webpack.config.js for setup
            // look at output and devtool
            throw new Error('Hi');
          }}
        >
          **Bonus: Errors and Source Map
        </button>
        <BrowserRouter>
          <NavLink to="/puppies">Puppies</NavLink>
          <NavLink to="/kittens">Kittens</NavLink>
          <Switch>
            <Route
              path="/puppies"
              render={() => <Images title="Puppies" root="/img/puppies" />}
            />
            <Route
              path="/kittens"
              render={() => <Images title="Kittens" root="/kitten_images" />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

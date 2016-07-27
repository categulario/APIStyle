'use strict';

import React, { Component } from 'react';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Api Docs</h1>

        <div className="entry-point">
          <code className="entry-method">GET</code> <span className="entry-url">/visits</span>
        </div>
      </div>
    );
  }
}

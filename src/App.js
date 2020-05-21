import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import App1 from './App1';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path ="/" component={App1}/>
            <Route exact path ="/App1" component={App1}/>
          </div>
      </Router>  
    );
  }
}

// JSX는 React의 문법으로 HTML문법을 잘 알고있다면 자바스크립트 코드내에서 HTML코드를 손쉽게 작성할 수 있도록 지원하는 문법임.

export default App;

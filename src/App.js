import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path ="/" component={App1}/>
            <Route exact path ="/App1" component={App1}/>
            <Route exact path ="/App2" component={App2}/>
            <Route exact path ="/App3" component={App3}/>
            <Route exact path ="/App4" component={App4}/>
          </div>
      </Router>  
    );
  }
}

// JSX는 React의 문법으로 HTML문법을 잘 알고있다면 자바스크립트 코드내에서 HTML코드를 손쉽게 작성할 수 있도록 지원하는 문법임.

export default App;

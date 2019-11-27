import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/es/button';
import { Button } from 'antd';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      button:'这是一个按钮',
      boys:'我爱王俊凯'
    }
  }
  render() {
    let {button,boys} = this.state
    return (
        <div className="App">
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
          <Button type="primary" onClick={this.handleClick}>{button}</Button>
          <p className="first-class">{boys}</p>
        </div>
    );
  }
  handleClick(){
    console.log('点击了一个按钮')

  }
}



export default App;

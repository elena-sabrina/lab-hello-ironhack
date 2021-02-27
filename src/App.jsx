import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <img
            className='App-logo'
            src='/images/ironhack-logo.svg'
            alt='logo-iron'
          />
          <img src='/images/menu-top.svg' alt='logo-iron' />
        </nav>
        <header className='App-header'>
          <div className='App-hero'>
            <h1> Say hello to React.JS </h1>
            <h2>
              You will learn a Frontend framework from scratch, to become a
              Ninka Developer.
            </h2>
            <button>Awesome!</button>
          </div>
        </header>
        <ul>
          <li>
            <img src='/images/icon1.png' alt='declarative' />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </li>
          <li>
            <img src='/images/icon2.png' alt='components' />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </li>
          <li>
            <img src='/images/icon3.png' alt='singleway' />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </li>
          <li>
            <img src='/images/icon4.png' alt='jsx' />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browers.</p>
          </li>
        </ul>
      </div>
    );
  }
}

const ArgumentList = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      {props.children}
    </div>
  );
};

function App() {
  return (
    <div className='arguments'>
      <ArgumentList name='Declerative'>
        <img src='/images/icon1.png' alt='declarative' />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </ArgumentList>
      <ArgumentList name='Declerative'>
        <img src='/images/icon2.png' alt='components' />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </ArgumentList>
      <ArgumentList name='Declerative'>
        <img src='/images/icon3.png' alt='singleway' />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </ArgumentList>
      <ArgumentList name='Declerative'>
        <img src='/images/icon4.png' alt='jsx' />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browers.</p>
      </ArgumentList>
    </div>
  );
}

export default App;

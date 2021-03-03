import React from "react";

const Header = () => {
  return (
    <div>
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
          <h1>Say hello to React.JS</h1>
          <h2>
            You will learn a Frontend framework from scratch, to become a Ninka
            Developer.
          </h2>
          <button>Awesome!</button>
        </div>
      </header>
    </div>
  );
};

export default Header;

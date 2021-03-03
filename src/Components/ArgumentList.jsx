import React from "react";

class ArgumentList extends React.Component {
  render() {
    const { name, image, alt, copy } = this.props;
    return (
      <div>
        <ul>
          <li>
            <img src={image} alt={alt} />
            <div>
                <h3>{name}</h3>
                <p>{copy}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="argumentlist">
      <ArgumentList
        name='Declerative'
        image='/images/icon1.png'
        alt='declarative'
        copy='React makes it painless to create interactive UIs'
      />
      <ArgumentList
        name='Components'
        image='/images/icon2.png'
        alt='components'
        copy='Build encapsulated components that manage their state.'
      />
      <ArgumentList
        name='Single-Way'
        image='/images/icon3.png'
        alt='singleway'
        copy="A set of immutable values are passed to the component's."
      />
      <ArgumentList
        name='JSX'
        image='/images/icon4.png'
        alt='jsx'
        copy='Statically-typed, designed to run on modern browers.'
      />
    </div>
  );
}

export default App;

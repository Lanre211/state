import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'A software developer',
      imgSrc: 'path-to-image.jpg',
      profession: 'Software Engineer'
    },
    shows: false,
    interval: 0
  };

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        interval: prevState.interval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, interval } = this.state;

    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since last component mount: {interval} seconds</p>
      </div>
    );
  }
}

export default App;

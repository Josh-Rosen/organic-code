import React, { Component } from "react";
const lightTheme = 'light';
const darkTheme = 'dark';
const sunWithShades = '😎';
const moonFace = '🌝';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {mode: this.getEmoji(localStorage.getItem('theme') || lightTheme)};
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  getEmoji(theme) {
    return theme === lightTheme ? sunWithShades : moonFace;
  }

  getTheme(emoji) {
    return emoji === sunWithShades ? lightTheme : darkTheme;
  }

  toggleDarkMode() {
    //// TODO: make this into a setState callback
    const newEmoji = this.isLightThemed(this.state.mode) ? moonFace : sunWithShades;
    this.setState({mode: newEmoji});
    const newTheme = this.getTheme(newEmoji);
    this.setTheme(newTheme);
  }

  isLightThemed(emoji) {
    return emoji === sunWithShades;
  }

  setTheme(newTheme) {
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  render() {
    return <div className="header-dark-mode">
      <div className="dark-mode-icon">
        <span onClick={this.toggleDarkMode} className="cursor-pointer">{this.state.mode}</span>
      </div>
    </div>
  }
}

export default DarkModeToggle;

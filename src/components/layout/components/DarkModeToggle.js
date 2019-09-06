import React, { Component } from "react";

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {mode: this.getEmoji(localStorage.getItem('theme') || 'light')};
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  getEmoji(theme) {
    return theme === 'light' ? '😎' : '🌚';
  }

  getTheme(emoji) {
    return emoji === '😎' ? 'light' : 'dark';
  }

  toggleDarkMode() {
    //// TODO: make this into a setState callback
    const newEmoji = this.isLightThemed(this.state.mode) ? '🌚' : '😎';
    this.setState({mode: newEmoji});
    const newTheme = this.getTheme(newEmoji);
    this.setTheme(newTheme);
  }

  isLightThemed(emoji) {
    return emoji === '😎';
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

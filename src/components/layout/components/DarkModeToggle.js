import React, { Component } from 'react';

const lightTheme = 'light';
const darkTheme = 'dark';
const sunWithShades = '😎';
const moonEmoji = '🌛';

class DarkModeToggle extends Component {
  static getEmoji(theme) {
    return theme === lightTheme ? sunWithShades : moonEmoji;
  }

  static getTheme(emoji) {
    return emoji === sunWithShades ? lightTheme : darkTheme;
  }

  static isLightThemed(emoji) {
    return emoji === sunWithShades;
  }

  static setTheme(newTheme) {
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  constructor(props) {
    super(props);
    this.state = {
      mode: DarkModeToggle.getEmoji(
        localStorage.getItem('theme') || lightTheme,
      ),
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    /// / TODO: make this into a setState callback
    const { mode } = this.state;
    const newEmoji = DarkModeToggle.isLightThemed(mode)
      ? moonEmoji
      : sunWithShades;
    this.setState({ mode: newEmoji });
    const newTheme = DarkModeToggle.getTheme(newEmoji);
    DarkModeToggle.setTheme(newTheme);
  }

  render() {
    const { mode } = this.state;
    return (
      <div className="header-dark-mode">
        <div className="dark-mode-icon">
          <span onClick={this.toggleDarkMode} className="cursor-pointer">
            {mode}
          </span>
        </div>
      </div>
    );
  }
}

export default DarkModeToggle;

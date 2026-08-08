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

  /* The inline script in index.html has already resolved this before paint,
     folding in localStorage and the OS preference. Read what it decided rather
     than deriving it a second time and disagreeing with the rendered page. */
  static currentTheme() {
    return document.body.getAttribute('data-theme') || lightTheme;
  }

  constructor(props) {
    super(props);
    this.state = {
      mode: DarkModeToggle.getEmoji(DarkModeToggle.currentTheme()),
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
          <button
            type="button"
            onClick={this.toggleDarkMode}
            className="cursor-pointer icon-button"
            aria-label={
              DarkModeToggle.isLightThemed(mode)
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
          >
            {mode}
          </button>
        </div>
      </div>
    );
  }
}

export default DarkModeToggle;

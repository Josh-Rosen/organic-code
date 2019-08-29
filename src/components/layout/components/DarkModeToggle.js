import React, { Component } from "react";

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {mode: '😎'};
    this.toggleDarkModeToggle = this.toggleDarkModeToggle.bind(this);
  }

  toggleDarkModeToggle() {
    const newMode = this.state.mode === '😎' ? '🌚' : '😎';
    this.setState({mode: newMode});
  }

  render() {
    return <div
      className="header-dark-mode cursor-pointer"
      onClick={this.toggleDarkModeToggle}
    >
      <div className="dark-mode-icon">
        {this.state.mode}
      </div>
    </div>
  }
}

export default DarkModeToggle;

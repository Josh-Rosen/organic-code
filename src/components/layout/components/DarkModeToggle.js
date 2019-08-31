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
    return <div className="header-dark-mode">
      <div className="dark-mode-icon">
        <span onClick={this.toggleDarkModeToggle} className="cursor-pointer">{this.state.mode}</span>
      </div>
    </div>
  }
}

export default DarkModeToggle;

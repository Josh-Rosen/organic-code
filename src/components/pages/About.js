import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch('https://instagram.com/p/BYmuVA-gAtx/media/?size=l')
      .then((response) => {
        console.log(response)
        return response;
      })
      .then((json) => {
        console.log(json.url)

        this.setState({url: json.url});
      });
  }

  componentWillUnmount() {
    console.log('goodbye')
  }

  render() {
    return <div>
      <h1>Hello, {this.props.name}</h1>
      <div>
        <img src={this.state.url} alt="boohoo" className="img-responsive"/>
        <span>Hello</span>
      </div>
    </div>
  }
}

export default About;

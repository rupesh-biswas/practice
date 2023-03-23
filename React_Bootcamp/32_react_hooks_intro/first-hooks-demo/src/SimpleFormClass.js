import React, { Component } from "react";

class SimpleFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ email: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>You entered: {this.state.email}</h1>
        <input
          type='text'
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SimpleFormClass;

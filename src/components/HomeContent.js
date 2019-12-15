import React, { Component } from "react";
import "./Content.css"
import SpecialMentions from "./SpecialMentions"

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles
  }
  render() {

  const contentStyle = {
    paddingTop: this.styles.topBarHeight + 200,
    paddingRight: 20,
    paddingBottom: this.styles.footerMenuHeight + 20,
    paddingLeft: 20,
    backgroundColor: this.styles.black(),
    color: '#e5c0A9',
    textAlign: 'center'
  };

    return (
      <div style={contentStyle} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    );
  };
}

export default HomeContent;
import React from "react";
import "./TopBar.css"
import { stack as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'


class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles
  }
  render() {

    const topBarStyle = {
      position: "fixed",
      top: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "top",
      width: "100%",
      height: this.styles.topBarHeight,
      backgroundColor: "#54788f",
      borderBottom: `1px solid ${this.styles.white(0.1)}`,
      fontWeight: "bold",
      paddingRight: "20px",
      paddingTop: "10px",
      boxSizing: "border-box",
      color: "white",
      fontSize: '20px'
    };

  return (
    <div className={"header_container"} style={topBarStyle}>
      <Menu>
        <Link to="/year">2019</Link>
        <div>&nbsp;</div>
        <Link to="/users">2018</Link>
        <div>&nbsp;</div>
        <Link to="/users">2017</Link>
        <div>&nbsp;</div>
        <Link to="/users">decade</Link>
        <div>&nbsp;</div>
        <Link to="/">home</Link>
      </Menu>
      <div className="site_title">Mitch's Favorite Music</div>
    </div>
  );
};
}


export default TopBar;
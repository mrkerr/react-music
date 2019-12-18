import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import YearContent from "./components/YearContent";
import * as ALBUMS from "./components/Constants"

import "./ShowAlbums.css"

class Year extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.year = this.props.year;
  }

  render() {
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `#243F50`,
      topBarHeight: 110,
      footerMenuHeight: 40
    };

    const menuItems = [
      { social: `twitter`, link: 'https://twitter.com/Kerr_ific', text: "twitter" },
      { social: `last.fm`, link: 'https://www.last.fm/user/kerr_ific', text: "lastfm" },
      { social: `spotify`, link: 'https://open.spotify.com/user/1226332507?si=2Htm36xZQl--xst6w28_GQ', text: "spotify" },
    ];

    return (
      <div
        style={{
          backgroundColor: styles.black(),
          minHeight: "100vh",
          position: "relative"
        }}
      >
        <TopBar styles={styles} />
        <YearContent styles={styles} year={this.year}/>
        <FooterMenu menuItems={menuItems} styles={styles}/>
      </div>
    );
  }
}

export default Year;
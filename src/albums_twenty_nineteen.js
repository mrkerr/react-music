import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Content from "./components/Content";
import * as ALBUMS from "./components/Constants"

import "./albums_twenty_nineteen.css"

class albums_twenty_nineteen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <Content styles={styles} albums={ALBUMS.TOP_TWENTY_ALBUMS_2019} special_mentions={ALBUMS.SPECIAL_MENTIONS_2019}/>
        <FooterMenu menuItems={menuItems} styles={styles} />
      </div>
    );
  }
}

export default albums_twenty_nineteen;
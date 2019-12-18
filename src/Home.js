import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import TextContent from "./components/TextContent";
import * as ALBUMS from "./components/Constants"
import {HOME_TEXT as HOME_TEXT} from "./components/Constants"


class Home extends Component {
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
        <TextContent styles={styles} page_text={HOME_TEXT} page_title={'Home'}/>
        <FooterMenu menuItems={menuItems} styles={styles} />
      </div>
    );
  }
}

export default Home;
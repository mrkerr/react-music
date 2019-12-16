import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Content from "./components/Content";
import * as ALBUMS from "./components/Constants"

import "./show_albums.css"

class ShowAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.year = this.props.location.year;
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

    const year = this.year === 'Decade' ? 'The Decade' : this.year

    const albums_arr = year === '2019' ? ALBUMS.TOP_TWENTY_ALBUMS_2019 : year === '2018' ? ALBUMS.TOP_TWENTY_ALBUMS_2018 : year === '2017' ? ALBUMS.TOP_TWENTY_ALBUMS_2017 : ALBUMS.TOP_TWENTY_ALBUMS_DECADE
    const special_mentions_arr = year === '2019' ? ALBUMS.SPECIAL_MENTIONS_2019 : year === '2018' ? ALBUMS.SPECIAL_MENTIONS_2018 : year === '2017' ? ALBUMS.SPECIAL_MENTIONS_2017 : ALBUMS.SPECIAL_MENTIONS_DECADE

    return (
      <div
        style={{
          backgroundColor: styles.black(),
          minHeight: "100vh",
          position: "relative"
        }}
      >
        <TopBar styles={styles} />
        <Content styles={styles} albums={albums_arr} special_mentions={special_mentions_arr} year={year}/>
        <FooterMenu menuItems={menuItems} styles={styles} />
      </div>
    );
  }
}

export default ShowAlbums;
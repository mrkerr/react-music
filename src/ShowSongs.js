import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import TextContent from "./components/TextContent";
import * as LIST_CONSTANTS from "./components/Constants"

import './ShowSongs.css'


class SHOW_SONGS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.year = this.props.location.year;

  }

  flatten_song = function (song_arr){
    song_arr.map(x => (x.artist + ' - ' + x.song + '\n'));
  }

  render() {


    const year = this.year === 'undefined' || this.year == null ? 'The Decade' : this.year

    const songs_arr = year === '2019' ? LIST_CONSTANTS.TOP_SIXTEEN_SONGS_2019 : year === '2018' ? LIST_CONSTANTS.TOP_SIXTEEN_SONGS_2018 : year === '2017' ? LIST_CONSTANTS.TOP_SIXTEEN_SONGS_2017 : year === '2016' ? LIST_CONSTANTS.TOP_SIXTEEN_SONGS_2016 : LIST_CONSTANTS.TOP_SIXTEEN_SONGS_DECADE

    const songs_flattened = songs_arr.map(x => (x.artist + ' - ' + x.song + '\n')).flat().toString();
    const songs_flattened_html = songs_flattened.split('\n').map((item, i) => {
      return <p key={i}>{item.replace(',', '')}</p>;
    });

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `#243F50`,
      topBarHeight: 110,
      footerMenuHeight: 40
    };

    const menuItems = [
      { link: 'https://twitter.com/Kerr_ific', has_icon: true},
      { link: 'https://www.last.fm/user/kerr_ific', has_icon: false},
      { link: 'https://open.spotify.com/user/1226332507?si=2Htm36xZQl--xst6w28_GQ', has_icon: true},
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
        <TextContent className={'show_songs_container'} styles={styles} page_text={songs_flattened_html} page_title={'Best Songs of ' + year} font={'Pacifico'}/>
        <FooterMenu menuItems={menuItems} styles={styles} />
      </div>
    );
  }
}

export default SHOW_SONGS;
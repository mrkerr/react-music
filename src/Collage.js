import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import CollageContent from "./components/CollageContent";



class Collage extends Component {
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
        <CollageContent styles={styles}/>
        <FooterMenu menuItems={menuItems} styles={styles} />
      </div>
    );
  }
}

export default Collage;
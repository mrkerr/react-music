import React, { Component } from "react";
import "./YearContent.css"
import {Link} from 'react-router-dom'
import Typed from 'react-typed';



class YearContent extends Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles;
    this.year = this.props.year;
  }
  render() {

  const year = this.year

  const contentStyle = {
    paddingTop: this.styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: this.styles.footerMenuHeight + 20,
    paddingLeft: 20,
    backgroundColor: this.styles.black(),
    color: 'white',
  };

  const toAlbum = { 
    pathname: "/ShowAlbums", 
    year: year, 
  };

  const toSong = { 
    pathname: "/ShowSongs", 
    year: year, 
  };

    return (
      <div style={contentStyle} >
        <div className={'year_container'}>
          <div className='year_title'><h1>
          <Typed
                    strings={[year + ' Favorites']}
                    typeSpeed={50}
                    showCursor={false}
                />
          </h1></div>
          <Link to={toSong}>
          <div className={'list_link_outer'} style={{ marginBottom: 40 }}>
            <div className={'list_link_inner'}>
              Top Songs
              </div>
          </div>
          </Link>
          <Link to={toAlbum}>
          <div className={'list_link_outer'} style={{ marginBottom: 40 }}>
            <div className={'list_link_inner'}>
              Top Albums
              </div>
          </div>
          </Link>
        </div>
      </div>
    );
  };
}

export default YearContent;
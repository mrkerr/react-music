import React, { Component } from "react";
import "./Content.css"
import Typed from 'react-typed';
import SpecialMentions from "./SpecialMentions"

class Content extends Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles
    this.state = { isOpen: false, album_id: null }
    this.albums = this.props.albums
    this.special_mentions = this.props.special_mentions
    this.year = this.props.year
  }
  render() {

  const contentStyle = {
    paddingTop: this.styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: this.styles.footerMenuHeight + 20,
    paddingLeft: 20,
    backgroundColor: this.styles.black(),
    color: 'white',
  };

  const year = this.year

    return (
      <div style={contentStyle} >
        <div className={'content_container'}>
          <div className='page_title'><h1>
          <Typed
                    strings={['Best Albums Of ' + (year || 'The Decade')]}
                    typeSpeed={80}
                    showCursor={false}
                />
            </h1></div>
          {this.albums.map((album_entry, i) => {
            return (
              <div className={'album'} key={i} style={{ marginBottom: 40 }}>
                <a target={"_blank"} href={album_entry.spotify_link}><h2 className={'album-title'} style={{ marginBottom: 0 }}>{album_entry.artist + ' - ' + album_entry.album}</h2></a>
                <img src={album_entry.cover_link} alt={album_entry.album}/>
              </div>
            );
          })}
        </div>
        <SpecialMentions special_mentions = {this.special_mentions}/>
      </div>
    );
  };
}

export default Content;
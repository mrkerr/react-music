import React, { Component } from "react";
import "./Content.css"
import SpecialMentions from "./SpecialMentions"
import AlbumTweet from "./AlbumTweet"
import {TOP_TWENTY_ALBUMS_2019 as TOP_ALBUMS} from "./Constants"

class Content extends Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles
    this.state = { isOpen: false, album_id: null };
  }

  toggleModal = (curr_album_name) => {
      this.setState({
        isOpen: !this.state.isOpen,
        tweet_id: curr_album_name
      });
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

    return (
      <div style={contentStyle} >
        <div className={'content_container'}>
          {[{artist: 'Florist', album: 'Emily Alone', link: 'https://ia803006.us.archive.org/3/items/mbid-3d0dbe3b-5c7b-4eb1-b106-7644775398d8/mbid-3d0dbe3b-5c7b-4eb1-b106-7644775398d8-23657992242.png'}].map((album_entry, i) => {
            return (
              <div className={'album'} key={i} style={{ marginBottom: 40 }}>
                <h2 className={'album-title'} style={{ marginBottom: 0 }}>{album_entry.artist + ' - ' + album_entry.album}</h2>
                <img src={album_entry.link} alt={album_entry.album} onClick={() => this.toggleModal('1204996433448972288')}/>
              </div>
            );
          })}
        </div>
        <SpecialMentions/>
        <AlbumTweet show={this.state.isOpen}
            onClose={this.toggleModal}>
            tweet_id={this.state.tweet_id}
        </AlbumTweet>
      </div>
    );
  };
}

export default Content;
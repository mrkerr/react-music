import React, { Component } from "react";
import "./SpecialMentions.css"

class SpecialMentions extends Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles
    this.special_mentions = this.props.special_mentions
  }

  render(){

    return (
        <div className={"centered"}>
          <h3>other cool albums (in no order)</h3>
            {this.special_mentions.map((album_entry, i) => {
            return (
              <div key={i}>
                <span><i>{album_entry.artist + ' - ' + album_entry.album}</i></span>
              </div>
            );
            })}
        </div>
    );
  };
}


export default SpecialMentions;
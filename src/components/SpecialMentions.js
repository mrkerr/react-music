import React from "react";
import {SPECIAL_MENTIONS_2019 as SPECIAL_MENTIONS} from "./Constants"

const SpecialMentions = () => {
  const contentStyle = {
    fontSize: '3vh',
    color: 'white',
    display: "flex",
    alignItems: "stretch",
    width: "100%",
  };

  return (
      <div>
        <h3>other cool albums (in no order)</h3>
          {SPECIAL_MENTIONS.map((album_entry, i) => {
          return (
            <div key={i}>
              <span><i>{album_entry.artist + ' - ' + album_entry.album}</i></span>
            </div>
          );
          })}
      </div>
  );
  };

export default SpecialMentions;
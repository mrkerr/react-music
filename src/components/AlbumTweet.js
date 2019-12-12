import React from "react";
import "./AlbumTweet.css"
import {SPECIAL_MENTIONS_2019 as SPECIAL_MENTIONS} from "./Constants"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import PropTypes from 'prop-types';

class AlbumTweet extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show || this.props.tweet_id == undefined) {
      return null;
    }

    const tweet_id = this.props.tweet_id;
  
    return (
      <div className='centered'>
        <TwitterTweetEmbed tweetId={tweet_id}/>
      </div>
  );
  }
}

AlbumTweet.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  tweet_id: PropTypes.string
};

export default AlbumTweet;
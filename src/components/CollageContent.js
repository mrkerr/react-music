import React, { Component } from "react";
import "./YearContent.css"
import {Link} from 'react-router-dom'

class CollageContent extends Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles
  }
  render() {

  const contentStyle = {
    paddingTop: this.styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: this.styles.footerMenuHeight + 20,
    paddingLeft: 20,
    backgroundColor: this.styles.black(),
    textAlign: 'center',
    height: 'auto',
    color: '#243F50'
  };

    return (
      <div style={contentStyle} >
        <div className='collage_title'><h1 className='collage_title'>Current last.fm collage</h1></div>
        <div className='collage_image'><img src={'http://www.tapmusic.net/collage.php?user=kerr_ific&type=7day&size=3x3&caption=true'}/></div>
      </div>
      
    );
  };
}

export default CollageContent;


{/* <div className={'collage_container'}>
<div className='year_title'><h1>Current last.fm collage</h1></div>
</div>
<div className={'collage_outer'}>
  <div className='collage_inner'>
    <img src={'http://www.tapmusic.net/collage.php?user=kerr_ific&type=7day&size=3x3&caption=true'}/></div>
</div> */}
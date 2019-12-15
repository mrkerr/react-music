import React, { Component } from "react";
import "./YearContent.css"
import {Link} from 'react-router-dom'

class YearContent extends Component {
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
    color: 'white',
  };

    return (
      <div style={contentStyle} >
        <div className={'year_container'}>
          <div className='year_title'><h1>Favorites of 2019</h1></div>
          <div className={'list_link_outer'} style={{ marginBottom: 40 }}>
            <div className={'list_link_inner'}>
              <Link className={'sf'} to="/users">Top Songs</Link>
              </div>
          </div>
          <div className={'list_link_outer'} style={{ marginBottom: 40 }}>
            <div className={'list_link_inner'}>
              <Link className={'sf'} to="/albums_twenty_nineteen">Top Albums</Link>
              </div>
          </div>
        </div>
      </div>
    );
  };
}

export default YearContent;
import React, { Component } from "react";
import "./YearContent.css"
import {Link} from 'react-router-dom'
import Typed from 'react-typed';
import logo from './output-onlinejpgtools.png';


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

  const newTo = { 
    pathname: "/ShowAlbums", 
    year: year, 
  };

    return (
      <div style={contentStyle} >
        <div className={'year_container'}>
          <div className='year_title'><h1><Typed
                    strings={[year + ' Favorites']}
                    typeSpeed={80}
                    showCursor={false}
                /></h1></div>
          <div className={'list_link_outer'} style={{ marginBottom: 40 }}>
            <div className={'list_link_inner'}>
              <Link to="/users">Top Songs</Link>
              </div>
          </div>
          <div className={'list_link_outer'} style={{ marginBottom: 40 }}>
            <div className={'list_link_inner'}>
              <Link to={newTo}>Top Albums</Link>
              </div>
          </div>
          <div className={'year_logo'}>
            <img src={logo} width={'100%'}/>
          </div>
        </div>
      </div>
    );
  };
}

export default YearContent;
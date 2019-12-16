import React, { Component } from "react";
import "./HomeContent.css"
import SpecialMentions from "./SpecialMentions"
import logo from './output-onlinejpgtools.png';
import Typed from 'react-typed';

class HomeContent extends Component {
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
    color: '#e5c0A9',
  };

    return (
      <div style={contentStyle} >
        <div className={'home_container'}>
          <div className='home_title'><h1>
          <Typed
                    strings={['Home']}
                    typeSpeed={80}
                    showCursor={false}
                />
            </h1></div>
          <div className={'home_outer_text'} style={{ marginBottom: 40 }}>
            <div className={'home_inner'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <div className='logo_image'>
              <img src={logo} width={'30%'}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default HomeContent;
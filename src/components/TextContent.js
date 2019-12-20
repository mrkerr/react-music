import React, { Component } from "react";
import "./HomeContent.css"
import logo from './output-onlinejpgtools.png';
import Typed from 'react-typed';


class TextContent extends Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles
    this.page_text = this.props.page_text
    this.page_title = this.props.page_title
    this.font = this.props.font || 'monospace'
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
  const page_text = this.page_text;
  const page_title = this.page_title;
  const font = this.font;

    return (
      <div style={contentStyle} >
        <div className={'home_container'}>
          <div className='home_title'><h1>
          <Typed
                    strings={[page_title]}
                    typeSpeed={50}
                    showCursor={false}
                />
            </h1></div>
          <div className={'home_outer_text'} style={{ marginBottom: 40, fontFamily: font}}>
            <div className={'home_inner'}>
              {page_text}
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

export default TextContent;
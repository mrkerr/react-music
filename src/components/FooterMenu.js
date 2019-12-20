
import React from "react";
import './FooterMenu.css';
import { SocialIcon } from 'react-social-icons';
import { labeledStatement } from "@babel/types";

const FooterMenu = ({ menuItems, styles }) => {

const footer_links = [];
menuItems.map((m) => {
  console.log(m);
  if (m.has_icon){
    footer_links.push(<SocialIcon className='footer_link' url={m.link} style={{ height: 25, width: 25 }}/>)
  }
  else{
    footer_links.push(<a src={m.link} className={'footer_link'}>last.fm</a>)
  }
})


  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundColor: "#54788f",
        position: "fixed",
        bottom: 0,
      }}
    >
      {footer_links.map((item, i) => {
        return (
          <div
            key={i}
            id={item.text}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
            className='footer_container'
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default FooterMenu;
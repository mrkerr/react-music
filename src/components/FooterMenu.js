
import React from "react";
import './FooterMenu.css'

const FooterMenu = ({ menuItems, styles }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundColor: "#e5c0A9",
        position: "fixed",
        bottom: 0,
      }}
    >
      {menuItems.map((item, i) => {
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
            <a style={{ fontSize: '3vh' }} href={item.link} className={'footer_link'} target={'_blank'}>{item.social}</a>
          </div>
        );
      })}
    </div>
  );
};

export default FooterMenu;
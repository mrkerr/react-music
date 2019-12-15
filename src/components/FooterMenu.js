
import React from "react";

const FooterMenu = ({ menuItems, styles }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundColor: "#54788f",
        color: "#eeeae7",
        position: "fixed",
        bottom: 0
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
          >
            <a style={{ fontSize: '3vh' }} href={item.link} target={'_blank'}>{item.social}</a>
          </div>
        );
      })}
    </div>
  );
};

export default FooterMenu;
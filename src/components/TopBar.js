import React from "react";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.black(),
    borderBottom: `1px solid ${styles.white(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
    color: "white",
    fontSize: '3vh'
  };

  return (
    <div style={topBarStyle}>
      Mitch's Favorite Music of 2019
      <span>{'\u2630'}</span>
    </div>
  );
};

export default TopBar;
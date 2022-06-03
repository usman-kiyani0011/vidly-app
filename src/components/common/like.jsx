import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa-heart fa-";
    if (this.props.liked) classes += "solid";
    else classes += "regular";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      ></i>
    );
  }
}

export default Like;

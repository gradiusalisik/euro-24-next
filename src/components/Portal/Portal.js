import React from "react";
import ReactDOM from "react-dom";

export default class Portal extends React.Component {
  componentDidMount() {
    this.element = document.createElement("div");
  }

  render() {
    if (this.element === undefined) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

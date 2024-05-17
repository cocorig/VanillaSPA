import { Component } from "../core/index.js";

export default class Ir extends Component {
  render() {
    const element = document.createElement(this.props.tag);
    element.setAttribute("class", "ir");
    element.innerText = this.props.text;
    return element;
  }
}

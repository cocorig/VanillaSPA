export default class Ir {
  constructor({ tag, text }) {
    this.tag = tag;
    this.text = text;
  }
  createElement() {
    const element = document.createElement(this.tag);
    element.setAttribute("class", "ir");
    element.innerText = this.text;
    return element;
  }
}

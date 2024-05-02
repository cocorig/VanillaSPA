export default class CartButton {
  constructor() {}

  render() {
    const cartButton = document.createElement("button");
    cartButton.setAttribute("class", "cart-button");
    return cartButton;
  }
}

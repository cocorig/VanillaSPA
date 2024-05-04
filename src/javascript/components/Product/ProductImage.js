import { Component } from "../../core/index.js";

export default class ProductImage extends Component {
  render() {
    const { thumbnailImg, productName } = this.props;
    const productImageContainer = document.createElement("div");
    productImageContainer.setAttribute("class", "img-container");

    const productImage = document.createElement("img");
    productImage.setAttribute("class", "product-img");
    productImage.setAttribute(
      "src",
      `https://test.api.weniv.co.kr/${thumbnailImg}`
    );
    productImage.setAttribute("alt", `${productName}`);
    productImageContainer.appendChild(productImage);

    return productImageContainer;
  }
}

import {
  ProductImage,
  ProductPrice,
  ProductName,
  ProductLikeButton,
} from "../Product/index.js";
import { Component } from "../../core/index.js";

export default class ProductCard extends Component {
  render() {
    const { id, productName, price, thumbnailImg, discountRate } = this.props;
    // console.log(this.item);
    // 전체 a 태그
    const product = document.createElement("a");
    product.setAttribute("href", `/detail/${id}`);
    product.setAttribute("class", "product");

    const productImage = new ProductImage({
      thumbnailImg,
      productName,
    }).render();
    const productNames = new ProductName({
      productName,
      size: "m",
    }).render();
    const productPrice = new ProductPrice({
      price,
      discountRate,
      size: "m",
    }).render();

    const productLikeButton = new ProductLikeButton({ productId: id }).render();

    product.appendChild(productImage);
    product.appendChild(productNames);
    product.appendChild(productPrice);
    product.appendChild(productLikeButton);

    return product;
  }
}

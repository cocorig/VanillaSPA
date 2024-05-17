import {
  ProductImage,
  ProductPrice,
  ProductName,
  ProductLikeButton,
} from "../Product/index.js";
import { Component, createComponent } from "../../core/index.js";

export default class ProductCard extends Component {
  render() {
    const { id, productName, price, thumbnailImg, discountRate } = this.props;

    // 전체 a 태그
    const product = document.createElement("a");
    product.setAttribute("href", `/detail/${id}`);
    product.setAttribute("class", "product");

    const productImage = createComponent(ProductImage, {
      thumbnailImg,
      productName,
    });

    const productNames = createComponent(ProductName, {
      productName,
      size: "m",
    });
    const productPrice = createComponent(ProductPrice, {
      price,
      discountRate,
      size: "m",
    });

    const productLikeButton = createComponent(ProductLikeButton, {
      productId: id,
    });

    product.append(productImage, productNames, productPrice, productLikeButton);

    return product;
  }
}

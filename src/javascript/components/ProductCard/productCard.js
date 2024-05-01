import {
  ProductImage,
  ProductPrice,
  ProductName,
  ProductLikeButton,
} from "../Product/index.js";
export default class ProductCard {
  constructor(item) {
    this.item = item;
  }
  render() {
    const { id, productName, price, thumbnailImg, discountRate } = this.item;

    // 전체 a 태그
    const product = document.createElement("a");
    product.setAttribute("href", `/detail/${id}`);
    product.setAttribute("class", "product");

    const productImage = new ProductImage({
      thumbnailImg,
      productName,
    }).render();
    const productNames = new ProductName(productName).render();
    const productPrice = new ProductPrice({ price, discountRate }).render();

    const productLikeButton = new ProductLikeButton().render();

    product.appendChild(productImage);
    product.appendChild(productNames);
    product.appendChild(productPrice);
    product.appendChild(productLikeButton);

    return product;
  }
}

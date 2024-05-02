export default class ProductImage {
  constructor({ thumbnailImg, productName }) {
    this.thumbnailImg = thumbnailImg;
    this.productName = productName;
  }

  render() {
    const productImageContainer = document.createElement("div");
    productImageContainer.setAttribute("class", "img-container");

    const productImage = document.createElement("img");
    productImage.setAttribute("class", "product-img");
    productImage.setAttribute(
      "src",
      `https://test.api.weniv.co.kr/${this.thumbnailImg}`
    );
    productImage.setAttribute("alt", `${this.productName}`);
    productImageContainer.appendChild(productImage);

    return productImageContainer;
  }
}

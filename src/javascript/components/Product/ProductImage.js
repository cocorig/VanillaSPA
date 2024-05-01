export default class ProductImage {
  constructor({ thumbnailImg, productName }) {
    this.thumbnailImg = thumbnailImg;
    this.productName = productName;
  }

  render() {
    // 이미지
    const productImageContainer = document.createElement("div");
    productImageContainer.setAttribute("class", "product-img");
    const productImage = document.createElement("img");
    productImage.setAttribute(
      "src",
      `https://test.api.weniv.co.kr/${this.thumbnailImg}`
    );
    productImage.setAttribute("alt", `${this.productName}`);
    productImageContainer.appendChild(productImage);

    return productImageContainer;
  }
}

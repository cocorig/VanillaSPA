export default class ProductName {
  constructor({ productName, size }) {
    this.productName = productName;
    this.size = size;
  }

  render() {
    // 상품 이름
    const productsName = document.createElement("strong");
    productsName.setAttribute("class", `ellipsis ${this.size}-product-name`);
    productsName.innerText = this.productName;

    return productsName;
  }
}

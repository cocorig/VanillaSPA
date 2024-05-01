export default class ProductName {
  constructor(name) {
    this.name = name;
  }

  render() {
    // 상품 이름
    const productsName = document.createElement("strong");
    productsName.setAttribute("class", "product-name");
    productsName.innerText = this.name;

    return productsName;
  }
}

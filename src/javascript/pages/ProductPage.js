import { ProductCard } from "../components/ProductCard/index.js";
export default class ProductPage {
  constructor() {
    this.mainElement = document.createElement("main");
    this.product = {};
  }

  //  전체 상품 정보 가져오기
  async getProductData() {
    const response = await fetch("https://test.api.weniv.co.kr/mall");
    const data = await response.json();
    this.product = await data;
  }

  // 상품 리스트 세팅하기 , 여기서 main 요소에 뿌려주는 작업을 할 것
  async setProductList() {
    await this.getProductData();
    this.mainElement.classList.add("product");
    const productPageHeader = document.createElement("h1");
    productPageHeader.setAttribute("class", "a11y-hidden");

    // productList를 표시할 요소 ul
    const productList = document.createElement("ul");
    productList.setAttribute("class", "product-list");

    this.mainElement.appendChild(productPageHeader);

    // 각 product 순회
    this.product.forEach((item) => {
      const productItem = document.createElement("li");
      productItem.setAttribute("class", "product-item");
      const productCard = new ProductCard(item);
      productItem.appendChild(productCard.render());
      productList.append(productItem);
    });
    this.mainElement.appendChild(productList);
  }

  render() {
    this.setProductList();
    return this.mainElement;
  }
}

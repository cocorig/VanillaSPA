import { getProductData } from "../api/product.js";
import { ProductCard } from "../components/ProductCard/index.js";
import { CartButton } from "../components/Button/index.js";
import { Ir } from "../utils/index.js";

export default class ProductPage {
  constructor() {
    this.mainElement = document.createElement("main");
    this.mainElement.setAttribute("id", "wrap");
    this.product = {};
  }

  // 상품 리스트 세팅하기 , 여기서 main 요소에 뿌려주는 작업을 할 것
  async setProductList() {
    this.product = await getProductData();
    const cartButton = new CartButton().render();

    // 전체 productWrap
    const productWrap = document.createElement("section");
    productWrap.setAttribute("id", "container");
    const productPageIr = new Ir({
      tag: "h1",
      text: "전체 상품 페이지",
    }).createElement();

    // productList를 표시할 요소 ul
    const productList = document.createElement("ul");
    productList.setAttribute("class", "product-list");
    productWrap.appendChild(productList);

    this.mainElement.appendChild(productPageIr);

    // 각 product 순회
    this.product.forEach((item) => {
      const productItem = document.createElement("li");
      productItem.setAttribute("class", "product-item");
      const productCard = new ProductCard(item);
      productItem.appendChild(productCard.render());
      productList.append(productItem);
    });
    // productWrap.appendChild(cartButton);
    this.mainElement.appendChild(productWrap);
  }

  render() {
    this.setProductList();
    return this.mainElement;
  }
}

import { getProductData } from "../api/product.js";
import { ProductCard } from "../components/ProductCard/index.js";
import { Ir } from "../utils/index.js";
import { Component } from "../core/index.js";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProductList();
  }

  async getProductList() {
    const item = await getProductData();
    this.setState({ products: item });
  }

  render() {
    const { products } = this.state;
    const mainElement = document.createElement("main");
    mainElement.setAttribute("id", "wrap");

    const productPageIr = new Ir({
      tag: "h1",
      text: "전체 상품 페이지",
    }).createElement();
    mainElement.appendChild(productPageIr);

    const productList = document.createElement("ul");
    productList.setAttribute("class", "product-list");

    products.forEach((item) => {
      const productItem = document.createElement("li");
      productItem.setAttribute("class", "product-item");
      if (item.stockCount < 1) {
        productItem.classList.add("sold-out");
      }
      const productCard = new ProductCard(item);

      productItem.appendChild(productCard.render());
      productList.append(productItem);
    });
    mainElement.appendChild(productList);
    return mainElement;
  }
}

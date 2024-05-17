import { getProductData } from "../api/product.js";
import { ProductCard } from "../components/ProductCard/index.js";
import { Ir } from "../utils/index.js";
import { Component, createComponent } from "../core/index.js";

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

    const productPageIr = createComponent(Ir, {
      tag: "h1",
      text: "전체 상품 페이지",
    });

    const productList = document.createElement("ul");
    productList.setAttribute("class", "product-list");

    products.forEach((item) => {
      const productItem = document.createElement("li");
      productItem.setAttribute("class", "product-item");
      if (item.stockCount < 1) {
        productItem.classList.add("sold-out");
      }
      const productCard = createComponent(ProductCard, item);
      productItem.appendChild(productCard);
      productList.appendChild(productItem);
    });

    mainElement.append(productPageIr, productList);

    return mainElement;
  }
}

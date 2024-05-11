import { getProductIdData } from "../api/product.js";
import { Component } from "../core/index.js";
import { ProductInfo } from "../components/Product/index.js";
import { Ir } from "../utils/index.js";
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props); // {id: '1'}
    this.state = {
      product: [],
    };
    this.setDetailProduct();
  }
  async setDetailProduct() {
    const item = await getProductIdData(this.props.id);
    this.setState({ product: item });
  }

  render() {
    console.log(this.state.product);
    const { modDate, stockCount } = this.state.product;
    const ProductModal = document.createElement("article");
    ProductModal.setAttribute("class", "productModal");
    const productDetailPagIr = new Ir({
      tag: "h1",
      text: "전체 상세 페이지",
    }).createElement();
    ProductModal.appendChild(productDetailPagIr);

    if (modDate && stockCount !== undefined) {
      const productInfo = new ProductInfo({
        modDate,
        stockCount,
      }).render();
      ProductModal.appendChild(productInfo);
    }

    return ProductModal;
  }
}

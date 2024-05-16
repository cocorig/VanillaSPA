import { getProductIdData } from "../api/product.js";
import { Component } from "../core/index.js";
import { Ir } from "../utils/index.js";
import {
  ProductBasicInfo,
  ProductDetailInfo,
} from "../components/ProductDetail/index.js";
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props); // {id: '1'}
    this.state = {
      product: [],
      isLoaded: false,
    };
    this.setDetailProduct();
  }
  async setDetailProduct() {
    const item = await getProductIdData(this.props.id);
    this.setState({ product: item, isLoaded: true });
  }

  render() {
    const container = document.createElement("article");
    container.setAttribute("class", "product-detail");
    const productDetailPagIr = new Ir({
      tag: "h1",
      text: "상품 상세 페이지",
    }).createElement();

    const contentWrap = document.createElement("div");
    contentWrap.setAttribute("class", "content-wrap");

    // 여기서 데이터를 받아오면 props로 보내기 위해 처리
    if (this.state.isLoaded) {
      // 기본정보
      const productBasicInfo = new ProductBasicInfo({
        product: this.state.product,
      });
      // 상세정보
      const productDetailInfo = new ProductDetailInfo({
        product: this.state.product,
      });
      contentWrap.append(productBasicInfo.setup(), productDetailInfo.setup());
    }

    container.append(productDetailPagIr, contentWrap);

    return container;
  }
}

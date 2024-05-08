import { getProductIdData } from "../api/product.js";
import { Component } from "../core/index.js";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props); //{id: '1'}
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
    const a = document.createElement("a");
    a.setAttribute("href", "./detail/2");
    a.innerText = "라우터 테스트";

    return a;
  }
}

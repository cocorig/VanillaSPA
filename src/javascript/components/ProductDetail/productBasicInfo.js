import { Component, createComponent } from "../../core/index.js";
import { Ir } from "../../utils/index.js";
export default class productBasicInfo extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    const BasicInfoIr = createComponent(Ir, {
      tag: "h2",
      text: "상품 기본 정보",
    });

    const basicInfoSection = document.createElement("section");
    console.log(this.props.product.id);
    basicInfoSection.append(BasicInfoIr);
    return basicInfoSection;
  }
}

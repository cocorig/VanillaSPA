import { Component } from "../../core/index.js";
import { Ir } from "../../utils/index.js";
import { ProductInfo } from "../Product/index.js";

export default class productDetailInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.product);
    const { modDate, stockCount, detailInfoImage } = this.props.product;

    const detailInfoSection = document.createElement("section");
    detailInfoSection.setAttribute("class", "product-detail-info");

    const sectionIr = new Ir({
      tag: "h2",
      text: "상품 상세 정보",
    }).createElement();

    // 상품 정보 (번호,재고수량)
    const productInfo = new ProductInfo({
      modDate,
      stockCount,
    }).setup();
    detailInfoSection.appendChild(productInfo);

    // 상품 상세 이미지
    const productContent = document.createElement("div");
    productContent.setAttribute("class", "product-content");

    detailInfoImage.forEach((src) => {
      const imgSrc = `https://test.api.weniv.co.kr/${src}`;
      const imgItem = document.createElement("img");
      imgItem.setAttribute("src", imgSrc);
      imgItem.setAttribute("alt", "상품 소개 이미지");

      productContent.append(imgItem);
    });

    detailInfoSection.appendChild(productContent);
    return detailInfoSection;
  }
}

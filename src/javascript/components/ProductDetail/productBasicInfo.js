import { Component, createComponent } from "../../core/index.js";
import { Ir } from "../../utils/index.js";
import {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductLikeButton,
} from "../Product/index.js";
import { OrderForm } from "../ProductOrder/index.js";
export default class productBasicInfo extends Component {
  render() {
    const { price, productName, thumbnailImg, discountRate } =
      this.props.product;
    const BasicInfoIr = createComponent(Ir, {
      tag: "h2",
      text: "상품 기본 정보",
    });
    const basicInfoSection = document.createElement("section");
    basicInfoSection.setAttribute("class", "product-basic");

    // 종류,옵션 부분
    const productInfoContainer = document.createElement("div");
    productInfoContainer.setAttribute("class", "product-infoContainer");

    // 상품 이미지
    const productImage = createComponent(ProductImage, {
      thumbnailImg,
      productName,
    });

    const productNamePriceContainer = document.createElement("div");
    productNamePriceContainer.setAttribute(
      "class",
      "product-name-price-Container"
    );

    // 이름
    const productNames = createComponent(ProductName, {
      productName,
      size: "l",
    });
    // 가격
    const productPrice = createComponent(ProductPrice, {
      price,
      discountRate,
      size: "m",
    });
    productNamePriceContainer.append(productNames, productPrice);
    productInfoContainer.append(productNamePriceContainer);
    //  주문 컴포넌트
    const ProductOrderForm = createComponent(OrderForm, {
      product: this.props.product,
    });
    // 장바구니 버튼
    // 찜 버튼
    basicInfoSection.append(
      BasicInfoIr,
      productImage,
      productInfoContainer,
      ProductOrderForm
    );
    return basicInfoSection;
  }
}

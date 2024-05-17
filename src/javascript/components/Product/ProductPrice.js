import { Ir } from "../../utils/index.js";
import { Component, createComponent } from "../../core/index.js";
export default class ProductPrice extends Component {
  // 할인율 계산
  calculateDiscountedPrice(price, discountRate) {
    return discountRate ? (price * (100 - discountRate)) / 100 : price;
  }

  // 가격 쉼표 표시 메
  formatPrice(price) {
    return price.toLocaleString();
  }

  render() {
    const { price, discountRate, size } = this.props;
    const productPriceContainer = document.createElement("div");
    productPriceContainer.setAttribute("class", "product-price");
    const priceType = document.createElement("span");
    priceType.innerText = "원";

    // 가격 표시
    const productPrice = document.createElement("strong");
    productPrice.setAttribute("class", `price ${size}-price`);
    productPriceContainer.appendChild(productPrice);

    let displayedPrice = price;

    // 할인율이 있는 경우
    if (discountRate) {
      displayedPrice = this.calculateDiscountedPrice(price, discountRate);

      const priceIr = createComponent(Ir, {
        tag: "span",
        text: "할인 전 가격",
      });

      const discountIr = createComponent(Ir, {
        tag: "span",
        text: "할인",
      });

      // 원래 가격 표시 (del 태그 사용)
      const originalPriceDel = document.createElement("del");
      originalPriceDel.setAttribute("class", "del-price");
      const originalPrice = document.createElement("span");
      originalPrice.innerText = this.formatPrice(price);
      originalPriceDel.append(
        originalPrice,
        priceType.cloneNode(true),
        priceIr
      );

      // 할인율 %
      const discountRateElement = document.createElement("strong");
      discountRateElement.setAttribute("class", "price percent-price");
      discountRateElement.innerText = `${discountRate}%`;
      discountRateElement.appendChild(discountIr);

      productPriceContainer.append(originalPriceDel, discountRateElement);
    }
    productPrice.innerText = this.formatPrice(displayedPrice);
    productPrice.appendChild(priceType);

    return productPriceContainer;
  }
}

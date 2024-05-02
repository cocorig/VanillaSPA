import { Ir } from "../../utils/index.js";

export default class ProductPrice {
  constructor({ price, discountRate, size }) {
    this.price = price;
    this.discountRate = discountRate;
    this.size = size;
  }
  // 할인율 계산
  calculateDiscountedPrice(price, discountRate) {
    return discountRate ? (price * (100 - discountRate)) / 100 : price;
  }

  // 가격 쉼표 표시 메
  formatPrice(price) {
    return price.toLocaleString();
  }

  render() {
    const productPriceContainer = document.createElement("div");
    productPriceContainer.setAttribute("class", "product-price");

    // 가격 계산
    const price = this.calculateDiscountedPrice(this.price, this.discountRate);

    const priceType = document.createElement("span");
    priceType.innerText = "원";

    // 가격 표시
    const productPrice = document.createElement("strong");
    productPrice.setAttribute("class", `price ${this.size}-price`);
    productPrice.innerText = this.formatPrice(price);
    productPrice.appendChild(priceType);

    productPriceContainer.appendChild(productPrice);

    // 할인율이 있는 경우
    if (this.discountRate) {
      const priceIr = new Ir({
        tag: "span",
        text: "할인 전 가격",
      }).createElement();
      const discountIr = new Ir({
        tag: "span",
        text: "할인",
      }).createElement();

      // 원래 가격 표시 (del 태그 사용)
      const originalPriceDel = document.createElement("del");
      originalPriceDel.setAttribute("class", "del-price");
      const originalPrice = document.createElement("span");
      originalPrice.innerText = this.formatPrice(this.price);
      originalPriceDel.append(
        originalPrice,
        priceType.cloneNode(true),
        priceIr
      );

      // 할인율 %
      const discountRateElement = document.createElement("strong");
      discountRateElement.setAttribute("class", "price percent-price");
      discountRateElement.innerText = `${this.discountRate}%`;
      discountRateElement.appendChild(discountIr);

      productPriceContainer.appendChild(originalPriceDel);
      productPriceContainer.appendChild(discountRateElement);
    }

    return productPriceContainer;
  }
}

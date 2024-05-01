export default class ProductPrice {
  constructor({ price, discountRate }) {
    this.price = price;
    this.discountRate = discountRate;
  }
  // 할인율 계산 메서드
  calculateDiscountedPrice(price, discountRate) {
    if (discountRate) {
      return (price * (100 - discountRate)) / 100;
    } else {
      return price; // 할인율이 없으면 원래 가격 반환
    }
  }
  render() {
    const discountedPrice = this.calculateDiscountedPrice(
      this.price,
      this.discountRate
    );
    // 가격
    const productPriceContainer = document.createElement("div");
    productPriceContainer.setAttribute("class", "product-price");

    const productPrice = document.createElement("strong");
    productPrice.setAttribute("class", "price m-price");
    productPrice.innerText = this.price;

    const priceType = document.createElement("span");
    priceType.innerText = "원";

    productPrice.appendChild(priceType);

    productPriceContainer.appendChild(productPrice);
    return productPriceContainer;
  }
}

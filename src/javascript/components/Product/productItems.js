export default class ProductItem {
  constructor(item) {
    this.item = item;
  }

  render() {
    const { id, productName, price, thumbnailImg, discountRate } = this.item;

    // 반환할 li
    const productItem = document.createElement("li");

    productCard.appendChild(productImageContainer);
    productCard.appendChild(productsName);
    productCard.appendChild(productPriceContainer);

    productItem.appendChild(productCard);

    // productItem.innerHTML = `
    //   <a href="/detail/${id}" class="product-item">
    //   <div class="product-img">
    //     <img
    //       src="https://test.api.weniv.co.kr/${thumbnailImg}"
    //       alt="${productName}"
    //     />
    //   </div>
    //   <!-- 하단 정보 -->
    //   <div>
    //     <strong class="product-name">${productName}</strong>
    //   </div>
    //   <div class="product-info">
    //     <!-- 원가 -->
    //     <strong class="product-price"> <span> ${price}</span>원 </strong>
    //     <!-- 할인 전 가격 -->
    //     <del>
    //       <span class="a11y-hidden">할인 전 가격</span>
    //       <span class="original-price"> ${discountedPrice}</span>원
    //     </del>
    //     <!-- 할인율  -->
    //     <strong class="discount-rate">
    //       ${discountRate}%
    //       <span class="a11y-hidden">할인</span>
    //     </strong>
    //   </div>
    // </a>
    //   `;
    return productItem;
  }
}

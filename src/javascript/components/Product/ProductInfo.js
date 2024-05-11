import { Component } from "../../core/index.js";

export default class ProductInfo extends Component {
  formatProductNumber(productNumber) {
    return productNumber.replace(/-/g, "");
  }

  render() {
    const { modDate, stockCount } = this.props;

    const formattedProductNumber = this.formatProductNumber(modDate);
    const formattedStockCount = stockCount === 0 ? "-" : `${stockCount}개`;

    const items = [
      { label: "상품 번호", value: formattedProductNumber },
      { label: "재고 수량", value: formattedStockCount },
    ];

    // container
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info");

    // title
    const productInfoTitle = document.createElement("strong");
    productInfoTitle.setAttribute("class", "product-info-title");
    productInfoTitle.innerText = "상품 정보";

    const productInfoTable = document.createElement("table");
    const productInfoTbody = document.createElement("tbody");
    const productInfoTr = document.createElement("tr");

    items.forEach((item) => {
      // Th
      const productInfoTh = document.createElement("th");
      productInfoTh.setAttribute("class", "product-info-label");
      productInfoTh.innerText = item.label;

      // Td
      const productInfoTd = document.createElement("td");
      productInfoTd.setAttribute("class", "product-info-value");
      productInfoTd.innerText = item.value;

      productInfoTr.append(productInfoTh, productInfoTd);
    });

    productInfoTbody.appendChild(productInfoTr);

    productInfoTable.appendChild(productInfoTbody);

    productInfo.appendChild(productInfoTitle);
    productInfo.appendChild(productInfoTable);

    return productInfo;
  }
}

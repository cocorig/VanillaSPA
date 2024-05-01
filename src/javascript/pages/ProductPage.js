//https://test.api.weniv.co.kr/mall
export default class ProductPage {
  constructor() {
    this.product = {};
  }

  render() {
    const container = document.createElement("div");
    const element = document.createElement("h1");
    element.innerText = "상품목록 페이지";

    const anchor1 = document.createElement("a");
    anchor1.href = "/detail/1";
    anchor1.innerText = "상세페이지 1 이동";

    const anchor2 = document.createElement("a");
    anchor2.href = "/detail/2";
    anchor2.innerText = "상세페이지 2 이동";
    const anchor3 = document.createElement("a");
    anchor3.href = "/detail/3";
    anchor3.innerText = "상세페이지 3 이동";
    container.appendChild(anchor1);
    container.appendChild(anchor2);
    container.appendChild(anchor3);
    container.appendChild(element);

    return container;
  }
}

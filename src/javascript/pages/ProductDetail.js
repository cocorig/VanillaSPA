// https://test.api.weniv.co.kr/mall/:id

export default class ProductDetail {
  // parma을 보고 id를 가져와야 함
  constructor(id) {
    console.log(id);
    this.id = id;
  }

  render() {
    const container = document.createElement("div");
    const element = document.createElement("h1");
    element.innerText = `${this.id}상품상세 페이지`;

    const anchor = document.createElement("a");
    anchor.href = "/";
    anchor.innerText = "상품목록 페이지 이동";

    container.appendChild(anchor);
    container.appendChild(element);

    return container;
  }
}

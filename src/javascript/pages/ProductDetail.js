import { getProductIdData } from "../api/product.js";

export default class ProductDetail {
  // parma을 보고 id를 가져와야 함
  constructor(id) {
    this.id = id;
    console.log(this.id);
    this.data = [];
  }

  // 상품 세팅하기
  async setDetailProduct() {
    this.data = await getProductIdData(this.id);
    console.log(this.data);
  }

  render() {
    this.setDetailProduct();

    const a = document.createElement("a");
    a.setAttribute("href", "./detail/2");
    a.innerText = "라우터 테스트";

    return a;
  }
}

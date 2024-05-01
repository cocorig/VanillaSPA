import { Router } from "./utils/index.js";
import { ProductDetail, ProductPage, Cart } from "./pages/index.js";
export default class App {
  constructor(props) {
    // config를 props로 받아서 rootElement에 렌더링
    this.props = props;
  }

  async setup() {
    const { el } = this.props;
    const rootElement = el; // #root

    // 연결된 경로에 따라서 각각의 페이지들이 root 앨리먼트 안에 들어가게 설정해야 함
    this.router = new Router({
      "/": ProductPage,
      "/detail:id": ProductDetail,
      "/cart": Cart,
      "/order": Cart,
    });

    this.router.init(rootElement, (callback) => callback());
  }
}

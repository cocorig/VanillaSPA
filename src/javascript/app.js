import { Router } from "./utils/index.js";

export default class App {
  constructor(props) {
    // config를 props로 받아서 rootElement에 렌더링
    this.props = props;
  }

  async setup() {
    const { el } = this.props;
    const rootElement = el;

    this.router = new Router({
      // 각 페이지의 경로 설정
    });

    this.router.init(rootElement, (callback) => callback());
  }
}

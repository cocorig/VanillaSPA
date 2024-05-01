/**
 * @description 설정한 url 경로에 따라 해당하는 페이지를 렌더링하는 역할을 수행
 * @properties {routes} url 경로에와 해당하는 페이지 클래스를 매핑한 객체
 * @method
 *    constructor(routes) 라우터 객체 초기화,  동적 경로를 정적 경로로 변환
 *
 *    init(rootElementId) root element를 설정, 브라우저 이벤트를 처리하여 라우팅
 *    기능을 활성화
 *
 *    routePush(pathname) 주어진 경로로 페이지를 이동
 *
 *    routing(pathname) 주어진 경로에 따라 페이지를 가져와서 화면에 렌더링
 *
 *    render(page)  주어진 페이지를 화면에 출력
 */
export default class Router {
  constructor(routes) {
    if (!routes) {
      console.error("can not initialize routes, need routes!");
    }
    this.routes = routes;

    // 동적 경로를 처리
    for (const key in routes) {
      const route = routes[key];
      if (key.indexOf(":") > -1) {
        const [_, routeName, param] = key.split("/");
        this.routes["/" + routeName] = route;
        delete this.routes[key];
      }
    }
    console.log(this.routes);
  }

  /**
   * 라우터 초기화 메서드
   * @param {*} rootElementId 렌더링될 페이지들의 root element id (#root)
   */
  init(rootElementId) {
    if (!rootElementId) {
      console.error("can not initialize Route, not define rootElementId");
      return null;
    }

    this.rootElementId = rootElementId;
    // 1. routing : 주소를 파싱한 후, 해당하는 페이지를 가져와서 이 페이지의 값들을 화면에 뿌려주는 역할
    this.routing(window.location.pathname);

    // 2. 클릭 이벤트를 처리
    window.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
        e.preventDefault();
        // 2.1 routePush: a 태그 경로를 보낸다.
        this.routePush(e.target.href);
      }
    });

    // 3. 뒤로가기를 눌렀을 때 routing에 해당 주소를 다시 보내줌
    window.onpopstate = () => this.routing(window.location.pathname);
  }

  /**
   * 해당 경로를 받고, 경로에 따른 값들을 반환해야 하기 때문에 routing에 경로를 보내고, 해당 경로만 pushState로 세션 기록 스택에 항목을 추가
   * @param {*} pathname - 이동할 페이지의 경로
   */
  routePush(pathname) {
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname); // ** a태그를 눌렀을 때 실행되기 때문에 routing에 현재 경로를 보내줘야 경로에 맞는 페이지가 반환된다
  }

  /**
   * 주어진 경로에 따라 페이지를 가져와서 화면에 렌더링
   * @description 뒤에 param을 파싱하기 위해  ex) pathname= /detail/1 ,routeName= detail, param = 1
   * @param {*} pathname - 라우팅할 페이지의 경로, window.location.pathname
   */
  routing(pathname) {
    console.log(pathname);
    const [_, routeName, param] = pathname.split("/");
    let page = "";

    // 설정한 경로가 있는지 확인하고 해당 페이지를 가져와서 렌더링
    if (this.routes[pathname]) {
      // 설정한 경로가 있는지 확인
      //  const component =  new ProductPage
      const component = new this.routes[pathname]();
      page = component.render(); // page로 받아서 root로 반환

      // 동적인 경로의 경우 해당하는 param을 가져와서 페이지 렌더링
    } else if (param) {
      //new ProductDetail(param)
      const component = new this.routes["/" + routeName](param);
      page = component.render(); // page로 받아서 root로 반환
    }

    // page가 있을 때 Router render에 page를 보냄
    if (page) {
      this.render(page);
    }
  }

  /**
   * 페이지를 화면에 출력
   * @param {*} page - 화면에 출력할 페이지
   */
  render(page) {
    const rootElement = document.querySelector(this.rootElementId);
    rootElement.innerHTML = "";
    rootElement.appendChild(page);
  }
}

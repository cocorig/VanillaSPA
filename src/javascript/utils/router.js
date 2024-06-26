import { createComponent } from "../core/index.js";
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
    this.routeParam = {};
    // 동적 경로를 처리
    for (const key in routes) {
      const route = routes[key];
      if (key.indexOf(":") > -1) {
        const [routeName, param] = key.split(":");
        this.routeParam[routeName] = param;
        this.routes[routeName] = route;
        delete this.routes[key];
      }
    }
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
      const anchor = e.target.closest("a");
      if (anchor) {
        e.preventDefault();
        this.routePush(anchor.href);
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
    this.routing(window.location.pathname);
  }

  /**
   * 주어진 경로에 따라 페이지를 가져와서 화면에 렌더링
   * @description 뒤에 param을 파싱하기 위해  ex) pathname= /detail/1 ,routeName= detail, param = 1
   * @param {*} pathname - 라우팅할 페이지의 경로, window.location.pathname
   */
  routing(pathname) {
    const [_, routeName, param] = pathname.split("/");
    let page = "null";

    if (this.routes[pathname]) {
      page = createComponent(this.routes[pathname]);
    } else if (param) {
      // param id를 {id : 2} 객체 형태로 넣어주기 위해서 this.routeParam객체를 이용
      const routeParam = { [this.routeParam[`/${routeName}`]]: param };
      page = createComponent(this.routes["/" + routeName], routeParam);
    }
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

/* 

a 태그를 감싼 모든 태그를 클릭하면 a의 기본 이벤트인 페이지 이동이 발생한다.

  window.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
        e.preventDefault();
        this.routePush(e.target.href);
      }
  });
이때 다른 a태그가 포함한 요소들을 클릭하면 다른 태그를 포함한 e.target.href 경로는 파싱하지 못했기 때문에 에러가 발생한다. 반면 다른 태그가 포함하지 않은 a 태그만의 영역을 클릭하면 잘 파싱된다. 이런 문제로 링크 클릭했을 때는 closest() method를 사용해 가장 가가운 조상의 값을 요소를 반횐하는 것으로 아래와 같이 수정해야 한다.
closest() method는 일치하는 요소를 찾을 때 까지 위쪽 (부모 방향으로) 순회한다.


  window.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        e.preventDefault();
        this.routePush(e.target.closest("a").href);
      }
  });

  https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */

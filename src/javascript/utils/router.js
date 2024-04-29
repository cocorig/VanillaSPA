class Router {
  constructor(routes) {
    if (!routes) {
    }
    this.routes = routes;
  }

  init(rootElement) {
    if (!rootElement) {
    }
    this.rootElementId = rootElementId;
    this.routing(window.location.pathname);

    window.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
        e.preventDefault();
        this.routePush(e.target.href);
      }
    });

    window.onpopstate = () => this.routing(window.location.pathname);
  }

  routePush(pathname) {
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname);
  }
  //  뒤에 param을 파싱하기 위해
  routing(pathname) {
    const [_, routeName, ...param] = pathname.split("/");
    let page = "";
    if (this.routes[pathname]) {
      const component = new this.routes[pathname]();

      page = component.render();
    }

    if (page) {
      this.render(page);
    }
  }

  render(page) {
    const rootElement = document.querySelector(this.rootElementId);
    rootElement.innerHTML = "";
    rootElement.appendChild(page);
  }
}

export default Router;

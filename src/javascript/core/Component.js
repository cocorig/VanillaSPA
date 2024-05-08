export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.lastRendered = null;
  }

  // 1. 최초 초기화   2. 내부적으로 render실행 -> 마지막 렌더링 결과
  setup() {
    const rendered = this.render();
    this.lastRendered = rendered;
    return rendered;
  }
  // 3. state가 바뀌면 새로운 state에 맞춰 다시 렌더링 해줘야 함
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.updater();
  }

  //3. 새로운 상태를 반영하기 위해 내부적으로 render실행
  updater() {
    //console.log(this.lastRendered); // 이전 상태
    const rendered = this.render(); // 현재 상태
    // console.log(rendered); // 바뀐 상태를 다시 렌더해서 가져옴  -> 이걸 다시 렌더해줘야함
    this.lastRendered.replaceWith(rendered); // 이전 상태가 있던 this.lastRendered를  rendered(바뀐 상태)로 바꿔줌
    this.lastRendered = rendered;
  }
  addEvent(eventType, selector, callback) {
    selector.addEventListener(eventType, (event) => {
      event.preventDefault();
      event.stopPropagation();
      callback(event);
    });
  }

  render() {}
}

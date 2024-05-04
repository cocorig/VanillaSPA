export default class Component {
  // 각각의 컴포넌트에서 사용할 속성들을 하나의 객체로 받는 역할로 지정함
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  //  필요한 요소만들고 컴포넌트를 생성,렌더링,조작하는 역할
  render() {}
}

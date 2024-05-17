const createComponent = (Component, props) => {
  const component = new Component(props);
  return component.setup();
};
export default createComponent;

// 반환예시 :  new ProductBasicInfo({ product: this.state.product}).setup()

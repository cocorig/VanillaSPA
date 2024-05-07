export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.lastRendered = null;
    this.setup();
  }

  setup() {
    const rendered = this.render();
    this.lastRendered = rendered;
    return rendered;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.updater();
  }

  updater() {
    const rendered = this.render();
    this.lastRendered.replaceWith(rendered);
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

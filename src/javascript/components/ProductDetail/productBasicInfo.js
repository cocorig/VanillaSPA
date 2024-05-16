import { Component } from "../../core/index.js";
export default class productBasicInfo extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    const basicInfoSection = document.createElement("section");
    basicInfoSection.setAttribute("class", "product-basic-info");

    return basicInfoSection;
  }
}

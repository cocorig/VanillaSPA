import { Component } from "../../core/index.js";
export default class ProductName extends Component {
  // constructor(props) { 이렇게 받으면 사용가능 , 생략가능!!
  //   console.log(props);
  //   super(props); 상속자의 클래스를 실행
  // }
  render() {
    const { productName, size } = this.props;
    const productsName = document.createElement("strong");
    productsName.setAttribute("class", `ellipsis ${size}-product-name`);
    productsName.innerText = productName;

    return productsName;
  }
}

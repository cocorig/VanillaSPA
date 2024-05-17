import { Ir } from "../../utils/index.js";
import { Component, createComponent } from "../../core/index.js";

export default class ProductLikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.checkLikeList(),
    };
  }

  checkLikeList() {
    if (!localStorage.getItem("likeList")) {
      localStorage.setItem("likeList", JSON.stringify([]));
    }
    const likeList = JSON.parse(localStorage.getItem("likeList"));
    return likeList.includes(this.props.productId);
  }

  changeLiked() {
    const likeList = JSON.parse(localStorage.getItem("likeList"));

    const updatedList = this.checkLikeList()
      ? likeList.filter((id) => id !== this.props.productId)
      : [...likeList, this.props.productId];

    localStorage.setItem("likeList", JSON.stringify(updatedList));

    this.setState({ liked: this.checkLikeList() });
  }

  render() {
    const likeButton = document.createElement("button");
    likeButton.setAttribute("class", "like-button");

    this.state.liked && likeButton.classList.add("on");

    const likeButtonIr = createComponent(Ir, {
      tag: "span",
      text: "좋아요 버튼",
    });
    likeButton.appendChild(likeButtonIr);

    this.addEvent("click", likeButton, () => this.changeLiked());

    return likeButton;
  }
}

/*
      e.preventDefault();  html 기본동작, 새로고침 ,submit 동작을 막는다.
      e.stopPropagation();  기본 동작 외 이벤트의 전파를 막는다. 클릭했을 때 url이 이동하지 않도록 버블링 중단

      로컬스토리지 값은 전부 문자열로 들어가기 때문에 [] 배열을 넣으면 '' 그냥 빈 문자열로 변환된다. 따라서 SON.stringify로 객체,배열을 json 문자열로 변환해야 함

      ex ) 객체, 배열을 JSON 문자열로 변환
      const obj = {name : 'anna',  age : 20}
      const arr = [1, 2, 3]

      const objString = JSON.stringify(obj);
      const arrString = JSON.stringify(arr);


      ex) json 문자열을 객체,배열로 변환

      const personObj = (personString);
      const numArr = JSON.parse(numString); 


      따라서 로컬스토리지에 값을 저장하려면 문자열로 바꿔서 객체나 배열을 저장해야 하고(JSON.stringify), 문자열로 저장된 객체나 배열로 변환해서 값을 가져올때  JSON.parse를 사용한다.

 */

import { Ir } from "../../utils/index.js";
import { Component } from "../../core/index.js";
export default class ProductLikeButton extends Component {
  // 상품의 id를 받아서 true인지, false인지
  constructor(props) {
    super(props);
    this.isLiked = this.checkLikeList(); // 로컬스토리지의 반환값으로 초기 세팅
  }

  // 현재 제품 id가 좋아요 목록에 있는지 확인
  checkLikeList() {
    // 로컬스토리지에  초기 likeList 배열 설정
    if (!localStorage.getItem("likeList")) {
      localStorage.setItem("likeList", JSON.stringify([]));
    }
    // 이미 있는 경우 해당 아이디가 이 배열에 있는지 확인하기위해 likeList 값을 가져온다.
    const likeList = JSON.parse(localStorage.getItem("likeList"));
    // 콘솔로 배열로 나타나지만 실제론 문자열 타입이므로 parse해줘야 함
    return likeList.includes(this.props.productId);
  }

  addEventListener(likeButton) {
    likeButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // 버블링 중단

      const likeList = JSON.parse(localStorage.getItem("likeList"));
      this.isLiked = !this.isLiked;

      this.isLiked && likeList.push(this.props.productId);
      const newLikeList = this.isLiked
        ? likeList
        : likeList.filter((item) => this.props.productId !== item);
      localStorage.setItem("likeList", JSON.stringify(newLikeList));

      this.isLiked
        ? e.target.classList.add("on")
        : e.target.classList.remove("on");
    });
  }

  render() {
    const likeButton = document.createElement("button");
    likeButton.setAttribute("class", "like-btn");

    this.isLiked && likeButton.classList.add("on");

    const likeButtonIr = new Ir({
      tag: "span",
      text: "좋아요 버튼",
    }).createElement();

    likeButton.appendChild(likeButtonIr);
    this.addEventListener(likeButton);

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

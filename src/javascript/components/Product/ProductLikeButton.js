export default class ProductLikeButton {
  constructor() {}
  render() {
    const likeButton = document.createElement("button");

    likeButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // 버블링 중단
      console.log("좋아요 버튼 클릭");
    });
    likeButton.setAttribute("class", "like-btn");

    const likeButtonIr = document.createElement("span");
    likeButtonIr.setAttribute("class", "ir");
    likeButtonIr.innerText = "좋아요 버튼";
    likeButton.appendChild(likeButtonIr);

    return likeButton;
  }
}
/*
      e.preventDefault();  html 기본동작, 새로고침 ,submit 동작을 막는다.
      e.stopPropagation();  기본 동작 외 이벤트의 전파를 막는다. 클릭했을 때 url이 이동하지 않도록 버블링 중단
 */

import { Ir } from "../../utils/index.js";
import { Component } from "../../core/index.js";
export default class ProductLikeButton extends Component {
  setup() {
    this.$target = likeButton;

    this.state = {
      isLiked: this.checkLikeList(),
    };
  }
  checkLikeList() {
    if (!localStorage.getItem("likeList")) {
      localStorage.setItem("likeList", JSON.stringify([]));
    }
    const likeList = JSON.parse(localStorage.getItem("likeList"));
    return likeList.includes(this.props.productId);
  }
  setEvent() {
    this.addEvent("click", this.$target, ({ target }) => {
      const newIsLiked = !this.state.isLiked;
      this.setState({ isLiked: newIsLiked });

      const likeList = JSON.parse(localStorage.getItem("likeList"));

      if (newIsLiked) {
        likeList.push(this.props.productId);
      } else {
        const index = likeList.indexOf(this.props.productId);
        if (index !== -1) {
          likeList.splice(index, 1);
        }
      }

      localStorage.setItem("likeList", JSON.stringify(likeList));
    });
  }

  render() {
    const likeButton = document.createElement("button");
    likeButton.setAttribute("class", "like-btn");

    if (this.state.isLiked) {
      likeButton.classList.add("on");
    }

    const likeButtonIr = new Ir({
      tag: "span",
      text: "좋아요 버튼",
    }).createElement();

    likeButton.appendChild(likeButtonIr);

    return likeButton;
  }
}

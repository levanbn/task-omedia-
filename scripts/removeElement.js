import { parsedData, showComments } from "../src";
import { mainWrapper } from "./addNewComment";

export const listenDeleteBtns = (item) => {
  //   deleteBtns.forEach((element) => {
  //     element.addEventListener("click", (item) => {
  //       const itemContent =
  //         item.target.parentElement.parentElement.parentElement.children[1]
  //           .innerText;
  //       console.log(parsedData.comments);
  parsedData.comments.forEach((comment, index) => {
    if (comment.content === item) {
      console.log("gtocha");
      parsedData.comments.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(parsedData));
      mainWrapper.innerHTML = "";
      showComments(parsedData);
    }
    if (comment.replies.length) {
      comment.replies.forEach((reply, index) => {
        if (reply.content === item) {
          comment.replies.splice(index, 1);
          localStorage.setItem("data", JSON.stringify(parsedData));
          mainWrapper.innerHTML = "";
          showComments(parsedData);
        }
      });
    }
    //   });
    // });
  });
};

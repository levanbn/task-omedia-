import {
  newCommentTextArea,
  parsedData,
  sendCommentBtn,
  showComments,
} from "../src";
import { mainWrapper } from "./addNewComment";
import { selectDeleteBtns } from "./selectBtns";

export const listenToNewCommentBtn = () => {
  sendCommentBtn.addEventListener("click", () => {
    if (newCommentTextArea.value.length > 3) {
      const commentObj = {};
      commentObj.id = parsedData.comments.length + 1;
      commentObj.content = `${newCommentTextArea.value}`;
      commentObj.createdAt = "1 wutis win";
      commentObj.replies = [];
      commentObj.score = 0;
      commentObj.user = {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      };
      parsedData.comments.push(commentObj);
      mainWrapper.innerHTML = "";
      newCommentTextArea.value = "";
      localStorage.setItem("data", JSON.stringify(parsedData));
      showComments(parsedData);
      selectDeleteBtns();
    }
  });
};

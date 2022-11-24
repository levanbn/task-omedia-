import { addNewComment } from "../scripts/addNewComment";
import { addNewReply } from "../scripts/addNewReply";
import { listenToNewCommentBtn } from "../scripts/listenToNewCommentBtn";
import { selectDeleteBtns } from "../scripts/selectBtns";
import "../src/global.css";
import data from "./data.json";
const lstorage = localStorage.getItem("data");
if (!lstorage) localStorage.setItem("data", JSON.stringify(data));
export const parsedData = JSON.parse(localStorage.getItem("data"));
export const currentUser = parsedData.currentUser;
console.log(parsedData);
const newCommentPic = document.getElementById("newcommentpic");
export const sendCommentBtn = document.querySelector(".send-comment-btn");
export const newCommentTextArea = document.getElementById("newcomment");
// console.log(parsedData.comments);
export const showComments = (commentsArr) => {
  commentsArr.comments.forEach((element) => {
    addNewComment(element);
    if (element.replies.length) {
      element.replies.forEach((item) => {
        addNewReply(item);
      });
    }
  });
};
showComments(parsedData);
listenToNewCommentBtn();
selectDeleteBtns();
newCommentPic.setAttribute("src", parsedData.currentUser.image.png);

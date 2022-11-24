import { listenDeleteBtns } from "./removeElement";

export const selectDeleteBtns = () => {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((el) => {
    const itemContent =
      el.parentElement.parentElement.parentElement.children[1].innerText;
    el.addEventListener("click", () => {
      listenDeleteBtns(itemContent);
    });
  });
};

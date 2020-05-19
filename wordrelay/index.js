const btn = document.querySelector("#button");
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.

btn.addEventListener("click", () => {
  const wordTag = document.querySelector("#word");
  const word = wordTag.textContent;
  // .은 ~의를 의미하는 것 같다.
  const inputTag = document.querySelector("#input");
  const errorTag = document.querySelector("#error");
  const input = inputTag.value;
  const lastIndex = word.length - 1;
  const w = word[lastIndex];
  const i = input[0];
  if (w === i) {
    wordTag.textContent = input;
    errorTag.textContent = "";
    inputTag.value = "";
    inputTag.focus(); //자동입력란 선택
  } else {
    errorTag.textContent = "땡";
    inputTag.value = "";
    inputTag.focus();
  }
});

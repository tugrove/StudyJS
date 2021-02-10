// HTML要素を取得
let commentArea = document.getElementById(`commentArea`);
let textarea = document.getElementById(`textarea`);
let button = document.getElementById(`button`);

// 送信処理
button.addEventListener(`click`, () => {
    let inputText = textarea.value;
    let comment = document.createElement(`p`);
    comment.innerText = inputText;
    commentArea.insertBefore(comment, null);
    textarea.value = ``;
});
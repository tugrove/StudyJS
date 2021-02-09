let practice = document.getElementById(`practice`);
practice.innerHTML = `<h1>れんしゅう</h1>`;
practice.style.backgroundColor = `rgb(150,150,150)`;
practice.style.fontSize = `30px`;
practice.style.color = `rgb(255,255,255)`;

// 要素を追加
let first = document.createElement(`div`);
first.setAttribute(`id`, `first`);
first.innerHTML = `<p>要素を追加</p>`;
practice.insertBefore(first, null);

// 要素をさらに追加
let second = document.createElement(`div`);
second.setAttribute(`id`, `second`);
second.innerHTML = `<p>さらに要素を追加</p>`;
practice.insertBefore(second, first);

// 要素を削除
let parent = first.parentElement;
parent.removeChild(first);
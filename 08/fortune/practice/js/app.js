// 要素オブジェクトの取得
let getResult = document.getElementById(`getResult`);
let result = document.getElementById(`result`);

// イベントの登録
getResult.addEventListener(`click`, () => {
    result.innerHTML = `<p>結果は「${omikuji.getResult()}」でした。</p>`;
});

// おみくじオブジェクトの定義
let omikuji = {
    results: [`大吉`, `吉`, `中吉`, `小吉`, `凶`],
    getResult: function() {
        let results = this.results
        return results[Math.floor(Math.random() * results.length)];
    }
}
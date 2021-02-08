// 所持金の入力
let budget = prompt('所持金を数字で入力してください');
// 入力を文字列から数値に変換
budget = parseFloat(budget);

// お腹の好き具合を確認
let isHungry = confirm('お腹は空いていますか？');

// 所持金が1500以上ならピザを注文、500-1500ならポテトを注文、500以下は注文なし
if (budget >= 1500 && isHungry) {
    alert('ピザを注文しました');
} else if (budget >= 500) {
    alert('ポテトを注文しました');
} else {
    alert('節約、節約...');
}
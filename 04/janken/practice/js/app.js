const janken = () => {
/* 変数定義 ********************************/
// じゃんけんの手の番号を設定
const GU    = 1;
const CHOKI = 2;
const PA    = 3;

/* 関数定義 ********************************/
// 人間に手を入力してもらう機能
const getHumHand = () => {
    let hum = prompt('半角数字で1〜3の数字を入力してください。\n\n' + GU + 'グー\n' + CHOKI + 'チョキ\n' + PA + 'パー');
    hum = parseFloat(hum);
    if (hum !== GU && hum !== CHOKI && hum !== PA) {
        return undefined;
    } else {
        return hum;
    }
}

// コンピュータの手を決める関数
const getComHand = () => {
    return Math.floor(Math.random() * 3) + 1;
}

// コンピュータの手の名前を取得する関数
const getHandName = (num) => {
    switch (num) {
        case GU:
            return 'グー';
        case CHOKI:
            return 'チョキ';
        case PA:
            return 'パー';
        default:
            return undefined;
    }
}

// 結果の判定
const getResult = (com, hum) => {
    let result = (com - hum + 3) % 3;
    switch (result) {
        case 0:
            return '結果はあいこでした。';
        case 1:
            return '勝ちました。';
        default:
            return '負けました。';
    }
}

// 最終的な結果メッセージ
const getResultMsg = (com, hum) => {
    return getResult(com, hum) + 'コンピュータの出した手は「' + getHandName(com) + '」でした。';
}

/* 実行する処理 ********************************/
let hum = getHumHand();
if (!hum) {
    alert('入力がうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
} else {
    let com = getComHand();
    alert(getResultMsg(com, hum));
}
return;
}

janken();
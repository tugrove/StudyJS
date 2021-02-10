// URL結合関数
const urljoin = (strings, ...values) => {
    const result = [];
    for (let i = 0; i < strings.length - 1; i++) {
        result.push(strings[i], encodeURIComponent(values[i]));
    }
    result.push(strings[strings.length - 1]);
    return result.join("");
}

// リクエストパラメタのセット
const KEY = `AIzaSyCuRRugd7JW05COyePp9e5_F5euXrIz4zs`; // API KEY
let url = `https://www.googleapis.com/youtube/v3/search?`; // API URL
url += `type=video`;                // 動画を検索する
url += `&part=snippet`;             // 検索結果に全てのプロパティを含む
url += `&q=music`;                  // 検索ワード がこのサンプルでは music に指定
url += `&videoEmbeddable=true`;     // Webページに踏め込み可能な動画のみを検索
url += `&videoSyndicated=true`;     // youtube.com 以外で再生できる動画のみに限定
url += `&maxResults=6`;             // 動画の最大取得件数
url += urljoin`&key=${KEY}`;        // API KEY

// HTMLが読み込まれてから実行する処理
$( () => {
    // youtubeの動画を検索して取得
    $.ajax({
        url: url,
        dataType: `jsonp`
    }).done( data => {
        if (data.items) {
            setData(data); // データ取得が成功した時の処理
        } else {
            console.log(data);
            alert('該当するデータが見つかりませんでした');
        }
    }).fail( data => {
        alert(`通信に失敗しました`);
    });
});

// データ取得が成功したときの処理
const setData = (data) => {
    let result = ``;
    let video = ``;
    // 動画を表示するHTMLを作る
    for (let item of data.items) {
        video = urljoin`<iframe src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen></iframe>`;
        result += `<div class="video">${video}</div>`;
    }
    // HTMLに反映する
    $(`#videoList`).html(result);
};
$( () => {
    $(`#btn`).on(`click`, () => {
        // 入力された郵便番号でWebAPIに住所情報をリクエスト
        $.ajax({
            // url: `http://zipcloud.ibsnet.co.jp/api/search?zipcode=${$("#zipcode").val()}`,
            url: urljoin`http://zipcloud.ibsnet.co.jp/api/search?zipcode=${$("#zipcode").val()}`,
            dataType: `jsonp`,
        }).done( data => {
            if (data.results) {
                setData(data.results[0]);
            } else {
                alert(`該当するデータが見つかりませんでした`);
            }
        }).fail( data => {
            alert(`通信に失敗しました`);
        });
    });

    // データ取得に成功した時の処理
    const setData = data => {
        // 取得したデータを各HTML要素に代入
        $(`#prefecture`).val(data.address1); // 都道府県名
        $(`#city`).val(data.address2); // 市区町村名
        $(`#address`).val(data.address3); // 町域名
    };
});

// URL結合関数
const urljoin = (strings, ...values) => {
    const result = [];
    for (let i = 0; i < strings.length - 1; i++) {
      result.push(strings[i], encodeURIComponent(values[i]));
    }
    result.push(strings[strings.length - 1]);
    return result.join("");
};
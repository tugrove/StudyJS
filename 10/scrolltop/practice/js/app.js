$( () => {
    // 上に戻るボタンの初期化
    let topBtn = $(`#scrollTop`);
    topBtn.hide();

    // ある程度スクロールしたら、上に戻るボタンを表示
    $(window).scroll( () => {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn(); // フェードインで表示
        } else {
            topBtn.fadeOut(); // フェードアウトで非表示
        }
    });

    // クリックで上に戻るボタン
    topBtn.click( event => {
        event.preventDefault();
        $(`body,html`).animate({
            scrollTop: 0
        },500);
    });
});
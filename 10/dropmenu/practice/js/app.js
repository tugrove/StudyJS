$( () => {
    $(`#menu dt`).click( () => {
        $(`#menu dd`).slideToggle();
    });
});
let message = 'おはよう';
const greeting = (name = '名無しさん') => {
    let message = 'こんにちは';
    alert(message + name);
    return;
}

alert(message);
greeting();
let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

minValue = minValue || 0;
maxValue = maxValue || 100;
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
orderNumberField.textContent = orderNumber;

function namberInWords() {
// перевод числа в текст
let namberInWords1 = "";
let n = answerNumber;

if (n < 0) {
    n = -n;
};

// переменные для цифр числа n
let a = n % 10;
let b = n % 100;
let c = Math.floor(n % 100 / 10);
let d = Math.floor(n / 100);

// переменные для перевода цифр числа n в текст
let a1 = 1;
let b1 = 1;
let c1 = 1;
let d1 = 1;

switch (a) {
    case 1 :
        a1 = 'один';
        break;
    case 2 :
        a1 = 'два';
        break;
    case 3 :
        a1 = 'три';
        break;
    case 4 :
        a1 = 'четыре';
        break;
    case 5 :
        a1 = 'пять';
        break;
    case 6 :
        a1 = 'шесть';
        break;
    case 7 :
        a1 = 'семь';
        break;
    case 8 :
        a1 = 'восемь';
        break;
    case 9 :
        a1 = 'девять';
        break;
    default :
        a1 = "";
}

switch (b) {
    case 11 :
        b1 = 'одинадцать';
        break;
    case 12 :
        b1 = 'двенадцать';
        break;
    case 13 :
        b1 = 'тринадцать';
        break;
    case 14 :
        b1 = 'четырнадцать';
        break;
    case 15 :
        b1 = 'пятьнадцать';
        break;
    case 16 :
        b1 = 'шестьнадцать';
        break;
    case 17 :
        b1 = 'семьнадцать';
        break;
    case 18 :
        b1 = 'восемьнадцать';
        break;
    case 19 :
        b1 = 'девятнадцать';
        break;
    default :
        b1 = "";
}

switch (c) {
    case 1 :
        c1 = 'десять';
        break;
    case 2 :
        c1 = 'двадцать';
        break;
    case 3 :
        c1 = 'тридцать';
        break;
    case 4 :
        c1 = 'сорок';
        break;
    case 5 :
        c1 = 'пятьдесят';
        break;
    case 6 :
        c1 = 'шестьдесят';
        break;
    case 7 :
        c1 = 'семьдесят';
        break;
    case 8 :
        c1 = 'восемьдесят';
        break;
    case 9 :
        c1 = 'девяноста';
        break;
    default :
        c1 = "";
}

switch (d) {
    case 1 :
        d1 = 'сто';
        break;
    case 2 :
        d1 = 'двести';
        break;
    case 3 :
        d1 = 'триста';
        break;
    case 4 :
        d1 = 'четыреста';
        break;
    case 5 :
        d1 = 'пятьсот';
        break;
    case 6 :
        d1 = 'шестьсот';
        break;
    case 7 :
        d1 = 'семьсот';
        break;
    case 8 :
        d1 = 'восемьсот';
        break;
    case 9 :
        d1 = 'девтьсот';
        break;
    default :
        d1 = "";
}

namberInWords1 = (d1 + " ") + (b1 || c1 + " " + a1);
namberInWords1 = (answerNumber === 0) ? 0 : namberInWords1;
namberInWords1 = (answerNumber < 0) ? ("минус" + " " + namberInWords1) : namberInWords1;
namberInWords1 = (namberInWords1.length < 20) ? namberInWords1 : answerNumber;

return namberInWords1;
}

answerField.textContent = `Вы загадали число ${namberInWords(answerNumber) } ?`;


let cocteiner1 = document.querySelector('#cocteiner1')
document.querySelector('#btnRetry').addEventListener('click', function () {
    orderNumber = 0;
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    minValue = minValue || 0;
    maxValue = maxValue || 100;
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.textContent = orderNumber;

    answerField.textContent = `Вы загадали число ${namberInWords(answerNumber) }?`;
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.textContent = orderNumber;



            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (phraseRandom === 1) ?
                    'Вы загадали число' + " " + namberInWords(answerNumber) + '?' :
                    (phraseRandom === 2) ?
                        'Да это легко! Ты загадал' + " " + namberInWords(answerNumber) :
                        'Наверное это число' + " " + namberInWords(answerNumber);

            answerField.textContent = answerPhrase;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.textContent = orderNumber;
            


            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (phraseRandom === 1) ?
                    'Вы загадали число' + " " + namberInWords(answerNumber) + '?' :
                    (phraseRandom === 2) ?
                        'Да это легко! Ты загадал' + " " + namberInWords(answerNumber) :
                        'Наверное это число' + " " + namberInWords(answerNumber);

            answerField.textContent = answerPhrase;
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 2);
        const answerPhrase = (phraseRandom === 1) ?
            `Я всегда угадываю\n\u{1F60E}` :
            (phraseRandom === 2) ?
                'Это было просто\n\u{1F60E}' :
                'Я так и думал\n\u{1F60E}'

        answerField.textContent = answerPhrase
        gameRun = false;
    }
})
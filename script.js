const hiragana = {
  "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
  "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
  "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
  "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
  "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
  "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
  "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
  "や": "ya", "ゆ": "yu", "よ": "yo",
  "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
  "わ": "wa", "を": "wo", "ん": "n",

  "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o",
  "カ": "ka", "キ": "ki", "ク": "ku", "ケ": "ke", "コ": "ko",
  "サ": "sa", "シ": "shi", "ス": "su", "セ": "se", "ソ": "so",
  "タ": "ta", "チ": "chi", "ツ": "tsu", "テ": "te", "ト": "to",
  "ナ": "na", "ニ": "ni", "ヌ": "nu", "ネ": "ne", "ノ": "no",
  "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho",
  "マ": "ma", "ミ": "mi", "ム": "mu", "メ": "me", "モ": "mo",
  "ヤ": "ya", "ユ": "yu", "ヨ": "yo",
  "ラ": "ra", "リ": "ri", "ル": "ru", "レ": "re", "ロ": "ro",
  "ワ": "wa", "ヲ": "wo", "ン": "n"
};

let currentCard = '';
let currentAnswer = '';

function getRandomHiragana() {
    const keys = Object.keys(hiragana);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey;
}

function loadNewCard() {
    currentCard = getRandomHiragana();
    currentAnswer = hiragana[currentCard];
    document.getElementById('flashcard').innerText = currentCard;
    document.getElementById('resultMessage').innerText = '';
    document.getElementById('guessInput').value = '';
}

document.getElementById('submitGuess').addEventListener('click', () => {
    const userGuess = document.getElementById('guessInput').value.toLowerCase();
    const resultMessage = document.getElementById('resultMessage');
    
    if (userGuess === currentAnswer) {
        resultMessage.innerText = 'Correct!';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.innerText = `Incorrect! The correct answer is ${currentAnswer}`;
        resultMessage.style.color = 'red';
    }
});

document.getElementById('nextCard').addEventListener('click', loadNewCard);

// เริ่มเกมครั้งแรก
loadNewCard();
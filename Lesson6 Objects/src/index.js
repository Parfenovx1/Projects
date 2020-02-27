// 1 Задание
var arr = [];
var attempts = Number(prompt("Введите количество попыток:"));
var elements = 3;
var random = 9;

for( var i = 0; i < attempts; i++){
  arr = [];
  for(var k = 0; k < elements; k++){
    arr.push(
      [
        Math.ceil(Math.random() * random),
        Math.ceil(Math.random() * random),
        Math.ceil(Math.random() * random)
      ]
    );
  }

  var isLinesCoincide = false;
  console.log(arr);
  for( var check = 1; check < arr.length; check++) {
    if(arr[0][1] !== arr[check][1]){
      break;
    }else{
    check++;
    if (arr[0][1] !== arr[check][1]){
      break;
    }else{
      isLinesCoincide = true;}
    }
  }
  console.log(isLinesCoincide);
}

// 2 Задание

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var output = {};
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var numberOfWords = Number(prompt("Сколько слов вы хотите сгнерировать?:"))
var minLetters = Number(prompt("Введите минимальное количество символов:"));
var maxLetters = Number(prompt("Введите максимальное количество символов:"));

for (var i = 0; i < numberOfWords; i++) {
  var wordLength = getRandomNumber(minLetters, maxLetters);
  var word = "";
  for (var j = 0; j < wordLength; j++) {
    word += alphabet[getRandomNumber(0, alphabet.length)];
  }

  if (output[wordLength]) {
    output[wordLength].push(word);
  } else {
    output[wordLength] = [word];
  }
}

for (var key in output) {
  console.log(
    "You have " + output[key].length + " words with " + key + " characters"
  );
  console.log(output);
}

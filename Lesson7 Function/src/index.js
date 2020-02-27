// CASINO

var arr = [];

var attempts = 5;
var elements = 3;
var random = 9;

for (var i = 0; i < attempts; i++) {
  arr = [];
  for (var j = 0; j < elements; j++) {
    arr.push([
      Math.ceil(Math.random() * random),
      Math.ceil(Math.random() * random),
      Math.ceil(Math.random() * random)
    ]);
  }

  var isLinesFill = false;
  console.log(arr);

  for (var k = 1; k < arr.length; k++) {
    if(arr[0][1] !== arr[k][1])  {
      break;
    }else
    {
    isLinesFill = true;
  }
}

  console.log(isLinesFill);
}


// FUNCTION PIZZA
// var meat = "chicken";

// function cookPizza( address, meat, isHot) {
//     var ingredients = {
//         address: address,
//         meat: meat,
//         hot: isHot || true
//     };
//     console.log("Cooking...");
//     console.log("Ready!");
//     console.log("Get your pizza", ingredients);
// }

// cookPizza("address", "chicken", true);
// cookPizza("address", "racoon", true);
// cookPizza("address", "pig", false);
// cookPizza("address", "cat");
// cookPizza("address", "dog");

// function createLines(amountOfLines, maxRandom) {
//     var arr = [];
//     for (var j = 0; j < amountOfLines; j++) {
//       arr.push([
//         Math.floor(Math.random() * maxRandom),
//         Math.floor(Math.random() * maxRandom),
//         Math.floor(Math.random() * maxRandom)
//       ]);
//     }
//     return arr;
//   }
  
//   function checkLineIdentical(arr) {
//     var isNumbersIdentical = false;
  
//     for (var f = 1; f < arr.length; f++) {
//       if (arr[0][1] !== arr[f][1]) {
//         break;
//       } else {
//         isNumbersIdentical = true;
//       }
//     }
//     return isNumbersIdentical;
//   }
  
//   function createCasino(pickTimes, linesAmount, maxRandom) {
//     for (var i = 0; i < pickTimes; i++) {
//       var arr = createLines(linesAmount, maxRandom);
//       if (checkLineIdentical(arr)) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   var casinoResult = createCasino(5, 3, 10);
  
//   console.log(casinoResult);
  
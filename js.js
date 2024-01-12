// 1
let array = ['Mango', 'Poly', 'Ajax'];

let logItems = function(){
   for(let i = 0; i < array.length; i++){

       console.log(`${i + 1} - ${array[i]}`);
   }
   
}
const fruits = ['Mango', 'Poly', 'Ajax'];
logItems(fruits);

// 2

let calculateEngravingPrice = function(message, pricePerWord){
  let words = message.split(' ');

  const wordCount = words.length;

  const totalPrice = wordCount * pricePerWord;

  return totalPrice;
}

const message = "price"

const pricePerWord = 10

const price = calculateEngravingPrice(message, pricePerWord);

console.log(`Ціна гравіювання: ${price} грн`);                            

// 3

const findLongestWord = function(string){
let words = string.split(' ')
let longestWord = ' '

 for(const word of words){
   if(word.length > longestWord.length){
     longestWord = word
   }
 }
 return longestWord;
}
const text ="  мандарини апельсин яблуко"
const longest = findLongestWord(text);
console.log(`саме довге слово: ${longest}`);


// 4

const formatString = function(string){
 if(string.length <= 40){
   return string;
 }else{
   const shortString = string.slice(0, 40) + '...';
   return shortString;
 }
}

const longText = " це дуже довгий рядок який перевищує ліміт в сорок символів"
const shortText = "це короткий рядок"

console.log(formatString(longText));
console.log(formatString(shortText));


// 5

let checkForSpam = function(message){
 if(message.includes('спам') || message.includes("продаж")){
   return true;
 }
 else{
 return false;
 }
  
  
}

let text1 = "тут немає спаму і продаж"
let text2 = "купи наші товари по вигідній ціні"

console.log(checkForSpam(text1));
console.log(checkForSpam(text2));


// 6
let input;
const numbers = []
let total = 0;

while(true){
  input = prompt("введіть число")
  console.log(typeof input);
  

  if(input === null){
    break;
  } 
  numbers.push(+input);
  

}


for(let i = 0; i < numbers.length; i++){
  
  console.log(`Загальна сума чисел дорівнює ${total}`)
  total += numbers[i];

}
console.log(total);
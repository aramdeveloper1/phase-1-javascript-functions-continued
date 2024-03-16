// code your solution here
// razzle(); //=> "You've been razzled!"
// function razzle() {
//    console.log("You've been razzled!");
// }
// function razzle(lawyer = "Billy", target = "'em") {
//    console.log(`${lawyer} razzle-dazzles ${target}!`);
// }
// razzle(); //=> Billy razzle-dazzles 'em!
// razzle("Methuselah", "T'challah");
function outer(greeting, msg = "It's a fine day to learn") {
   // 2
   const innerFunction = function (name, lang = "Python") {
      // 3
      return console.log(`${greeting}, ${name}! ${msg} ${lang}`); // 4
   };
   return innerFunction("student", "JavaScript"); // 5
}

outer("Hello"); // 1
//=> "Hello, student! It's a fine day to learn JavaScript"

// Function for Saturday fun with a default activity
function saturdayFun(activity = "roller-skate") {
   return function () {
      console.log(`Let's go ${activity} this Saturday!`);
   };
}

// Function for Monday work with a default activity
function mondayWork(activity = "go to the office") {
   return function () {
      console.log(`Ugh, it's Monday. Time to ${activity}`);
   };
}

// Function to wrap an adjective with visual flair
function wrapAdjective(flair = "*") {
   return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}`;
   };
}

// Example Usage
const saturdaySkate = saturdayFun();
saturdaySkate(); // Output: Let's go roller-skate this Saturday!

const mondayOffice = mondayWork("work from home");
mondayOffice(); // Output: Ugh, it's Monday. Time to work from home

const encouragingPromptFunction = wrapAdjective("!!!");
const result = encouragingPromptFunction("wonderful");
console.log(result); // Output: You are !!!wonderful!!!

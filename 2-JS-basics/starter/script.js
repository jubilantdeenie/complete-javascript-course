/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

// var massMark = 135; // kg
// var heightMark = 1.8; // meters
//
// var massJohn = 195;
// var heightJohn = 2;
//
// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
//
// var markHigherBMI = BMIMark > BMIJohn;
//
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
//
// var averageJohn = (89 + 120 + 103) / 3;
// var averageMike = (116 + 94 + 123) / 3;
// var averageMary = (97 + 134 + 105) / 3;
//
// console.log(averageJohn, averageMike, averageMary);
//
// if (averageJohn > averageMike && averageJohn > averageMary){
//   console.log('John is the winner with ' + averageJohn + ' points');
// } else if (averageMike > averageJohn && averageMike > averageMary) {
//   console.log('Mike is the winner with ' + averageMike + ' points');
// } else if (averageMary > averageJohn && averageMary > averageMike) {
//   console.log('Mary is the winner with ' + averageMary + ' points');
// } else {
//   console.log('There is a draw');
// }

//
// if (averageJohn > averageMike) {
//   console.log('John is the winner with ' + averageJohn + ' points');
// } else if (averageMike > averageJohn) {
//   console.log('Mike is the winner with ' + averageMike + ' points');
// } else {
//   console.log('There is a tie with ' + averageMike + ' points');
// }


/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
var john = {
  name: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.totalAmount = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      this.tips[i] = percentage * bill;
      this.totalAmount[i] = bill + percentage * bill;
    }
  }
};

var mark = {
  name: 'Mark Smith',
  bills: [77, 375, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.totalAmount = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = .2;
      } else if (bill >=100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      this.tips[i] = percentage * bill;
      this.totalAmount[i] = bill + bill * percentage;

    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++ ) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.name + '\'s family paid more tips at an average of $' + john.average);
} else if (mark.average > john.average) {
  console.log(mark.name + '\'s family paid more tips at an average of $' + mark.average);
}
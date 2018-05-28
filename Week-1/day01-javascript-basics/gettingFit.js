/*
Age in years
Height in centimeters
Weight in kilograms
Gender (m/f)
Activity level on a scale from 1 to 5:
little or no exercise
exercise/sports 1 - 3 times per week
exercise/sports 4 - 5 times per week
exercise/sports 6 - 7 times per week
very hard exercise/sports or physical job
*/

/* User input*/
var age = window.prompt('What is your age?');
var gender = window.prompt('What is your gender? m or f');
var height = window.prompt('What is height in cm?');
var weight = window.prompt('What is your weight?');
var exerciseLevel = window.prompt('What is your exercise level? Type number from 1 to 5.');

/* Calculate BMI */

var heightInCM = height / 100
var bodyWeightSquared = Math.pow(heightInCM, 2)
var bmi = weight / bodyWeightSquared

/* Ideal weight */

var idealBMI = 22.5;
var idealWeight = idealBMI * bodyWeightSquared;


/* Calculate BMR */
var bmr = 10.0 * weight + 6.25 * height - 5.0 * age;

if (gender === 'm') {
  bmr += 5;
}
if (gender === 'f') {
  bmr -= 161;
}

/* Calculate calories per day */

var caloriesPerDay

switch (exerciseLevel) {
  case '1':
      caloriesPerDay =  bmr * 1.2
  break;

  case '2':
      caloriesPerDay = bmr * 1.375

  break;

  case '3':
    caloriesPerDay = bmr * 1.55
  break;

  case '4':
    caloriesPerDay = bmr * 1.725
  break;

  case '5':
      caloriesPerDay = bmr * 1.9
  break;
}


/* diet plan */

let dietCaloriesPerDay
let dietWeeks

if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500
  dietWeeks = (weight - idealWeight) / 0.5
} else {
  dietCaloriesPerDay = caloriesPerDay + 500
  dietWeeks = (idealWeight - weight) / 0.5
}

console.log(dietCaloriesPerDay);

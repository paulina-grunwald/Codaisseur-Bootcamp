# Welcome

Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.
You use loop to iterate over items of e,g array.

```javascript
let food = "sushi";
var i;
for (i = 0; i < 10; i++) {
    console.log(food);
}
```

2) How do I try out whether my loop is working?
You can try to run it and check if there are any errors show in the debugger.

3) What are arrays? What is an ordered collection?
Array is a collection of the data.

4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

```javascript
team = ["paulina", "anna", "mike"]
team.forEach(function(item) {
    console.log(item)
})
```

5) What is the difference between a loop and an array? Why would you use either of them?.
Loop is a function(method) and array is data container.

6) What is happening here?

```
var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
```

result: 6
two values are multiplied.

7) How could we log the arguments of the code above?


8) What is ‘scope’?
Scope is a boundary for certain piece of code. The variables, functions etc. from particular scope can not be accessed outside the scope.
9) Can I use my vars at the following places?

```
var name = Rembert

//Place A

var codaisseur = function() {
  //Place B
}
```
```
var codaisseur = function() {
  var name = Rembert
  //Place C
}

//Place D
```

10) Why would you use an object?
Object can store key values pairs. You can next objects within objects.


11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

```javascript
let teacher = {
  javascript: loop;
};
```

12) What are the property-names and values of the object you just created?
propery name: javascript
value: loop

13) Why would you use git?

Git is used for the version control.

14) What is the difference between `git add`,`git commit` and `git push` ?

git add adds commits to the list of the items to be commited. git commit commits the changes to the master. git push pushes changes to the master.

### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!

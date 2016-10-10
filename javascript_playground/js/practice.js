/*
JAVASCRIPT:
-javascript is a scripting language which adds interactivity to html pages.
-javascript executes in the browser and provides a rich user experience.
-javascript is an interpreted language, it doesnt need precompilation from a computer for execution (compiled codes generally have better performance)
-you can use javascript in html in two different ways:
  -define the scripts directly in the html (usually in the head or on the bottom just before the closing body tag)
    --Example: <script type="text/javascript"> alert("hello world");</script>
  -define the script in a seperate .js file and reference it in the html page. this is the preffered method.
    --using the "SRC" attribute, you can define the location of the file to reference and call when the page loads in the browser
    --Example: <script type="text/javascript" src="js/main.js"></script>


-The rules for defining variables:
  -case sensitive
  -must begin with a letter, $ or _ characters
  -can contain letters, numbers digits, underscores or dollar signs
  -reserved words can NOT be used

-Datatypes used in javascript:
  -Any variable can hold any datatype
  -string - a string of characters, usually words or sentences.
  -number - includes numbers, digits, decimals and exponentials
  -boolean - values that can only be equals to true or false.
  -array - use for storing a list of information. list can consist of any of the other datatypes.
  -object
  -function
  -null - a primitive value that represents null, empty, or non-existent reference.
  -undefined - a primitive value used when a variable has not been assigned a value.
  -conditionals - if, elseIf, else...

OPERATORS QUICK REFERENCE:
Note: you can change the order of operations by using (parenthesis)
PEMDAS: parenthesis, exponents, multiplication, division, addition, subtraction.
  ARITHMETIC OPERATORS:
    + add
    - subtract
    * multiply
    / divide
    ++ increment - when you use it before the variable "++count", it is called a prefix operator. If you use it after the variable, "count++", it is called a post fix operator.
    -- decrement
    % modulus (division remainder)

  ASSIGNMENT OPERATORS:
    = assign
    += add and assign
    -= subtract and assign
    *= multiply and assign
    /= divide and assign
    %= modulus and assign

  COMPARISON OPERATORS:
    = sets a variable to be equal to
    == equal
    === strict equal - equal value and equal type
    != not equal
    !== strict not equal - not equal value or not equal type
    > greater than
    >= greater than or equal to
    < less than
    <= less than or equal to

  LOGICAL OPERATORS:
    ! NOT
    || OR
    && AND
*/










console.log("----------KEYWORDS----------");
/*
NOTES:
-In JavaScript, some identifiers are reserved words and cannot be used as variables or function names

JAVASCRIPT RESERVED KEYWORDS:
  -In JavaScript you cannot use these reserved words as variables, labels, or function names:
    -abstract
    -arguments
    -boolean
    -break
    -byte
    -case
    -catch
    -char
    -class*
    -const
    -continue
    -debugger
    -default
    -delete
    -do
    -double
    -else
    -enum*
    -eval
    -export*
    -extends*
    -false
    -final
    -float
    -for
    -function
    -goto
    -if
    -implements
    -import*
    -in
    -instanceof
    -int
    -interface
    -let
    -long
    -native
    -new
    -null
    -package
    -private
    -protected
    -public
    -return
    -short
    -static
    -super*
    -switch
    -synchronized
    -this
    -throw
    -throws
    -transient
    -true
    -try
    -typeof - The typeof operator in JavaScript returns "object" for arrays
    -var
    -void
    -volatile
    -while
    -with
    -yield
    Words marked with* are new in ECMAScript5

OBJECTS, PROPERTIES AND METHODS
  -You should also avoid using the name of JavaScript built-in objects, properties, and methods
    -array
    -Date
    -eval
    -function
    -hasOwnProperty
    -Infinity
    -isInfinite
    -isNaN
    -isPropertyOf
    -length - The .length property returns the number of elements in an array. The length property of an array returns the length of an array (the number of array elements). The length property provides an easy way to append new elements to an array without using the push() method
    -Math.max() - returns the largets number
    -Math.sqrt() - returns the square root of a number
    -Math.round() - rounds numbers to the nearest whole number
    -Math.random() - returns a random number betwee 0 and 1
    -NaN
    -name
    -Number - treats and returns a value as a number
    -Object
    -prototype
    -replace - returns a modified string where the pattern is replaced
    -search - uses an expression to search for a match, and returns the position of the match
    -sort - The sort() method sorts items in an array in alphabetical order
    -String - treats and returns a value as a string
    -subString -extract a seqence of characters from within a string. lets you pass in 2 numbers. ( starting at 0: position of the first character in the substring that you want, position of the first character that you dont want)
    -subStr -extract a seqence of characters from within a string. just like a bove only the second number is used to tell javascript where to stop substr(2, 5);
    -toString
    -undefined
    -valueOf

EVENT HANDLERS
  -avoid using these names as variables as they are keywords for event handlers
    -onblur
    -onclick
    -onerror
    -onfocus
    -onkeydown
    -onkeypress
    -onkeyup
    -onmouseover
    -onload
    -onmouseup
    -onmousedown
    -onsubmit

WINDOWS RESERVED KEYWORDS
  -JavaScript can be used outside HTML. It can be used as the programming language in many other applications
  -In HTML you must (for portability you should) avoid using the name of HTML and Windows objects and properties
    -alert
    -all
    -anchor
    -anchors
    -area
    -assign
    -blur
    -button
    -checkbox
    -clearInterval
    -clearTimeout
    -clientInformation
    -close
    -closed
    -confirm
    -constructor
    -crypto
    -decodedURI
    -decodedURIComponent
    -defaultStatus
    -document
    -element
    -elements
    -embed
    -embeds
    -encodeURI
    -encodedURIComponent
    -escape
    -event
    -fileUpload
    -focus
    -form
    -forms
    -frame
    -innerHeight
    -innerWidth
    -layer
    -layers
    -link
    -location
    -mimeTypes
    -navigate
    -navigator
    -frames
    -frameRate
    -hidden
    -history
    -image
    -images
    -offscreenBuffering
    -open
    -opener
    -option
    -outerheight
    -outerWidth
    -packages
    -pageXOffset
    -pageYOffset
    -parent
    -parseFloat
    -parseInt
    -password
    -pkcs11
    -plugin
    -prompt - The prompt() method displays a dialog box that prompts the visitor for input.The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null. If the user clicks OK without entering any text, an empty string is returned
    -propertIsEnum
    -radio
    -reset
    -screenX
    -screenY
    -scroll
    -secure
    -select
    -self
    -setInterval
    -setTimeout
    -setAttribute() - Adds a new attribute or changes the value of an existing attribute on the specified element.
      -element.setAttribute(name, value);
    -status
    -submit
    -taint
    -text
    -textarea
    -top
    -unescape
    -untaint
    -window

*/










console.log("----------VARIABLES----------");
/*
NOTES:
-The name Var or "Variable", implies that its data can change, or vary.
-variables act like storage containers that hold bits of data or information
-to declare a variable you use the VAR keyword and the = assignment operator
-you can both declare and define variables on the same line or on seperate lines
-the variable is the storage container, the definition is the value
-JavaScript variables are containers for storing data values
-All JavaScript variables must be identified with unique names.
-After the declaration, the variable is empty (it has no value). To assign a value to the variable, use the equal sign

-Local and Global variables:
  -the scope of the variable
  -LOCAL: if a variable is available within the boundaries of a code block where it is definedthen it is LOCAL
  -GLOBAL: these variables are available everywhere in the program
*/

//----------global and local variables
var localVar = "i am local"; //both are still declared and defined.
globalVar = "i am global"; //both are still declared and defined.


//----------variable declaring shortcuts:
var first = "nomnom",
    last = "bonbon",
    limit = 900;

//----------declare and define a variable
var year = 1980;
var month = "april";
var day = 17;
var car = "mustang";
var show = "the walking dead";
console.log("-----declaring and defining variables");
console.log("year: ", year);
console.log("month: ", month);
console.log("day: ", day);
console.log("car: ", car);
console.log("show: ", show);

//----------declare and define on two lines
var phone; //declare a variable
phone = "android"; //define the variable

var laptop; //declare a variable
laptop = "apple"; //define the variable

var food; //declare a variable
food = "pizza"; //define the variable

var contact; //declare a variable
contact = 7274803112; //define the variable

console.log("-----declaring and defining on two lines");
console.log("phone: ", phone);
console.log("laptop: ", laptop);
console.log("food: ", food);
console.log("contact: ", contact);










console.log("----------DATATYPES----------");
/*
NOTES:
-String, Number, Boolean, Array, Object
-JavaScript variables can hold many data types: numbers, strings, arrays, objects and more.
-In programming, data types is an important concept
-To be able to operate on variables, it is important to know something about the type
-Without data types, a computer cannot safely solve problems that need to be worked through when two datatypes are different or uncomparible.
-If one operand is a string, JavaScript will treat all operands as strings
-JavaScript has dynamic types. This means that the same variable can be used as different types.
*/
var weight = 340; //number variable - uses numbers, exponentials, etc.
var nickName = "panda"; //string variable - uses letters, words, escape characters, text, etc.
var isStudent = true; //boolean variable - can only be true or false in definitions.
var phrase = "this is phrase that uses escape and \n new line operator\'s";

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var cars = ["Saab", "Volvo", "BMW"];           // Array
var dude = {firstName:"John", lastName:"Doe"}; // Object
var thisBool = false;                          // boolean

var speedo = 90; //number
var city = "Bronx"; //string
var tools = ["hammer", "wrench", "drill", "saw"]; //array
var devTools = {laptop:"apple", tablet:"microsoft", mobile:"android"}; //object

console.log("number variable: var weight = 340; var ex1 = 123e5; JavaScript has only one type of numbers, Numbers can be written with, or without decimals. Extra large or extra small numbers can be written with scientific (exponential) notation");

//EXAMPLE:
var ex1 = 123e5;      // 12300000
var ex2 = 123e-5;     // 0.00123

//EXAMPLE:
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals


console.log("string variable: ",
"var nickName = 'panda'; ",
"A string (or a text string) is a series of characters like 'John Doe'",
"\n Strings are written with quotes. You can use single or double quotes.",
"\nYou can use quotes inside a string, as long as they don't match the quotes surrounding the string");

console.log("boolean variable: ", "var isStudent = true;");
console.log("escape characters string variable: ", 'var phrase = "this is phrase that uses escape and \n new line operator\'s";');
console.log("array variable: ", 'var cars = ["Saab", "Volvo", "BMW"];');
console.log("object variable: ", 'var dude = {firstName:"John", lastName:"Doe"};');


console.log("----------JavaScript has dynamic types. This means that the same variable can be used as different datatypes");
var xxxx;               // xxxx is undefined
var xxxx = 5;           // Now xxxx is a Number
var xxxx = "John";      // Now xxxx is a String
console.log("var xxxx;");
console.log("var xxxx = 5;");
console.log('var xxxx = "John";');






console.log("----------CLOSURES----------");
/*

* Inner functions (closures) store their outer function’s variables by reference, not by value.
* a closure is any function that keeps reference to variables from its parent’s scope even after the parent has returned.
* a function can refer to, or have access to:
  - any variables and parameters in its own function scope
  - any variables and parameters of outer (parent) functions
  - any variables from the global scope.

* closures can both read and update their stored variables
* updates are visible to any closures that have access to them
* closures store references to their outer variables, rather than copying their values
* variables in a closure are automatically hidden
* Closures store data in their enclosed variables without providing direct access to them,
  The only way to alter those variables is by providing access to them indirectly.

*/

var globalvar;

function globalFunction(thisParameter){
  var randomVar = "random string";

  // closure (inner function)
  // able to remember its surrounding scope (outer functions) even when it’s executed outside its lexical scope
  // you can call it at any time later in your program
  function closureFunction(){
    console.log("using a variable in its parent function" + randomVar + thisParameter);
  }

  closureFunction();
}

globalFunction("this argument");



// ---------------------------------------EXAMPLE
 function parentFunction(parentParameter){
   var parentVar = "parent string";

   function closure(){
     //closure func accesses the parents var and the parents func parameters
     console.log(parentVar + parentParameter)
   }

   closure()
 }

 parentFunction("parent argument");



 // ---------------------------------------EXAMPLE
 function cityLocation(){ // returns an object containing two closures
   var city = "paris";

   return{

     // -------------------------- inner functions (closures)
     get: function(){ // obtains the current value of "city"
       console.log(city); // referring to the outer variable "city"
     },

     set: function(newCity){  // updates the current value of "city"
       city = newCity;  // referring to the outer variable "city" and setting it to be "newCity"
     }
     // -------------------------- inner functions (closures)

   };
 }
 var myLocation = cityLocation();

 myLocation.get();  // output: paris
 myLocation.set("New York City"); // set location to be New York city
 myLocation.get();  // new updated output: new york city





console.log("----------CALL BACK FUNCTIONS----------");
/*
source: https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/
*  functions can be passed as arguments to other functions and can also be returned by other functions
*  A function that takes other functions as arguments or returns functions as its result is called a higher-order function,
  and the function that is passed as an argument is called a callback function.

* essentially, a function that is called as an argument for another function is called a callback function

- Some methods that accept and execute callbacks:
  -setTimeout();
  -setInterval();
*/

function showMessage(message){
  setTimeout(function(){
    alert(message);
  }, 3000);
}

showMessage("callback function called 3 seconds ago");


// --------------------------------------EXAMPLE

// USING A CALLBACK WITH AN EVENT LISTENER
function showThisMessage(){ // call back function
  document.write("message shown");
}
 var called = document.getElementById("btn");

 called.addEventListener("click", showThisMessage); // function being called back using event listener



// --------------------------------------EXAMPLE

function fullName(firstName, lastName, callBack){  // 3 arguments
  document.write("My name is:" + firstName + " " + lastName);
  callBack(lastName); // function call that triggers the callback function
}

var greeting = function(ln){  // call back function
  document.write("welcome, Mr." + ln);
};

fullName("Adrian", "Sane", greeting); // the callback function, "greeting" is called as a variable (without parenthesis) so that it isnt called right away, only when called



            // --------------------------------------EXAMPLE
            /*
            - a function that uses repeated code patterns and variables placed in the generic "publish" function
            - a functon that prints info about published articles
            - a function that prints info about sent messages
            */

            // the publish function
            function publish(item, author, callBack){ // Generic function with common data that would have normally been used in the functions below, (this is code that was repeated).
              console.log(item);
              var date = new Date();
              callBack(author, date);
            }




            // CALLBACK FUNCTION
            // print info about sent messages - specific data used in this function, any repeated code went into the publish function
            function messages(author, time){ // Callback function with specific data
              var sendTime = time.toLocaleTimeString();
              console.log("sent from:" + author + "at " + sendTime);
            }




            // CALLBACK FUNCTION
            // print info about published articles - specific data used in this function, any repeated code went into the publish function
            function articles(author, date){ // Callback function with specific data
              var pubDate = date.toDateString();
              console.log("written by: " + author);
              console.log("published on: " + pubDate);
            }



            // print info about pubishers
            function publishers(group, site){
              var companies = {
                    google : "doubleClick",
                    yahoo : "yith",
                    microsoft : "bingMeter"
                  };
              console.log("published by: " + companies.google + " and " + companies.yahoo + " and " + companies.microsoft);
              console.log("in the group of: " + group);
              console.log("in the site of: " + site);
            }


            publish("How are you?", "Johnny", messages);
            publish("10 tips for better programming", "Adrian Sane", articles);
            publish("all banners coded by: ", "test", publishers);




console.log("----------IDENTIFIERS----------");
/*
NOTES:
-The name of the variable is the identifier
-Identifiers can have: letters, numbers, underscore_, or $
-cannot have any spaces or begin with a number
-are case sensitive
-should always use camelCasing
-should have meaningful names
-Identifiers can be short names (like x and y), or more descriptive names (age, sum, totalVolume).
-Names can contain letters, digits, underscores, and dollar signs.
-Names must begin with a letter
-Names can also begin with $ and _
-Names are case sensitive (y and Y are different variables)
-Reserved words (like JavaScript keywords) cannot be used as identifiers
*/

//EXAMPLES:
var lastName; //camelCase
var _ID; //underscore
var $name; //dollar sign, jQuery
var name007; //letters and digit combination










console.log("----------LITERALS----------");
/*
NOTES:
-Programming produces results and each result is represented by a literal:
  -String literal: "any character set can go here"
  -Numeric literal: 0, 103, 42, 3.145, 20.1, 6.02e23
  -Boolean literal: true or false
  -Array literal: [1, true, "3"]
  -Function literal: function(){statements;}
  -Objects
*/










console.log("----------DEFINING MULTIPLE VARIABLES----------");
/*
NOTES:
-Can be declared and defined on the same line, separated by a comma
-Can also be declared without values (meaning they are undefined)
*/

//EXAMPLES:
var numb = "chester", album = "skin deep", track = 8; //three variables defined on one line seperated by commas
var team = "yankees", position = "short stop", rank = 2; //three variables defined on one line seperated by commas

var mouse, bird, lion; //three variables declared but without values (definitions)
var brad, ian, mike;  //three variables declared but without values (definitions)

var aa = bb = cc = dd = 300; //multiple variables declared, all defined as 300
var aaa = bbb = ccc = ddd = 44345; //multiple variables declared, all defined as 44345

var thisVar = 0,
    thatVar = "a string",
    ourVar = true;










console.log("----------OPERATORS----------");
/*
NOTES:
-ARITHMETIC operators: order of operations: ( ), *, /, +, -
  -The addition operator (+) adds a value
  -The subtraction operator (-) subtracts a value
  -The multiplication operator (*) multiplies a value
  -The division operator (/) divides a value
  -The modular operator (%) returns division remainder
  -The increment operator (++) increments a value
  -The decrement operator (--) decrements a value
*/

//EXAMPLES
var x = 5;
var y = 50;
var z = x + y;

console.log("-----simple math using arithmetic operators: + - / *");
console.log("x = 5, y = 50, z = x + Y", "answer:", z);

var q = 34;
var r = 2239000;
var w = 12392;
var e = q - r * w;
console.log("q = 34, r = 2239000, w = 12392, e = q - r * w", "answer:", e);

var web = 5000;
var node = 22343;
var prime = web + node;
console.log("first variable = ", web, "second variable = ", node, "third variable equals first var + second var. ", "answer: ", prime);

var yell = 90;
var scream = 70;
var silence = yell / scream;
console.log("var1 =", yell, "var2 =", scream, "var3 = var1 / var 2: ", silence);

var av = 35;
var as = 667;
console.log("var1 =", av, "var2 =", as, "Remainder (modulo): ", av % as);

//order of operations: ( ), *, /, +, -
var answer = 4 + (6 * 5 - 10) / 5;
console.log("the order of operations: ( ), *, /, +, -");
console.log("var answer = 4 + (6 * 5 - 10) / 5;");
console.log("answer =", answer);


/*
NOTES:
-ASSIGNMENT operators: Assignment operators are used to assign values to JavaScript variables
  -The = assignment operator assigns a value to a variable
  -The += assignment operator adds a value to a variable
  -The -= assignment operator subtracts a value from a variable
  -The *= assignment operator multiplies a variable
  -The /= assignment divides a variable
  -The %= assignment operator assigns a remainder to a variable
*/
console.log("-----using assignment operators: = += -= *= /= %=");
var jump = 10;
console.log("The = assignment operator assigns a value to a variable");
console.log("var jump = 10;");

var addIt = 10;
addIt += 5;
console.log("The += assignment operator adds a value to a variable");
console.log("var addIt = 10;");
console.log("addIt += 5;");
console.log("result: ", addIt);

var takeIt = 10;
takeIt -= 5;
console.log("The -= assignment operator subtracts a value from a variable");
console.log("var takeIt = 10;");
console.log("takeIt -= 5;");
console.log("result: ", takeIt);

var timesIt = 10;
timesIt *= 5;
console.log("The *= assignment operator multiplies a variable");
console.log("var timesIt = 10;");
console.log("timesIt *= 5;");
console.log("result: ", timesIt);

var divideIt  = 10;
divideIt /= 5;
console.log("The /= assignment divides a variable");
console.log("var divideIt  = 10;");
console.log("divideIt /= 5;");
console.log("result: ", divideIt);

var modIt = 10;
modIt %= 5;
console.log("The %= assignment operator assigns a remainder to a variable");
console.log("var modIt = 10;");
console.log("modIt %= 5;");
console.log("result: ", modIt);


/*
NOTES:
-COMPARISON operators: == != === !== > >= < <=
  -
*/
console.log("-----using comparison operators: == != === !== > >= < <=");


/*
NOTES:
-LOGICAL operators: ! || &&
-generally used with boolean values and, when they are, return boolean values as well
-however, both && and ||actually return the value of one of their operands, so if the relevant operand is not a boolean value, the operator may return a non-boolean value
*/
console.log("-----using logical operators: ! || &&");


/*OPERATORS QUICK REFERENCE:
  ARITHMETIC OPERATORS:
    + add
    - subtract
    * multiply
    / divide
    ++ increment by 1
    -- decrement by 1
    % modulus (division remainder)

  ASSIGNMENT OPERATORS:
    = assign
    += add and assign
    -= subtract and assign
    *= multiply and assign
    /= divide and assign
    %= modulus and assign

  COMPARISON OPERATORS:
    == equal
    === strict equal
    != not equal
    !== strict not equal
    > greater than
    >= greater than or equal to
    < less than
    <= less than or equal to

  LOGICAL OPERATORS:
    ! NOT
    || OR
    && AND
*/










console.log("----------EXPRESSIONS----------");
/*
NOTES:
Expressions - using variables and values in conjunction with assignment operators to return calculated results.
-The average is the sum of all items divided by the number of items
-Certain operations happen before other operations
-PEMDAS = Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction
*/

var aa3 = 2; //sets up our variable (a) and defines it with a value of 2
aa3 = aa3 + 3; //the assignment operator "=" actually changes the value of (a), stores the result
console.log(aa3); //this will return the number 5

var _getIt = 700;
_getIt = _getIt + 500; //changes value by adding original value (700) to new value given (500)
console.log(_getIt); //returns 1200

// The answer to c = b + 75; is stored in var c; b = 25, it gets the answer from var c
var b = 25;
var c; //stores the result, declaring without defining
c = b + 75;
console.log(c);


var dd = 5503;
var storage; //declaring without defining, stores the result
storage = dd * 443 + 12;
console.log(storage);

//----------CALCULATE AGE USING BIRTH YEAR AND CURRENT YEAR
var yearBorn = 1980;
var age = 2015 - yearBorn;
console.log("You are: " + age + "years old");

//----------CALCULATE THE AREA OF A TRIANGLE
//area of the triangle is half of the width times the height (4 / 2 = 2 x 5 = 10)
var triangleWidth = 4; //given
var triangleHeight = 5; //given
var triangleArea = triangleWidth * triangleHeight / 2; //result
console.log(triangleArea);

//----------CALCULATE THE AVERAGE OF A SET OF QUIZZES
//The average is the sum of all items divided by the number of items
//In order for this to work, you must consider the order of operations. the variables to the quizzes must be put in parenthesis so that they are calculated before they are divided by four
var quiz1 = 89;
var quiz2 = 95;
var quiz3 = 75;
var quiz4 = 66;
var quiz5 = 88;
var quizAverage = (quiz1 + quiz2 + quiz3 + quiz4 + quiz5) / 5; //result variable
console.log("The quiz average for the class is: " + quizAverage);

//----------EXPRESSIONS WITH ARRAYS
var appleBins = [778, 332, 988, 887, 332, 487]; //the array
var totalBins = appleBins[0] + appleBins[1] + appleBins[2] + appleBins[3] + appleBins[4] + appleBins[5]; //the expression
console.log("total apple bins: " + totalBins);

var cars = [1234, 139, 9, 1];
var totalCars = cars[0] + cars[1] + cars[2] + cars[3];
console.log("the cars in my collection: " + totalCars);

//----------EXPRESSIONS AND CONCATINATION
var firstName2236 = "Adrian";
var lastName2236 = "Sane";
var fullName2236 = firstName2236 + " " + lastName2236; //adding a second + and a blank space inside of quotation marks allows me to put a space between my first name and my last name
console.log(fullName2236);

//----------EXPRESSIONS WITH ASSIGNMENT OPERATORS
var aDub = 20;
aDub = aDub + 4;
console.log(aDub);

//another way to write this expresion would be to use the += assignment operator
var aDubble = 20;
aDubble += 4;
console.log(aDubble);

//EXAMPLE:
var numero = 992;
numero = numero + 21;
console.log(numero);

var numero2 = 4;
numero2 += 33;
//document.write(numero2);

//----------EXPRESSIONS WITH INCREMENT AND DECREMENT OPERATORS
//increment and decrement operators only work with values of 1

var down = 21;
down --;
console.log(down);

var up = 23;
up ++;
console.log(up);

var wayUp = 9087678;
wayUp ++
console.log(wayUp);

var wayDown = 428239819;
wayDown --;
console.log(wayDown);









console.log("----------CONCATINATE----------");
/*
NOTES:
-The + operator can also be used to concatenate (add) strings
-When used on strings, the + operator is called the concatenation operator
-To add two or more string variables together, use the + operator
-The += operator can also be used to concatenate strings
-If you add a number and a string, the result will be a string
-if you add two numbers, even if one is in a string, it will return a number
*/

//EXAMPLE:
var txt1 = "what a very";
var txt2 = "nice day";
var txt3 = txt1 + txt2;
console.log("what a very");
console.log("nice day");
console.log("var txt3 = txt1 + txt2;");
console.log("result: ", txt3);

txt4 = "What a very";
txt4 += "nice day";
console.log("The += operator can also be used to concatenate strings")
console.log('txt4 = "What a very";');
console.log('txt4 += "nice day";');
console.log(txt4);

console.log("-----Adding two numbers, will return the sum, but adding a number and a string will return a string");
//EXAMPLE:
first = 5 + 5; //adding two numbers using the + to concatinate will ALWAYS return a sum
second = "5" + 5; //adding two numbers using the + to concatinate will ALWAYS return a sum
third = "Hello" + 5; //adding a string and a number will return a string











console.log("----------CASTING----------");
/*
NOTES:
-Casting - Treating strings like numbers and numbers like strings
-Casting types: arrays, numbers, booleans, strings, etc.
-Number();
-String();
*/
var stringVar = "6"; //This holds the string 6 not the numerical character 6. (its in parenthesis)
var result = 7 + stringVar; //this variable puts the string and the number together and returns it as a number
console.log(result);

var stringVar2 = "455";
var theResult = 55345 + stringVar2; //add the result of theResult to the value of stringVar2
console.log(theResult);

var stringVar3 = "70";
var thirdResult = 43 + stringVar3;
console.log(thirdResult);


//CASTING STRINGS AS NUMBERS - Number()
//in order to get a computer to treat the result variable as a number rather than a string, you enclose the variable in parenthesis and add the word Number (capital N)
var stringVar4 = "6";
var result4 = 7 + Number(stringVar4); // treats stringVar like a number rather than a string because of (Number and ())
console.log(result4);
//this tells the machine to treat it or cast it as a number rather than a string

var stringVar5 = "900";
var result5 = 800 + Number(stringVar5);
console.log(result5); //returns the NUMBER 1700

var stringVar6 = "2330194";
var result6 = 8443751134 + Number(stringVar6);
console.log(result6);


//CASTING NUMBERS AS STRINGS - String()
var areaCode = 718;
var firstPart = 585;
var secondPart = 8987;
var phoneNo = String(areaCode) + String(firstPart) + String(secondPart); //remember to use capital letters when casting
console.log(phoneNo);

var wideness = 20;
var thickness = 90;
var plumpness = 26;
var theMeasured = String(wideness) + String(thickness) + String(plumpness);
console.log(theMeasured);

var age = 35;
var height = 72;
var weight = 300;
var thePanda = "(" + String(age) + ")" + String(height) + String(weight);
console.log(thePanda);











console.log("----------PROMPT AND ALERT----------");
/*
NOTES:
-The prompt() method displays a dialog box that prompts the visitor for input
-A prompt box is often used if you want the user to input a value before entering a page
-Note: When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. Do not overuse this method, as it prevent the user from accessing other parts of the page until the box is closed
-The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null
-SYNTAX: prompt(message);
*/
//var userInput = prompt("Enter your year of birth:");
//console.log(userInput);


//var width = prompt("We are calculating the area of a rectangle.\nPlease enter the width:");
//var height = prompt("Please enter the height:");
//var area = width * height; //calculates with the given from variables width and height
//console.log(area);


//var userName = prompt("please enter your name");
//var userAge = prompt("please enter your age");
//alert("Your name is " + userName + " " + "and you are " + userAge + "years old");

/*
NOTES:
-The alert() method displays an alert box with a specified message and an OK button.
-An alert box is often used if you want to make sure information comes through to the user.
-The alert box takes the focus away from the current window, and forces the browser to read the message. Do not overuse this method, as it prevents the user from accessing other parts of the page until the box is closed.
-SYNTAX: alert(message);
*/

//alerting a variable:
var h1 = 50;
var w1 = 90034;
var thisArea = h1 * w1;
var thisResult = "the area of the rectange is" + thisArea + " square feet";
//alert(thisResult);










console.log("----------REGULAR EXPRESSIONS----------");
/*
NOTES: http://www.w3schools.com/js/js_regexp.asp
-A regular expression is a sequence of characters that forms a search pattern.
-When you search for data in a text, you can use this search pattern to describe what you are searching for.
-A regular expression can be a single character, or a more complicated pattern.
-The search pattern can be used for text search and text replace operations
-A regular expression is an object that describes a pattern of characters.
-Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
-SYNTAX: /pattern/modifiers;


-EXAMPLE:
  -var patt = /w3schools/i

    -/w3schools/i  is a regular expression.
    -w3schools  is a pattern (to be used in a search).
    -i is a modifier (modifies the search to be case-insensitive).


-In JavaScript, regular expressions are often used with the two string methods:
  -search() - uses an expression to search for a match, and returns the position of the match
  -replace() - returns a modified string where the pattern is replaced
*/

//----------Using string SEARCH() with regular expressions
//Use a regular expression to do a case-insensitive search for "w3schools" in a string:
var regExpress = "Visit W3Schools";
var n = regExpress.search(/w3schools/i);
//when used in correlation with a function and html, you can have the result display as 6

//----------Using String SEARCH() With String
//The search method will also accept a string as search argument.
//The string argument will be converted to a regular expression.
var theStr = "Visit W3Schools";
var nn = theStr.search("W3Schools");







console.log("----------ARRAYS----------");
/*
NOTES: http://www.w3schools.com/js/js_arrays.asp
-An array is a special variable, which can hold more than one value at a time
-Arrays are a unique datatype that can hold a collection of values
Arrays use numbers to access its "elements"
-In javascript, arrays are constructed by brackets [ ]
-Arrays can hold any value type separated by a comma.
-Arrays are indexed numerically beginning at 0.
-To access or set a value, use an index number inside of brackets [ ]
-You can have an unlimited amount of data items
- arrays are a unique data type that can hold a collection of values
- new = create a NEW array object - w/o the NEW it is called a literal array
- little impact on code if any
- myArr = new object of type array
- in javascript, arrays are constructed by the brackets [ and ]
-JavaScript variables can be objects. Arrays are special kinds of objects.
-Because of this, you can have variables of different types in the same Array.
-You can have objects in an Array. You can have functions in an Array.
-Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays
-There is no need to use new Array() method
*/

/*Some common array methods:
concat(); //used to join 2 or more arrays
join(); //join all elements of an array into a string
pop(); //removes last element of an array
push(); //add a new element to the end of an array
reverse(); // reverse order of elements in an array
shift(); //removes first element of an array
slice(); //select elements from an array
sort(); //sort an array in ascending or descending order
toString(); //returns string representation of an array
*/


console.log("----------MATRIX ARRAYS----------");
// a matrix array
var matrix = [ [],[],[],[] ];

for (var i=0; i<4; i++) {
   for (var j=0; j<4; j++) {
      matrix[i][j] = i*j;
   }
};
console.log(matrix);
// returns: [[0,0,0,0], [0,1,2,3], [0,2,4,6], [0,3,6,9]];

// an array with some "nested" arrays inside of it, or, a "multi-dimensional" array
var a = [

 [c, 100, true, false, {}],

 ["baseball", "football", "basketball"],

 [document.getElementById("input1"), document.getElementsByClassName("btn")],

 [23, 15, 435, 223, 305]

];

//----------writing out an array on one line (literal arrays)
//For simplicity, readability and execution speed, use the literal method with out the new array() method.
var myNewArray = [0, "first", function(funcName){}, true];
var myChicksArray = ["carol", "bertha", "sue", "jezebel"];
var myRidesArray = ["mustang", "740i", "maxima"];
var myCoolArr = ["baseball", "football", "basketball"];

console.log(myCoolArr[0] + " " + myCoolArr[1] + " " + myCoolArr[2]);

var muppetNames = ["Kermit", "Miss Piggy", "Gonzo", "Beaker", "Animal"]; //index 0,1,2,3,4
console.log(muppetNames); //prints out in the console

//Array access notation lets me see whats in the index number 3
console.log(muppetNames[3]);
console.log(muppetNames[2]);
console.log(muppetNames[4]);

muppetNames [1] = "Beaker"; //Change index 1 to Beaker
console.log(muppetNames[1]);

var num = 4;
console.log(muppetNames[num]); //Allows me to use the declaration "num" to access index number 4

//Spaces and line breaks are not important. A declaration can span multiple lines
var carros = [
    "Saab",
    "Volvo",
    "BMW"
];



//----------writing out an array using the new Array() method
var comicsArray = new Array(); //declare the array
comicsArray[0] = "spiderman"; //define the array index values
comicsArray[1] = "batman"; //define the array index values
comicsArray[2] = "ironman"; //define the array index values
comicsArray[3] = "spawn"; //define the array index values
comicsArray[4] = "wolverine"; //define the array index values
console.log(comicsArray);
console.log(comicsArray[4]);

var dungeonsAndDragonsArray = new Array();
dungeonsAndDragonsArray[0] = "troll";
dungeonsAndDragonsArray[1] = "orc";
dungeonsAndDragonsArray[2] = "mage";
dungeonsAndDragonsArray[3] = "dwarf";
dungeonsAndDragonsArray[4] = "elf";
dungeonsAndDragonsArray[5] = "wizard";
console.log(dungeonsAndDragonsArray);
console.log(dungeonsAndDragonsArray[4], dungeonsAndDragonsArray[2]);

var heros = new Array();
heros[0] = "Spiderman";
heros[1] = "Batman";
heros[2] = "Ironman";
heros[3] = "Thor";
heros[4] = "Superman";
heros[5] = "Spawn";
heros[6] = "Rust";
heros[7] = "Captain Marvel";
heros[8] = "Rocket Racoon";
heros[9] = "Crush";
heros[10] = "Wolverine"
heros[11] = "Professor X";
heros[12] = "Cyclops";
console.log("Super Hero Lineup: " + heros);
console.log("Super Hero Lineup: " + heros);

var villains = new Array();
villains[0] = "Darkseid";
villains[1] = "Joker";
villains[2] = "Thanos";
villains[3] = "Mephisto";
villains[4] = "Venom";
villains[5] = "Carnage";
villains[6] = "Loki";
villains[7] = "Bizzaro";
villains[8] = "Eli";
villains[9] = "Abomination";
villains[10] = "juggernaut";
villains[11] = "Magneto";
villains[12] = "Mr. Sinister";
console.log("Super Villain Lineup: " + villains);
console.log("Super Villain Lineup: " + villains);

var comics = ["DC", "Marvel", "Dark Horse", "image"];
console.log("Universe Lineup: " + comics);

var teams = ["Avengers", "X-Men", "Justice League", "Guardians", "Sinister Six", "Brotherhood"];
document.write("Team Lineup: " + teams);

document.write(heros[0] + " stands alone against " + villains[4] + " in the " + comics[1] + " universe");


//Arrays use numbers to access its "elements". In this example, person[0] returns John:
var person = ["John", "Doe", 46];

//Objects use names to access its "members". In this example, person.firstName returns John:
var person = {firstName:"John", lastName:"Doe", age:46};


//----------ARRAYS WITH PROPERTIES AND METHODS - .LENGTH / .SORT()
//The real strength of JavaScript arrays are the built-in array properties and methods

var cars = ["ford", "lexus", "honda", "toyota"];
var xyz = cars.length; //The length property returns the number of elements in cars
var abc = cars.sort(); //The sort() method sort cars in alphabetical order
console.log(xyz, abc); //returns total number of indexes and in alphabetical order

var phones = ["iphone", "android", "blackberry", "windows"];
var totalInArray = phones.length;
var alphabetized = phones.sort();
console.log(totalInArray, alphabetized);

var nyTeams = ["yankees", "mets", "giants", "jets", "knicks", "nets", "islanders", "rangers", "bills", "liberty"];
var totalTeams = nyTeams.length;
var alphabetized2 = nyTeams.sort();
console.log(totalTeams, alphabetized2);


//---------ADDING ARRAY ELEMENTS
//The easiest way to add a new element to an array is to use the length property
//The length property provides an easy way to append new elements to an array without using the push() method
//Adding elements with high indexes can create undefined "holes" in an array
var fruits = ["apple", "banana", "kiwi", "orange"];
fruits[fruits.length] = "lemon"; //adds a new element (Lemon) to fruits array
console.log(fruits);

var games = ["call of duty", "dying light", "resident evil", "the last of us"];
games[games.length] = "the order 1886";
console.log(games);

var systems = ["playstation", "xbox", "wii", "dreamcast"];
systems[systems.length] = "atari";
var systemsAlpha = systems.sort();
console.log(systemsAlpha, systems);


//----------LOOPING THROUGH ARRAY ELEMENTS - USING A FOR LOOP
//The best way to loop through an array is using a standard for loop:
var index;
var text;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
for	(index = 0; index < fruits.length; index++) {
      text += fruits[index];
};










console.log("----------CONDITIONALS IF/ELSE----------");
/*
NOTES:
-Conditionals make decisions
-if the condition in the argument is true, the code in the statement will run
-if it evaluates to false, the inner code will be skipped.
Example:
          if(someCondition){
            doThis();
          }else if(anotherCondition){
            doThat();
          }else{
            doSomething();
      }
-Type Coercion:
  -if js is expecting a certain type of data and gets a different type, it will try to coerce (convert) what it got into what it needs
  -a common use for this is when dealing with undefined or null variables.
  -COERSION RULES:
    -undefined = false
    -null = false
    -0 = false
    -any other number (including negative numbers) = true
    -"" = false
    -"any other string" = true
    -using the === operatoris used for coersing different datatypes
*/

if(true){
  console.log("its true, its true");
}

var theUserName = "adrian sane";
if(theUserName == "adrian sane"){
  console.log("the user has signed in");
}

var theAge = 35,
    minAge = 18;
if(theAge > minAge){
  console.log("35 is greater than 18");
}

var myMoney = 5000,
    yourMoney = 4000;
if(myMoney < yourMoney){
  console.log("You're RICH dude!!!")
}else{
  console.log("I'm RICH dude!!!")
}

var theCar = 4000,
    bank = Math.random() * 1000, //return a random number from 0 to 1000
    bonus = Math.random() * 3000, //return a random number from 0 to 3000
    scratchTicket = Math.random() * 2000; //return a random number from 0 to 2000

  if(bank >= 1000 && bonus >= 3000){ //if these conditions are met
    console.log("go buy the car"); //this code will run, else, the else if code will run if conditions are met
  }else if(bank + bonus >= theCar){//if these conditions are met
    console.log("go buy the car");//this code will run, else, the else if code will run if conditions are met
  }else if(bank + scratchTicket >= theCar){//if these conditions are met
    console.log("go buy the car");//this code will run, else, the else if code will run if conditions are met
  }else if(bank + bonus + scratchTicket >= theCar){//if these conditions are met
    console.log("go buy the car");//this code will run, else, the else if code will run if conditions are met
  }else if(bonus + scratchTicket >= theCar){
    console.log("go buy the car");//this code will run, else, the else if code will run if conditions are met
  }else{//if these conditions are met
    console.log(theCar);//this code will run, else, the else if code will run if conditions are met
  };


//decision maker js code snippet
//this random number will have a 50% chance of being above or below 0.5
//math.random returns a number between 0 and 1
var rand = Math.random();
if(rand > 0.5){
  console.log("Yes! Do it!!!");
}else{
  console.log("No! Dont do it!!!");
}



var rand2 = Math.random();
if(rand2 > 0.66){
  console.log("Yes! Do it!!!");
}else if(rand2 > 0.33){
  console.log("No! Dont do it!!!");
}else{
  console.log("Hmmm.... Maybe!");
}


//coersion
//shopping cart example
var cost = 10,
    qty; // variable not yet set. qty is any number except 0

if(qty != undefined){
  var price = cost * qty;
  console.log(total + "Total");
}else{
  console.log("qty is not defined.");
}



console.log("----------TERNARIES----------");
/*
NOTES:
-TERNARY OPERATORS - DECISION MAKING ON ONE LINE - A ONE LINE WAY TO WRITE AN IF ELSE CONDITIONAL STATEMENT
-This operator requires 3 components
-The ternary operator is represented by a question mark ?
-It works to shorten conditionals
-Ternaries are good when you are using assignment operators "var = book;"
-NOTE: if youre dealing with large blocks of code, you may want to deal with it in more traditional ways like using if else statements.

-A regular conditional:
    if(condition){
      do if true;
    }else{
      do if false;
    }

to shorten this conditional statement using ternary operators it would look like this: (condition) ? do if true : do if false;

*/
/************************************************************************************************/
//if the min gpa is over the 2.5 score, the student can graduate
var gpa = Math.random() * 4.0;
  if(gpa > 2.5){
    console.log("you can graduate");
  }else{
    console.log("sorry dude, you fail");
  }

//the above conditional as a ternarie:
//(condition) ? do if true : do if false;
(gpa > 2.5) ? console.log("you can graduate") : console.log("sorry dude, you fail");
//^condition ? ^what happens if its true      : ^what happens if its false
/************************************************************************************************/

/************************************************************************************************/
//if the child is under 10, he reads dr. seuss books, if not, he reads hamlet
var childsAge = 14,
    book;
  if(childsAge < 10){
    book = "Seuss";
  }else{
    book = "Hamlet";
  };
console.log(book);

//the above code as a ternary:
book = (childsAge > 10) ? "Seuss" : "Hamlet";
console.log(book);
/************************************************************************************************/

/************************************************************************************************/
//my kill death ratio equals .750, gun1 equals the scar 119, gun2 = the vector kd
var kd = .750,
    gun1 = "scar 119",
    gun2 = "Vector kd";

if(kd > 1.0){
  console.log("I can use the: " + gun1);
}else{
  console.log("Not good enough yet, still have to use the: " + gun2);
}

//the above code as a ternary:
(kd > 1.0) ? console.log("I can use the: " + gun1) : console.log("Not good enough yet, still have to use the: " + gun2);
/************************************************************************************************/

/************************************************************************************************/
//using a ternarie along with arrays
var pwr = Math.round(Math.random() * 100), //return a random number from 0 to 100 rounded to the nearest whole number
    spiderMan = "spidy: " + pwr,
    venom = "venom: " + pwr,
    hero = [spiderMan], //an array with one index[0]
    villain = [venom];  //an array with one index[0]

  if(hero[0] >= villain[0]){
    console.log(hero[0] + " wins!");
  }else if(villain[0] >= hero[0]){
    console.log(villain[0] + " wins!");
  }else{
    console.log("No one wins");
  }

//the above code as a ternary:
(hero[0]>villain[0]) ? console.log(hero[0] + " wins!") : console.log(villain[0] + " wins!");
/************************************************************************************************/

/************************************************************************************************/











console.log("----------MATH----------");
/*
NOTES:
Use capital M
  -Math.max() = returns the largest number
  -Math.min() = Returns the smallest of zero or more numbers.
  -Math.sqrt() = returns the square root of a number
  -Math.round() = rounds numbers to the nearest whole number
  -Math.random() = returns a random number betwee 0 and 1
  -Math.abs() = returns the absolute value of a number
  -Math.cbrt() = returns the cube root of a number
  -Math.ceil() = returns the smallest integer greater than or equals to a number
  -Math.exp(x) = returns Ex, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm.
  -Math.floor(x) = Returns the largest integer less than or equal to a number.
*/
var theMath = Math.max(12342, 4239230, 4824920302, 588539423010, 59302032094); //returns the largest number
console.log(theMath);

var theSqr = Math.sqrt(332); //returns the square root of a number
console.log(theSqr);

var theRnd = Math.round(3.4); //rounds numbers to the nearest whole number
console.log(theRnd);

var theRan = Math.random(); //returns a random number betwee 0 and 1
console.log(theRan);

var theRan2 = Math.random() * 100; //returns a random number from 0 to 100
console.log(theRan2);



//AS3
//RANDOM NUMBERS SNIPPET:
function randomNumbers(minNumber, maxNumber){
  var Results = Math.floor(Math.random() * maxNumber) + minNumber;
  return Results;
}
randomNumbers(0, 5000);










console.log("----------WHILE LOOPS----------");
/*
NOTES:
SYNTAX -
  while (condition) {
  statement
  }


  while (expression){
     Statement(s) to be executed if expression is true
  }

-Loops can execute a block of code as long as a specified condition is true
-If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
-The while loop loops through a block of code as long as a specified condition is true.
-The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
-The purpose of a while loop is to execute a statement or code block repeatedly as long as expression is true. Once expression becomes false, the loop will be exited.
*/

//Example:
//The following while loop iterates as long as n is less than three.

var n = 0,
    x = 0;
while(n<3){ //condition: as long as n is < 3
  n++; //increment n by one
  x += n; //add and assign the value of x to n.
  console.log(n);
}



//example
var b = 10; //this variable sets up the counting index
while(b>0){ //checks the condition
  console.log(b+"Kegs on te wall");
  b--;  //decrements or increments the loop (index), otherwise it would loop for infinity
}


//example
var count = 0;  //the index
document.write("<br />" + "Starting the loop here" + "<br />");
while(count<10){ //while the count is less than 10...
  document.write("current count: " + count + "<br />"); //run this code
  count++;  //increment the count index
};
document.write("Loop stopped");



//example
var counter = 0;
while(counter<10){ //while count is less than 10 (its 0)
  console.log("you gone be my new flame" + "Baby try a new flame");
  counter++; //count up until its 10
};










console.log("----------DO WHILE LOOPS----------");
/*
NOTES:
Loops can execute a block of code as long as a specified condition is true
If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser
The do/while loop is a variant of the while loop.
This loop will execute the code block once, before checking if the condition is true.
It will then repeat the loop as long as the condition is true.
The do...while loop is similar to the while loop except that the condition check happens at the end of the loop. This means that the loop will always be executed at least once, even if the condition is false.
do's in do while loops will be ran first, followed by the while. This means that a do will run even if a while is false.
The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
SYNTAX:
  do{
    statements to be executed
  }while; - (Note the semicolon used at the end of the do...while loop.)
*/

//example:
var count = 0;
document.write("<br />" + "starting loop" + "<br />");
do{
  document.write("<br />" + "current count: " + count + "<br />");
  count++;  //dont forget to set the index counter or the loop will run for ever
}while(count<10);



//example:
//In the following example, the do...while loop iterates at least once and reiterates until i is no longer less than 5.
var i = 0;
do{
  i += 1; //add and assign the value of i (0) to 1 (acts as the counter)
  console.log(i); //console the index of i
}while(i < 5); // as long as the index of i(0) is less than 5



//example
var c = 10;
do{
  console.log(c + "ways i love you");
  c--;
}while(c > 0);


var droga = 5,
    notDroga = 20;
do{
  console.log("droga droga");
  droga++;
}while(droga < notDroga);







console.log("----------FOR LOOPS----------");
/*
NOTES:
SYNTAX -
  for (initialization; condition; final-expression){ //All three expressions in the head of the for loop are optional.
     statement;
  }
-Loops can execute a block of code as long as a specified condition is true
-If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
-The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop.
-All three expressions in the head of the for loop are optional.
*/

//Example: LOOP THROUGH AN ARRAY
//use a for loop to loop through the items in an array
var cars = ["BMW", "Volvo", "Saab", "Audi", "Ford", "Chevy", "Nissan", "Mistubishi"];
for(i = 0; i <= cars.length; i++){  //counting variable is set to 0, as long as i is less than or equals to the number of cars in the array, increment by one.
  console.log(cars[i]); //return the cars in the array based on the conditions in the loop that the counting variable provides.
}

//Example: FOR LOOPING USING TWO ARRAYS
var twdCharacters = ["rick", "michonne", "maggie", "daryl", "carol", "abraham", "rosita"],
    groupMembers = ["larissa " + "loves: " + twdCharacters[3], "andy " + "loves: " + twdCharacters[2], "yoly " + "loves: " + twdCharacters[0], "judy " + "loves: " + twdCharacters[1], "myra "  + "loves: " + twdCharacters[5], "princess " + "loves: " + twdCharacters[6], "ruthie " + "loves: " + twdCharacters[4]];

for(i=0; i<= groupMembers.length; i++){
  console.log(groupMembers[i]);
}


//Example: USING FOR
/*
The following for statement starts by declaring the variable i and initializing it to 0.
It checks that i is less than nine, performs the two succeeding statements, and increments i by 1 after each pass through the loop.
*/
for(i=0; i<9; i++){
  //run this statement
}

/*
All three expressions in the head of the for loop are optional.
For example, in the initialization block it is not required to initialize variables:
*/
var i = 0;
for(; i<9; i++){
  //run this statement;
}

/*
Like the initialization block, the condition block is also optional. If you are omitting this expression,
you must make sure to break the loop in the body in order to not create an infinite loop.
*/
for(var i = 0;; i++){
  console.log(i);
  if(i > 3) break;
}

/*
You can also omit all three blocks. Again, make sure to use a break statement to end the loop and also modify
(increase) a variable, so that the condition for the break statement is true at some point.
*/
var i = 0;
for(;;){
  if(i>3) break;
  console.log(i);
  i++;
}

//FOR LOOP COUNTDOWN
for(i =10; i>0; i--){
  console.log(i + " bottles of beer on the wall");
}

//a for loop and conditional statement
var boy = "jack",
    girl = "jill";
for(i=0; i<=100; i++){
  if(i % 2 == 0 && i % 5 == 0){
    console.log(boy + " and " + girl + " went up the hill");
  }else if(i % 2 == 0){
    console.log(boy);
  }else if(i % 5 == 0){
    console.log(girl);
  }
}










console.log("----------FUNCTIONS----------");
/*
NOTES:
SYNTAX:
  function functionName(parameter, parameter, parameter){
  code to be ran;
  code to be ran;
  code to be ran;
}
functionName(argument, argument, argument);

-Functions are one of the fundamental building blocks in JavaScript.
-A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.
-functions are best used for calculations
-To use a function, you must define it somewhere in the scope from which you wish to call it.
-A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
  -The name of the function.
  -A list of arguments to the function, enclosed in parentheses and separated by commas.
  -The JavaScript statements that define the function, enclosed in curly brackets, { }.
-Reusable code type
-Functions allow us to have code that is written once, but able to be used again and again by the machine.
-A function is used for storage just like a variable.
-Variables are used for storing values,
-Functions are used for storing lines of code
-Functions are like little modular factories
-Stuff can go in, stuff can come out.
-You can have code in one location and use a function to reference that code.
-Functions also organize code
-A function will always prefer to use a variable inside of it even if another variable outside of the function with the same name exists this is called variable scope.
-Functions provide us a way to save a block of code so we can execute it later and it can be invoked as many times as we want. (Reuseable)
-In Javascript, functions are values like all our other datatypes
-the basic structure of functions is not unlike conditionals
-Curly braces{} are for blocks of code
-Parenthesis () are for parameters
-The element after the function keyword is the name of the function. functionName
-To call a function, simply write out the name of the function followed by two parenthesis and a semicoloin ();
-call the reuseable function more than once and it will run the funtion as many times as you need it to run
-The function itself is the definition, when you call it, you use the function name to call it.
-Variable Scope - Inside and outside of functions
-you can have variables with the same name inside of a function and outside of a function as well

-Types of Functions:
  -Functions:
  -Procedures:
  -Anonymous / Closure: named this because there is not a name associated with the function


-ARGUMENTS AND PARAMETERS - getting stuff into a function
  -Arguments and Parameters are a fundamental solution to keeping our functions from being the same exact thing every single time
  -We can create dynamic results by passing identifiers / variableNames into our function. better known as PARAMETERS.
  -If you want to pass more than one ARGUMENT, separate the ARGUMENTS with commas
  -Arguments - the information being passed in. Always in the function invokation or the function call
  -Parameter - the storage container for that information. Always in the functions definition.
  -Send Arguments to Parameters.
  -You can have any number of parameters passed into a function
  -Allows you to switch one or two things to make functions a little more flexible.
  -Parameters allow you to store different materials you can use when you need them
  -note*** - Not all functions have to have parameters or arguments.
  -note*** - an argument is information you send to the function.
  -note*** - a parameter is a storage container
  -note*** - variable declarations are the only things that go in as parameters!
  -ARGUMENTS ARE THE ELEMENTS GOING IN TO A FUNCTION
  -If a function is called with missing arguments (less than declared), the missing values are set to: undefined
  -Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter: x or y etc...
  -JavaScript functions have a built-in object called the arguments object.
  -The argument object contains an array of the arguments used when the function was called (invoked).
  -This way you can simply use a function to find (for instance) the highest value in a list of numbers:
    -EXAMPLE:
      x = findMax(1, 123, 500, 115, 44, 88);

      function findMax() {
        var i, max = 0;
        for (i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
      }

------------------------RETURN VALUES
-the things coming out of a function
-returns get information out of a function once it has been calculated.
-FUNCTIONS THAT ARE RETURNING SHOULD BE ASSIGNED TO VARIABLES!!!!!!
-a return is information coming out of a function
-functions DO NOT have to return any data. (this is reffered to as a procedure)
-the RETURN statement ends a functions execution and can give a value of any type back to the point of call (this is reffered to as a method)
-The called function should be assigned to a variable
-Returns can pass any datatype
-returning values is information coming out of a function
-functions do not have to return any data (this is referred to as a procedure)
-the return statement ends a function’s execution, and can give a value (of anytype) back to the point of call (referred to as a method)
-the called function should be assigned to a variable (i.e name - see below)
-if a return gives back no value, it instead returns “undefined”
-this technique is commonly used to end a function early, during execution
-change the return statement to this 'return;'

*/

//example
function nameOfFunction(parameters, parameters){
  //re useable code goes in here
};
nameOfFunction(/*arguments, arguments*/); //invoking (calling) the function for use ARGUMENTS GO IN THE FUNCTION CALL



//example
function outputMsg(){
  console.log("Hello Earth");
  console.log("I am an earthling");
};
outputMsg(); //ARGUMENTS GO IN THE FUNCTION CALL



//example: a function that calculates the area
function calcArea(){
  var width = 20;
  var height = 45;
  var area = width * height;
  console.log(area);
};
calcArea(); //ARGUMENTS GO IN THE FUNCTION CALL



//example:
function greeting(name, age, sex){
  console.log("great to see you," + " " + name);
  console.log("you are: " + " " + age + " years old, ");
  console.log("and are a handsome " + " " + sex);
};
greeting("adrian", 34, "man");//the arguments for the parameters in the greeting function



//exmple: SCOPE
//The variable width is scoped to the function calcArea. The function will use this variable, not the one outside of the function.
var w = 500; //scoped OUTSIDE of the function below
function calcArea2(){
  var w = 1220;
  var h = 122;
  var a = w * h;
  console.log(a);
};
calcArea2(); //ARGUMENTS GO IN THE FUNCTION CALL



//example:
/*
-JavaScript functions have a built-in object called the arguments object.
-The argument object contains an array of the arguments used when the function was called (invoked).
-This way you can simply use a function to find (for instance) the highest value in a list of numbers:
*/
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i, max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
};
findMax();



//example: a basic named functions syntax
function nameOfFunction(params, params, params){
  //reusable code blocks go here
};
nameOfFunction(/*args, args, args*/);



//example: using global variables as parameters
var value1 = 1,
    value2 = 2,
    myFn = function(var1, var2){
      console.log("Function number: ", + var1 + var2);
    };
myFn(value1, value2);



//example: calling the function before defining it
calcArea3(30,20);
function calcArea3(w, h){
  var area = w * h + Math.random() + 65000;
  console.log("This is a crazy area being calculated: " + area);
};



//example: calculating dog years
function dogYears(age){
  var dogYears = age * 7;
  console.log("Sparky the dogs age is: " + dogYears);
};
dogYears(4);
dogYears(12);
dogYears(415);
dogYears(78);
//using a value is the same thing as using a variable that represents that value
var age1 = 29;
dogYears(age1);




//example: RETURNING VALUES - Things coming OUT of functions
/*
-the things coming out of a function
-returns get information out of a function once it has been calculated.
-FUNCTIONS THAT ARE RETURNING SHOULD BE ASSIGNED TO VARIABLES!!!!!!
-a return is information coming out of a function
-functions DO NOT have to return any data. (this is reffered to as a procedure)
-the RETURN statement ends a functions execution and can give a value of any type back to the point of call (this is reffered to as a method)
-The called function should be assigned to a variable
-Returns can pass any datatype
-returning values is information coming out of a function
-functions do not have to return any data (this is referred to as a procedure)
-the return statement ends a function’s execution, and can give a value (of anytype) back to the point of call (referred to as a method)
-the called function should be assigned to a variable (i.e name - see below)
-if a return gives back no value, it instead returns “undefined”
-this technique is commonly used to end a function early, during execution
-change the return statement to this 'return;'
*/
var myFn = function(){
  return "james bond";
}
var name = myFn(); //the called function should be assigned to a variable, name is now equal to "James Bond".
console.log(name);



//Example:
var myCtr = 1,
    myCounter = function(newct){ //newct used as a parameter and called inside the function as an empty variable
      myCtr += newct; //add and assign myCtr (1) plus the value of the arguments when the function is called
      return myCtr;
    };
var cnt = myCounter(5); //a new variable (cnt) holding the myCounter function with an argument of 5 for the parameter
console.log("counter: ", cnt);
var cnt = myCounter(2); //a new variable (cnt) holding the myCounter function with an argument of 2 for the parameter
console.log("counter: ", cnt);



//example: a function with nested conditionals
var valueForWeather = "Overcast",
    valueForWaves = Math.random(),
    moodFN = function(weather, waves){
	if(weather === "Sunny"){
			if(waves === 10){
				mood = "Pumped";
			}else if((waves <= 9) && (waves >= 5)){
				mood = "Mellow";
			}else{
				mood = "Bummed";
			};
	}else if(weather === "Overcast"){
			if((waves < 10) && (waves >= 7)){
				mood = "Jacked Up";
			}else if((waves <= 6) && (waves >= 3)){
				mood = "Totally Bummed";
			}else{
				mood = "Not Happy";
			};
	}else{
		mood = "Sad";
	};
return mood;
};//end function
var moodType = moodFN(valueForWeather, valueForWaves);
console.log("Bobs Mood is ", moodType);










console.log("----------OBJECTS----------");
/*
NOTES: {KEY : VALUE} pairings
-OBJECTS, ARRAYS, REGULAR EXPRESSIONS, AND FUNCTIONS ARE ALL CONSIDERED TO BE OBJECTS. Aything that is not an object, acts like an object.
-The keyword "new", helps us create objects
-objects are collections of keys and values for storing data {KEY : Value} pairings, also known as associative pairing
-arrays and objects are both used to store multiple values arrays vs objects:
     1.  arrays store by numerical index
     2.  objects store by a key index
-keys in objects are names (similar to variables), used to index a value inside the object
-similar to making an array, we declare the object’s properties inside the literal, separating by comma...
-Javascript is an object oriented language
-It was designed to have rich mutable objects. ie, returning an array of strings from a method.
-Objects are basically collections of keys and values
-Arrays and objects are both used to store multiple values
-Arrays vs objects:
	-Arrays store by: Numerical index. [0, 1, 2, 3, 4, 5, etc]
	-Objects store by: Key index. Keys in objects are names (similar to variables), used to index a value inside the object.
-Objects use keys associated with values.
-Objects are defined within the curleybraces {}.
-Curley Braces {enclose the data items that we want to use.}
-NOTE!!!!!keys and their values are separated by commas,,,,
-Pairs of names (strings) and values (any value) where the name is separated from the value by a colon.
-The Object constructor creates an object wrapper for the given value.
-If the value is null or undefined, it will create and return an empty object, otherwise,
  -it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.
-When called in a non-constructor context, Object behaves identically to new Object().
*/
//EXAMPLES:
person = {"name":"bond", "age":35, "secret agent": true};/*Name is associated with the value of the first item: "name":"bond", etc. The value stored within name is "bond"*/
//quotes are not needed when using keys
person2 = {name : "bond", age : 35, secretAgent : true};
guy = {name:"adrian sane", age:33, coolness:true};
girls = {april:"amy", june:"june", august:"ames", october:"larissa"};

/* accessing object properties
     - below are 3 ways you can access the property information in an object
         1. dot notation
         2. index notation using a variable as the index
         3. index notation using a string

     - also keep in mind that since the keys can be strings, you could access the keys using string variables
 */
//ACCESSING VALUES USING DOT.NOTATION
person3 = {sex:"male", age:28, fName:"lawrence", lName:"fishburn", job:"hero", home:"matrix"};
console.log(person3.sex, person.age, person3.fName, person3.lName, person3.job, person3.home);

object1={
  textField1:"first name",
  textField2:"last name",
  textField3:"password",
  button:"btn",
  button1:true
};
console.log(object1.textField1, object1.textField2, object1.textField3, object1.button, object1.button1);


//ACCESSING VALUES USING SETTERS
thisObj = {num1:24, num2:43, num3:93, num4:12, num7:63};
thisObj["num5"] = 54;//sets a new key:value pair in the object using object notation and a string
//or
thisObj.num6 = 72;//sets a new key:value pair in the object using a variable as the index
console.log(thisObj);

//ACCESSING NESTED OBJECTS:
anotherObj={  //---------------------------------object
  nestedObj:{ //------------------nested object
    val1:122,
    val2:872,
    val3:211,
    val4:502
  },  //------------------nested object
  val5:"stringy",
  val6:true,
  val7:false,
  val8:"AdrianSane"
};  //---------------------------------object
console.log(anotherObj);
console.log(anotherObj.nestedObj.val3);//dot.notation drills down and pulls out the val3 key:value pair to return the value of 211
console.log(anotherObj.val8);










console.log("----------OBJECT / FUNCTION / ARRAY / CONDITIONAL----------");
var card = {fName:"Adrian", lName:"Sane", active:true, phone:"727-480-3173",//------------------------------------------------OBJECT
              address:{//---------------------------------------------------------INNER OBJECT
                street:"177 main street",
                city:"bronx",
                state:"ny",
                zip:10433,
                cornerOf:["university", "maple"]
              },//----------------------------------------------------------------INNER OBJECT
            married:false,
            children:false,

            showInfo:function(){  //----------------------------------------------------------------------FUNCTION
              if(card.married != true){//------------------------------------------------CONDITIONAL STATEMENT
                card.married = "Larissa Sane";
              }else{
                card.married = "Single";
              };//-----------------------------------------------------------------------CONDITIONAL STATEMENT
              //------------------------------------------------------------------------SCOPED VARIABLES
              var userCard = "Name: " + card.fName + " " + card.lName,
                  userContact = "Address: " + this.address.street + " " + "<br />" + "<hr/>"
                                            + this.address.city + " " + "<br />" + "<hr/>"
                                            + this.address.state + " " + "<br />" + "<hr/>"
                                            + this.address.zip + " " + "<br />" + "<hr/>"
                                            + "Corner of: " + "<br />" + "<hr/>"
                                            + this.address.cornerOf[0] + " and " + "<br />" + "<hr/>"
                                            + this.address.cornerOf[1] + "<br />" + "<hr/>",
                  userPhone = "Phone: " + card.phone + "<br />" + "<hr/>",
                  userMarried = "Wife: " + card.married + "<br />" + "<hr/>";
              //------------------------------------------------------------------------SCOPED VARIABLES
              var user = [userCard, userContact, userPhone, userMarried];//----------------AN ARRAY TO HOLD VALUES OF SCOPED VARIABLES
              return user;
            } //------------------------------------------------------------------------------------------FUNCTION

};//---------------------------------------------------------------------------------------------------------------------------OBJECT
document.write(card.showInfo() + "<br />");//call the function inside the object that uses the key:value pairs to pull info from




var charStats = {
                  randomNumbers:function(minNumber, maxNumber){
                    var Results = Math.floor(Math.random() * maxNumber) + minNumber;
                    return Results;
                  },

                  //character attribute arrays
                  style:["Ninjitsu", "Karate", "Judo", "KunFu", "Sumo", "TaiChi", "Hapkido", "KickBoxing"],
                  weapon:["Chain", "Sword", "Katana", "Nunchucks", "Stars", "Sais", "Bow"],
                  element:["Fire", "Smoke", "Ice", "Poison", "Mind", "Darkness", "Water"],

                  //character objects
                    scorpion:{name:"Scorpion", age: 176, height: "6 foot 4", weight: 180, gender: "male", power:randomNumbers(1, 5000), /*img:{source:"img/scorpion.png", width:2800, height:1750, alt:"scorpion"}*/},
                    subZero:{name:"Sub Zero", age: 116, height: "5 foot 9", weight: 140, gender: "male", power:randomNumbers(1, 5000)},
                    reptile:{name:"Reptile", age: 315, height: "6 foot 6", weight: 235, gender: "male", power:randomNumbers(1, 5000)},
                    rain:{name:"Rain", age: 200, height: "6 foot 3", weight: 150, gender: "male", power:randomNumbers(1, 5000)},
                    ermac:{name:"Ermac", age: 170, height: "6 foot 0", weight: 150, gender: "male", power:randomNumbers(1, 5000)},
                    noobSaibot:{name:"Noob Saibot", age: 176, height: "6 foot 4", weight: 180, gender: "male", power:randomNumbers(1, 5000)},
                    smoke:{name:"Smoke", age: 176, height: "6 foot 4", weight: 180, gender: "male", power:randomNumbers(1, 5000)},

                  //fight function
                  mortalKombat:function(src, width, height, alt){
                    var fighter=[this.scorpion, this.subZero, this.reptile, this.rain, this.ermac, this.noobSaibot, this.smoke];
                    //var champs = this.mortalKombat("img/scorpion.png", 600, 450, "scorpion") + this.mortalKombat("img/subZero.png", 600, 450, "sub zero");
                    if(fighter[0].power >= fighter[1].power || fighter[1].power >= fighter[2].power){
                      var winner = "The winners are: " + fighter[0].name + fighter[1].name;
                      var champions = [ ];
                      champions.push(fighter[0].name);
                      champions.push(fighter[1].name);
                      document.write("<b>" + champions + "</b>" + " " + " are your champions!" + "<br />" + "<hr/>");
                      document.write(champions + "<br />" + "<hr/>");

                      var img = document.createElement("img");
                      img.src = src;
                      img.width = width;
                      img.height = height;
                      img.alt = alt;
                      document.body.appendChild(img + "<br />" + "<hr/>");

                      document.write(this.mortalKombat("img/scorpion.png", 600, 450, "scorpion") + this.mortalKombat("img/subZero.png", 600, 450, "sub zero") + "<br />" + "<hr/>" + "<hr/>");

                    }else if(fighter[2].power >= fighter[3].power || fighter[3].power >= fighter[4].power){
                      var winner = "The winners are: " + fighter[2].name + fighter[3].name;
                      var champions = [ ];
                      champions.push(fighter[2].name);
                      champions.push(fighter[3].name);
                      document.write("<b>" + champions + "</b>" + " " + " are your champions!" + "<br />" + "<hr/>");
                      document.write(champions + "<br />" + "<hr/>");

                      var img = document.createElement("img");
                      img.src = src;
                      img.width = width;
                      img.height = height;
                      img.alt = alt;
                      document.body.appendChild(img + "<br />");

                    }else if(fighter[4].power >= fighter[5].power || fighter[5].power >= fighter[6].power){
                      var winner = "The winners are: " + fighter[4].name + fighter[5].name;
                      var champions = [ ];
                      champions.push(fighter[4].name);
                      champions.push(fighter[5].name);
                      document.write("<b>" + champions + "</b>" + " " + " are your champions!" + "<br />" + "<hr/>" + "<hr/>");
                      document.write(champions + "<br />" + "<hr/>" + "<hr/>");

                      var img = document.createElement("img");
                      img.src = src;
                      img.width = width;
                      img.height = height;
                      img.alt = alt;
                      document.body.appendChild(img);

                    }
                    //return champs;
                    return fighter;
                  }

};

document.write(charStats + "<br />" + "<hr/>" + "<hr/>" + "<hr/>");

document.write("Scorpion: " + charStats.scorpion.power + "<br />" + "<hr/>");
document.write("Sub Zero: " + charStats.subZero.power + "<br />" + "<hr/>");
document.write(charStats.scorpion + "<br />" + "<hr/>");









console.log("----------IMAGES----------");
/*
NOTES:
-Any images you place between the two BODY tags of your HTML pages can be seen by Javascript.
  This is because whenever you add a picture with the IMG tag it is placed in a collection, which is a sort of array.
  The first picture that the browser can see, the one closet to the opening BODY tag, is place at position 0 in the collection.
  The second picture will be placed at position1, the third at position 2, etc.
*/
function getImage(){
  //var src = "http://adriansane.com/img/content/angular%20page%20banner.jpg";
  showImage("http://adriansane.com/img/content/angular%20page%20banner.jpg", 200, 75, "Dont forget the bacon banner");//call the show image function with arguments set here for the parameters down in the function
  showImage("http://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong,_Sichuan,_China.JPG", 200, 75, "Der Panda Boo");//call the show image function with arguments set here for the parameters down in the function

};
document.write(getImage() + "<br />" + "<hr/>");

function showImage(src, width, height, alt){
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
};









console.log("----------OBJECT ORIENTED PROGRAMMING----------");
/*
NOTES: http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
- Objects can be thought of as the main actors in an application, or simply the main “things” or building blocks that do all the work.
As you know by now, objects are everywhere in JavaScript since every component in JavaScript is an Object, including Functions, Strings, and Numbers.
We normally use object literals or constructor functions to create objects.

-Encapsulation refers to enclosing all the functionalities of an object within that object so that the object’s internal workings (its methods and properties)
are hidden from the rest of the application. This allows us to abstract or localize specific set of functionalities on objects. putting all the inner workings of an
object INSIDE THAT object. To implement encapsulation in JavaScript, we have to define the core methods and properties on that object. To do this,
use the best pattern for encapsulation in JavaScript: the Combination Constructor/Prototype Pattern. When you simply want to create an object just to store some data,
and it is the only object of its kind, you can use an object literal and create your object. However, whenever you want to create objects with similar functionalities
(to use the same methods and properties), you encapsulate the main functionalities in a Function and you use that Function’s constructor to create the objects.
This is the essence of encapsulation.

-Inheritance refers to an object being able to inherit methods and properties from a parent object (a Class in other OOP languages, or a Function in JavaScript).

-Both of these concepts, encapsulation and inheritance, are important because they allow us to build applications with reusable code, scalable architecture,
and abstracted functionalities. Maintainable, scalable, efficient.

-An instance is an implementation of a Function. In simple terms, it is a copy (or “child”) of a Function or object.

-The two important principles with OOP in JavaScript are Object Creation patterns (Encapsulation) and Code Reuse patterns (Inheritance).
*/
//EXAMPLE:

// Tree is a constructor function because we will use new keyword to invoke it.​
// Tree is both an object and a function, because functions are objects in JavaScript
function tree(typeofTree){};

// bananaTree is an instance of tree.
// bananaTree is an object that was created from the Tree constructor function.
// bananaTree can have its own methods and properties and inherit methods and properties from the Tree object
var bananaTree = new tree("banana");


// When building applications, you create many objects, and there exist many ways for creating these objects: you can use the ubiquitous object literal pattern, for example:

// ------------------------------------------------------------------------------Object literal pattern
var myObj = {name:"richard", profession:"developer"};
document.write(myObj.name + " " + myObj.profession + "<br />" + "<hr/>" + "<hr/>");

// ------------------------------------------------------------------------------Prototype pattern
function employee(){};

employee.prototype.firstName = "AliBaba";
employee.prototype.lastName = "Patel";
employee.prototype.startDate = new Date();
employee.prototype.signedNDA = true;
employee.prototype.fullName = function(){
document.write(this.firstName + " " + this.lastName + "<br />" + "<hr/>" + "<hr/>");
};

var AliBaba = new employee();
document.write(AliBaba.fullName() + "<br />" + "<hr/>" + "<hr/>");
document.write(AliBaba.signedNDA + "<br />" + "<hr/>" + "<hr/>");
document.write(AliBaba.startDate + "<br />" + "<hr/>" + "<hr/>");


// ------------------------------------------------------------------------------Constructor pattern
// The constructor pattern type of creating an object is good for when you want to add methodsan properties on the objects and when you want to encapsulate functionality on the object
function employed(name, profession){ // this is the constructor function, you use the keyword "new" to invoke it below - a custom constructor function that creates an object
  this.name = name;
  this.profession = profession;
};

//object creation
var richard = new employed("richard", "developer"); // richard is the new object created from the employed constructor function
document.write(richard.name + "<br />" + "<hr/>");
document.write(richard.profession + "<br />" + "<hr/>");



// ------------------------------------------------------------------------------Constructor - Prototype pattern
/*
-Because we want ALL the user objects to have these same properties and methods, we cannot use the object literal way of creating objects.
We have to use a constructor Function to encapsulate these properties and methods.

-Since we know all users will have the same set of properties, it makes sense to create a Function (Class in OOP languages) that
encapsulates these properties and methods. Thus, we will use the Combination Constructor/Prototype Pattern for this.
*/
//The user constructor function (this is known as a class in other OOP able languages)
function user(theName, theEmail){
  this.name = theName;// initialize the instance properties, these will be defined on each user instance that is created, values will be different for each user, using the "this" keyword inside the function specifies that these properties will be unique to every instance of the user object
  this.email = theEmail;// initialize the instance properties, these will be defined on each user instance that is created, values will be different for each user, using the "this" keyword inside the function specifies that these properties will be unique to every instance of the user object
  this.quizScores = [];// initialize the instance properties, these will be defined on each user instance that is created, values will be different for each user, using the "this" keyword inside the function specifies that these properties will be unique to every instance of the user object
  this.currentScore = 0;// initialize the instance properties, these will be defined on each user instance that is created, values will be different for each user, using the "this" keyword inside the function specifies that these properties will be unique to every instance of the user object
  this.currentAddress = [];
};

//------------------------------------------------------------------------------the prototype overwrites and adds to the infor inititalized in the constructor function
// the code below overwrites the prototype property with an object literal. all of the methodas are defined in this object
// This way of overwriting the constructor is simply for convenience, so we don’t have to write User.prototype each time

user.prototype = {
  //The one disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, so we have to set it manually. Hence this line directly below:
  constructor:user,
  saveScore:function(theScoreToAdd){// method defined here.. these will be inherited by all user instances
    this.quizScores.push(theScoreToAdd);
  },
  showNameAndScores:function(){// method defined here.. these will be inherited by all user instances
    var scores = this.quizScores.length > 0 ? this.quizScores:"No Scores Yet" + "<br />" + "<hr/>";
    return this.name + "Scores: " + scores + "<br />" + "<hr/>";
  },
  changeEmail:function(newEmail){// method defined here.. these will be inherited by all user instances
    this.email = newEmail;
    return "New email saved: " + this.email + "<br />";
  },
  userAddress:function(current){
    this.currentAddress.push(current);
    var address = this.currentAddress.length > 0 ? this.currentAddress:"Please submit a valid address";
    return this.name + "Address: " + address + "<br />" + "<hr/>";
  }
};

//------------------------------------------------------------------------------instances of the user function / user objects
firstUser = new user("Adrian Sane", "avelazquez@droga5.com");
firstUser.changeEmail("avelazquez585@yahoo.com");
firstUser.saveScore(15);
firstUser.saveScore(25);
firstUser.userAddress("123 main street");
firstUser.showNameAndScores();

document.write(firstUser.showNameAndScores() + "<br />" + "<hr/>");
document.write(firstUser.changeEmail("avelazquez585@yahoo.com") + "<br />" + "<hr/>");
document.write(firstUser.userAddress() + "<br />");

//------------------------------------------------------------------------------instances of the user function / user objects
secondUser = new user("Larissa Laguna", "llaguna22@gmail.com");
secondUser.saveScore(20);
secondUser.saveScore(25);
secondUser.showNameAndScores();
secondUser.userAddress("1000 rural street");

document.write(secondUser.showNameAndScores() + "<br />" + "<hr/>");
document.write(secondUser.userAddress() + "<br />" + "<hr/>");

//------------------------------------------------------------------------------instances of the user function / user objects
thirdUser = new user("Mickey Donovan", "MDaman@gmail.com");
thirdUser.saveScore(33);
thirdUser.saveScore(22);
thirdUser.saveScore(46);
thirdUser.showNameAndScores();
thirdUser.userAddress("1977 Mapes ave.");

document.write(thirdUser.showNameAndScores() + "<br />" + "<hr/>");
document.write(thirdUser.userAddress() + "<br />" + "<hr/>");







// -----------------------------------------------------------------------------Constructor - Prototype pattern MY EXAMPLE
function carType(carCost, carOrigin){
  this.cost = carCost;
  this.country = carOrigin;
  this.make = "";
  this.model = "";
  this.drive = "";
  this.hp = "";
  this.year = "";
  this.colorCode = "";
  this.package = [];


  //this.image = getImage();
};

carType.prototype = {
  constructor:car,
  carMake:function(make){// method defined here.. these will be inherited by all user instances
    for(var item in make){
      this.make += make[item];
    };
  },
  carModel:function(model){// method defined here.. these will be inherited by all user instances
    for(var item in model){
      this.model += model[item];
    };
  },
  carDrive:function(drive){// method defined here.. these will be inherited by all user instances
    for(var item in drive){
      this.drive += drive[item];
    };
  },
  carHp:function(hp){// method defined here.. these will be inherited by all user instances
    for(var item in hp){
      this.hp += hp[item];
    };
  },
  carYear:function(year){// method defined here.. these will be inherited by all user instances
    for(var item in year){
      this.year += year[item];
    };
  },
  carColor:function(colorCode){// method defined here.. these will be inherited by all user instances
    for(var item in colorCode){
      this.colorCode += colorCode[item];
    };
  },
  carOptions:function(currentOptions){// method defined here.. these will be inherited by all user instances
    this.package.push(currentOptions);
  },
  countries:[
    "USA",
    "GERMANY",
    "ITALY",
    "JAPAN",
    "KOREA",
    "AUSTRALIA",
    "SWEDEN",
    "UNITED KINGDOM"
  ]
};

//------------------------------------------------------------------------------instances of the user function / user objects
car1 = new carType("$31,000.00", carType.prototype.countries[0]);
car1.carMake("Ford");
car1.carModel("Mustang");
car1.carDrive("RWD");
car1.carHp("450hp");
car1.carYear("2012");
car1.carColor("#66d-2012.37b");
car1.carOptions("turbo");
car1.carOptions("22 inch rims");
car1.carOptions("navigation");
car1.carOptions("power windows");
car1.carOptions("security system");
console.log(car1);

//------------------------------------------------------------------------------instances of the user function / user objects
car2 = new carType("$44,000.00", carType.prototype.countries[1]);
car2.carMake("BMW");
car2.carModel("740il");
car2.carDrive("RWD");
car2.carHp("380hp");
car2.carYear("2013");
car2.carColor("#32b-2013.54i");
car2.carOptions("turbo");
car2.carOptions("20 inch rims");
car2.carOptions("navigation");
car2.carOptions("power windows");
car2.carOptions("power locks");
car2.carOptions("power seats");
car2.carOptions("sunroof");
car2.carOptions("security system");
console.log(car2);



/*
showImage:function(src, width, height, alt){
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
},
getimage:function(){
  var src = [
    showImage("http://adriansane.com/img/content/angular%20page%20banner.jpg", 200, 75, "Dont forget the bacon banner")
  ];
  return src;
}
*/



console.log("----------DOM AND NODES----------");
/*
NOTES:
*/










console.log("----------DEBUGGING----------");
/*
NOTES:
*/










console.log("----------FORM VALIDATION----------");
/*
NOTES:
-http://www.w3schools.com/js/js_validation.asp
*/










console.log("----------JQUERY----------");
/*
NOTES:
*/










console.log("----------AJAX----------");
/*
NOTES:
*/










console.log("----------GLOSSARY----------");

//TERNARIES
console.log("Ternaries - A one line way to write an If/Else Conditional statement.");

//CASTING
console.log("Casting - treating and returning numbers as strings and strings as numbers.");

//INITIALIZATION
console.log("Initialization - An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword. These variables are not local to the loop, i.e. they are in the same scope the for loop is in. The result of this expression is discarded.");

//CONDITION
console.log("Condition - An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the for construct.");

//FINAL - EXPRESSION
console.log("Final-Expression - An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.");

//STATEMENT
console.log("Statement - A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements. To execute no statement within the loop, use an empty statement (;).");



console.log("----------QUESTIONS----------");
/*
QUESTIONS:
*/










console.log("----------Test Snippets----------");

document.getElementById("btn").addEventListener("click", function(){
  alert("hello world");
});


var language = "New York Yankees";
language.substring(4, 9);
language.substr(0, 5);
language.charAt(0);
language.charAt(6);
console.log(language.charAt(7));

var word = "team";
word.indexOf("i");
console.log(word.indexOf("i"));

var words = "team mates";
words.indexOf("t");
console.log(words.indexOf("t"));


var term1 = "art",
    term2 = "earth";

if(term2.indexOf(term1) != -1){
  console.log(term2 + " contains " + term1 + " in " + term2)
}else{
  console.log("There is no " + term1 + " in " + term2);
}


var count = 0;
count += 5;
count++;
count /= 2;
--count;
console.log(count);


var count = 10,
  name;

count -= 10;
name = "Mary";

if(count) {
  console.log("first block");
}
else if(name) {
  console.log("second block");
}
else {
  console.log("third block");
}




console.log("----------FIZZBUZZ----------");
var a = "fizz", b = "buzz";
  for (i=0; i<=100; i++){
    if(i%3==0){
      console.log(a);
    }else if(i%5==0){
      console.log(b);
    }else{
      console.log(i); //print out the number
    };
  };


//declare and define fizzbuzz variables
var aa = "fizz",
    bb = "buzz";
//number to fizz - 3
//number to fuzz - 5
for(i=0; i<=20; i++){ //initiate the counting variable to be 0, as long as that variable is less than or equal to 20, increment it by 1.
  if( i % 3 == 0){ //check to see if the iterated number in the loop is divisible by 3
    console.log(aa);
  }else if( i % 5 == 0){ //check to see if the iterated number in the loop is divisible by 3
    console.log(bb);
  }else{
    console.log(i);
  }
};

for(i = 0; i <= 20; i++){   //initiate the counting variable to be 0, as long as that variable is less than or equal to 20, increment it by 1.
  if(i % 3 == 0 && i % 5 == 0){   //check to see if the iterated number in the loop is divisible by 3 AND 5
    console.log("fizzBuzz");
  }else if(i % 3 == 0){   //check to see if the iterated number in the loop is divisible by 3
    console.log("fizz");
  }else if(i % 5 == 0){   //check to see if the iterated number in the loop is divisible by 5
    console.log("buzz");
  }else{
    console.log(i);
  }
}





console.log("----------TEST FUNCTIONS----------");

//function decalaration syntax (declaring a function) - loaded before any code executes
//these functions can be executed anywhere within the code
//hoisted to the top of the code when javascript loads
function doSomethingHere(){//defined as a global function - a method of the window object
  //function code here;
};

//function expression syntax (assigning it as a variable) - this explicitly demonstrates that a function is a value in javascript
//you can NOT call this function BEFORE you instantiate it, it can only be called AFTER it is read
var thisIsMyFunction = function(){
  //function code here;
};

//Every function is a method of an object
//when you execute a function, there are 2 special values assigned to that function:
// -this: refers to the object that this function / method is attached to.
// -arguments: this is an object, kind of behaves like an array



//recursive functions are functions that call themselves

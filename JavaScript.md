**Table of Content** <br> 
- [JavaScript learning sources](#javascript-learning-sources)
- [JavaScript basic](#javascript-basic)
  * [Import JavaScript](#import-javascript)
  * [Data types](#data-types)
  * [Variable and scope](#variable-and-scope)
  * [JavaScript condition](#javascript-condition)
- [JavaScript function](#javascript-function)
  * [Looping](#looping)
  * [Function expression/anonymous function](#function-expression-anonymous-function)
  * [Function declaration](#function-declaration)
  * [Arrow function](#arrow-function)
  * [Closure](#closure)
  * [Currying](#currying)
  * [Compose](#compose)
- [Array](#array)
  * [forEach](#foreach)
  * [Map](#map)
  * [Filter](#filter)
  * [Reduce](#reduce)
- [Object](#object)
- [Class](#class)
  * [Reference](#reference)
  * [Context/scope](#context-scope)
  * [Instantiation](#instantiation)
- [Pass by value / pass by reference](#pass-by-value---pass-by-reference)
- [Type coercion](#type-coercion)
- [Count time pass](#count-time-pass)
- [ES7](#es7)
- [ES8](#es8)
- [ES9](#es9)
- [ES10](#es10)
- [Async](#async)
  * [Promise](#promise)
- [Module](#module)
- [JavaScript HTML DOM](#javascript-html-dom)
  * [DOM Selectors](#dom-selectors)
  * [Changing Styles](#changing-styles)
  * [Event](#event)
    + [add new element](#add-new-element)
    + [get user input](#get-user-input)
    + [keyboard event](#keyboard-event)
    + [nested event](#nested-event)
    + [input event](#input-event)
  * [DOM manipulation drawback](#dom-manipulation-drawback)
- [jQuery](#jquery)
- [NPM](#npm)
- [AJAX](#ajax)
- [Version](#version)



## JavaScript learning sources
[DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)<br>
[ES features](https://github.com/daumann/ECMAScript-new-features-list)<br>
[javascript-the-core Book](http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/) <br>
[Modern JavaScript Tutorial](https://javascript.info/) <br>
[You-Dont-Know-JS Book](https://github.com/getify/You-Dont-Know-JS)

## JavaScript basic
[Babel](https://babeljs.io/)can convert ES6 to older version js so that the code can run on all browsers.

### Import JavaScript

inside `<body>  </body>` at the bottom
```html
<script type="text/javascript" src="script.js">
</script>
```

### Data types

* Number 
* String
```javascript

10 + "34"
// "1034"
10 - "3"
// 7, can't subtract string, so 3 changes to number

// ` ` can add up string without +
const name = "aa"
const age = 22
const aa = `hellp ${name} you looks like ${age-5}`
```
* Boolean
* Undefined
* Null  
```javascript
var aa = null;
var bb = [];
// you can assign things to empty object or array, but can't assign to null
```
* Symbol
create unique type that never going to be conflicted, use for object property that don't want to be repeated
```javascript
let sym1 = Symbol();
let sym2 = Symbol('aa');
let sym3 = Symbol('aa');
sym2 === sym3 //false 
```
* Object


### Variable and scope
```
var
<!-- var name can start with $ or _ -->
<!-- var aa = prompt("enter XXX"), aa is a string, change to number: Number(aa) -->
let 
const 
```

function create a new scope; <br>
better use `let` not `var` <br>
with `var` keyword, if statements do not create a new scope, inside function will create a new scope
```javascript
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5
```

`let` will create new scope in function and `if`
```javascript
let a = 2;
if (true) {
    let a = 5;
    alert(a); // 5
}
alert(a); // 2
```

`const` can change property of a object, but can't re-assign
```javascript
const aa = {name:"aa"}
aa.name ="bb" // ok
```


### JavaScript condition
```
if
else
else if
ternary operator  condition ? expr1 : expr2
switch() {
	case A:
		XX;
		break;
	case B:
		XX;
		break;
	default:
		XX;
}
```


## JavaScript function
### Looping
* for
* while
* do 
* forEach 
* for of
```javascript
// iterating: arrays, strings 'basket' get each letter
const basket = ['aa','bb','cc'] 
for (item of basket) {
	console.log(item)  //iterable
}
```
* for in
```javascript
// enumerating: object
const basketobj = {
	apple: 5,
	orange: 10,
}
for (item in basketobj) {
	console.log(item)  // enumerable
} 
// apple 
// orange

// object is not iterable, cannot use for of for object, but array can use enumerating: for in
// basket array is the same as {
// 	0: 'aa',
// 	1: 'bb',
// 	2: 'cc'
// } 
for (item in basket) {
	console.log(item)
}
// 0
// 1
// 2
```



### Function expression/anonymous function
function don't have name, it was assigned to variable name aa 
```javascript
var aa = function name() {}  
```
**Expression** <br>
```javascript
1+3;  
var a =2;
```

### Function declaration
```javascript
function name() {}   
```

### Arrow function
```javascript
// for one line function, can remove return keyword
const add = (a,b) => a + b;

```


**Parameters and arguments** <br>
```javascript
function multiple (a,b){
// a and b are parameters
}

multiple(4,6)   // 4 and 6 are arguments

```

### Closure
A function ran and executed, it is never going to execute again. but it's going remember that there are reference to those variable, so the child scope always has access to the parent scope. but parent don't have access to children.
```javascript
const first = () => {
	const greet = 'hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newfunc = first() 
// second() can access greet because closure of first() 
```

### Currying
change function takes in multiple parameters into take in one at each time
```javascript
const multiply = (a,b) => a+b;
const curreiedMultiply = (a) => (b) => a + b;
curreiedMultiply(3)
//curreiedMultiply takes in a and return a function takes in b: (3) => (b) => 3 + b;
curreiedMultiply(3)(4)
// return 3+4
```
reason of using currying:
```javascript
// everytime want to multiply by 5
const multiplyBy5 = curreiedMultiply(5)
```

### Compose
```javascript
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num +1;
compose(sum,sum)(5);
// sum(sum(5)) return 7
```

**two elements of a pure function?** <br>
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.



## Array
```javascript
var aa = ["a","b","c"]
aa.shift();  //return a, aa === ["b","c"]
aa.pop(); //return c, aa === ["b"]
aa.push("c"); //return 2, number in the list, aa === ["b", "c"]
aa.concat(["d","e"]); //return ["b", "c","d","e"], aa === ["b", "c"] didn't put in original list
aa.sort();  // aa === ["b", "c"]
array.splice(0, 1);  //at position 0, remove one element aa=== ["c"]
```

### forEach
```javascript
var many = ['a','b','c']
many.forEach(function(value, index) {  // can be just value
	console.log(value, index);
})

```

### Map
`foreach` iterate each element in the array, you can have many different operations on each element. but `map` have to **return** the element to a new array, the original array stays the same.

```javascript
// using foreach we need to create a new array double to store the result
const array = [1,2,3]

const double = []
const newArray = array.forEach(num => {
	double.push(num * 2)
}) 
// newArray undefined

// using map need to return, mapArray is the result
const mapArray = array.map(num => { // use return must has { }
	return num*2
})

//can reduce to one line
const mapArray = array.map(num => num*2) 
//can remove {}
```

**map need to do operation on and return every element in the array, filter can choose to return which one** 

### Filter
filter the array one by one
```javascript
// if the element in the array greater than 5, then it can enter to filterArray
const filterArray = array.filter(num => {
	return num > 5
}

//same 
const filterArray = array.filter(num => num > 5)
```

### Reduce 
even can do filter and map with reduce. <br>
everytime iterate the array, accumulator remember what it was previously

```javascript
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
},0) // default value of accumulator
// without 0, it will concat number instead of adding up 
//return 0+1+2+3

array.some(()=> return XXcondition)  //loop through array and find sth match, will stop
```



## Object
```javascript
var user = {
	name: "aa",
	age: 22,
	shout: function() {
		console.log("aaah")
	} // function inside a object is called method
}

user.name // to get aa
user.food = "seafood"  // add new info to object
```

**destructuring object** <br>
```javascript
const {name1, password1} = obj;
```

**value assign** <br>
if object property and value are the same,
`const obj = {a,b,c}` instead of `const obj = {a:a; b:b; c:c;}`



## Class
**Capitalize** a class name

### Reference 
```javascript
var number1 =1 
var number2 =1
number1 === number2 //true

// object and array are reference
[2] === [2]  //false
{} === {}  //false

// but value inside object is not the same
var object1 = {value: 10}
var object2 = {value: 10}
object1 === object2 //false

var object3 = object1 //reference the same memory, change value in object1 result in change in object3
object3 === object1 //true 
```


### Context/scope
**this** refer to where the object is inside of
```javascript
function a() {console.log(this)} //this is window

const object = {
	a : function() {
		console.log(this)  // this is a
	}
}
```


### Instantiation
build a class and use `new` to make copy of object 
```javascript
class Player {
	// a class must have a constructor
	constructor(name, type) {
		console.log(this); // Wizard{}. when new a wizard, need to call Player constructor
		this.name = name;
		this.type= type;
	}

	introduce(){
		console.log(`Hi I am ${this.name}`)
	}
}

// any time extend a class, need to use `super` to extend the parent class
class Wizard extends Player {
	constructor(name, type) {
		super(name,type)
		console.log(this); //can only call this after super
	}

	play() {console.log(`I am a ${this.type}`)}
}

const wizard1 = new Wizard('Shelly','Healer')

```


## Pass by value / pass by reference

Pass by value: (primitive type) copy the value and create that value in the memory <br>
Pass by reference: (object/array) copy the value by referencing the same location in the memory

```javascript
// array is object
var c = [1,2,3]
var d = c
d.push(88)
c // [1,2,3,88]
```

**avoid pass by reference** <br>
create the exact same array by copying:
```javascript
var c = [1,2,3]
var d = [].concat(c)
d.push(88)
c //[1,2,3]
```

object copying:
```javascript
var obj = {a:'a', b:'b'};
var clone = Object.assign({},obj);
// second way:
var clone2 = {...obj}

obj.b = 5;
clone // {a:'a', b:'b'};
clone2 // {a:'a', b:'b'};
```

but if there is a nested object, result in shallow clone: only clone the first layer of the object
```javascript
var obj = {a:'a', b: {deep:'try'}}
var clone = Object.assign({},obj);
obj.b.deep = 'haha'
clone //{a:'a', b:'haha'}; 

// we should do:
var superClone = JSON.parse(JSON.stringify(obj))
obj.b.deep = 'haha'
superClone //{a:'a', b:'try'}; 
```

## Type coercion
the language convert certain type into another type
```javascript
1 == '1' //true, '1' change to 1

// should always use ====
1 === '1' //false, compare exactly without coercion

if (1)  // if(true)
if (0)  // if(false)

NaN === NaN //false
// should be true, use:
Object.is(NaN,NaN)  //true
```
## Count time pass
```javascript
console.time('It takes:')
console.timeEnd('It takes:')
```

## ES7
2016 <br>
**includes()** 
```javascript
const pets = ['cat','dog']
pets.includes('cat') //true
```

**Square**
```javascript
x**2 //square
x**3 //cube
```

## ES8
2017 <br>
**String padding**
```javascript
'aa'.padStart(10) //'    aa'
.padEnd()
```

**can have ending comma**
```javascript
const fun = (a,b,) {}
func(1,2,)
```

**Loop through object**
```javascript
const obj = {
	name0: 'aa',
	name1: 'bb',
}
// not an array so can't do map 
// get key and value
Object.keys(obj).forEach((key,index) => {
	console.log(key,obj[key])
})

// get value
Object.values(obj).forEach(value => {
	console.log(value);  
})

//change object to array
Object.entries(obj).forEach(value => {
	console.log(value);  
})
// ['name0','aa']
// ['name1','bb']
```

**object spread operator**
```javascript
const animal = { tiger: 2, lion:3, monkey:4}
const {tiger, ...rest} = animals // rest include object with lion and monkey

const array = [1,2,3]
function sum (a,b,c){return a+b+c}
sum(...array) //6
```

## ES9
**.finally()** run a code no matter what happend after promise, regardless `.then()` or `.catch()` <br>

**for await of**  
iterate await, similar to `for of`


## ES10
2019 latest<br>

**flat()**<br>
make nested array flat
```javascript
const array = [1,2,[3,[4]]]
array.flat() // [1,2,3,[4]]  flat(1) default
array.flat(2) //[1,2,3,4]

//if you want to flatten many level, just pick a big number
aa.flat(50)
aa.flat(Infinity)

//flat can clean up empty entries
const entries = ['aa','bb',,,,,'cc']
entries.flat()  // ['aa','bb','cc']
```

**flatmap()**
```javascript
const arrayflat = array.flatMap(element => element*2)


const greeting = [["you", "are"], ["learning", "fast!"]];
greeting.flatMap(x => x.join(' ')) //['you are', 'learning fast!' ]
```

**trimStart() trimEnd()** <br>

**fromEntries()** <br>
change array into object
```javascript
users = [['aa',8],['bb',10]]
const obj = Object.fromEntries(users)

// reverse: change object to array
Object.entries(obj)
```

## Async 
**execution order** <br>
increase variables in the memory heap but forgot to clean it result in memory leak.<br>

things put to call stack will be removed in order after the function finished, call stack become empty
```javascript
const one = () => {
	const two = () => {
		console.log('hi')
	}
	two()
}

// what on the top of call stack get run first, and get remove first
console.log()
two()
one()
//call stack
```
javascript is single threaded language, means one call stack,can only do one thing at a time, but it can be non-block by async<br>

**synchronous programming** means line two get executed only after line one finished. if a task takes a long time, then tasks after get freeze. <br>

**Asynchronous** 
```javascript
//not from javascript but the web API
console.log('0')
setTimeout(() => {console.log('1')},1000) //1s
console.log('2')
// 0 2 1  because callback() after call stack is empty

setTimeout()
//web api

callback()
//callback queue

//event loop
// keep checking whether call stack is empty, once empty, do callback, like eventlistener check whether there is a click and do callback

callback()  console.log()
//call stack
```

### Promise 
a promise is an object that may produce a single value some time in the future (async), either a `resolved` value or a `reject`: reason that it's not resolved <br>
`.then()` produce synchronous result <br>
`.catch(()-> XXX)` can catch failure, good for fetch api 
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000)
});
// or
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// run the promise
promise.then(resp => console.log(resp))

// fetch multiple sources at one time
Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
)).then(array => {
  	array[0]
  	throw Error;
  }).catch(err => console.log('fix it!', err));

//  for await of 
const array = urls.map(url => fetch(url))
for await (let request of array) {
	const data = await request.json();
	console.log(data)
}
```

**async function**
```javascript
// only syntax different with .then()
async function playerstart(){
	// can have variable, .then() can't have
	const first = await moveplayer(100,'left') //pause 
	await moveplayer(400,'right') //pause
}

// anonymous function
const getdata = async function(){
try{
	// asyn can define custom variable names 
	 const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
}
catch(err){
	console.log(err)
}
} 
```


## Module 
ES6+Webpack2 <br>
Webpack2: bundle javascript files into single file or multiple files, so we only need to `<script src="bundle.js"></script>` to include functions and have clean namespace and less dependency.

```javascript
export const add = (a,b) => a+b;
export default function add (a,b) return a+b;

import {add} from './add.js' 
```



## JavaScript HTML DOM

browser create DOM (document object model) that can read HTML CSS, javascript can interact with the DOM and change HTML,CSS <br>
`window` is the object discribe the browser, like`window.alert("xx")` , can obmit `window`


### DOM Selectors
```html
getElementsByTagName   <!-- h1 -->
getElementsByClassName   
getElementById      <!-- element: can only have one id -->

querySelector     <!-- select the first item define; can select class: document.quertSelector(".color1") -->
querySelectorAll   <!-- li: select all li;  li, h1: select both-->
getAttribute   <!--  <li random="22"> aa </li> document.querySelector("li").getAttribute("random") === 22 -->
setAttribute     <!-- .setAttribute("random","23")
 -->
```

### Changing Styles
all element in DOM has a style property

* style.{property} //ok
`document.querySelector("li").style.background = "yellow"`

* className //best
```html
var h1 = document.querySelector("h1")
h1.className = "yourDefinedClass"
```
* classList //best
```html
<li class="bold red"> aa </li>
document.querySelector("li").classList.add("yourDefinedClass")
```

* classList.add
* classList.remove
* classList.toggle  //back and forth

* innerHTML //DANGEROUS
```html
document.querySelector("h1").innerHTML = "AA!!"
<!-- put AA!! into h1 tag -->
```
* .parentElement
* .children

**It is important to CACHE selectors in variables**
```html
var h1 = document.querySelector("h1")
```

### Event
`addEventListener` need to work on a element, not an array. When `document.getElementsByTagName("button")` return an array, need to `document.getElementsByTagName("button")[0]` access an element
```javascript
var button = document.getElementsByTagName("button")[0]
button.addEventListener("mouseenter", function() {
	console.log("hover!!")
})
```

#### add new element
* createElement
* appendChild
* createTextNode  (for li) 
* textContent     (for h)

```javascript
var li = document.createElement("li");
li.appendChild(document.createTextNode("aaaa"));
document.querySelector("ui").appendChild(li);
```

#### get user input
```javascript
var input = document.getElementById("userinput");
input.value   //get the value

```

#### keyboard event
[keycode reference](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes) <br>
```javascript
input.addEventListener("keypress", function(event){ //need to receive a function parameter
	if(event.keyCode === 13) { //press enter
	}
})

// or you can use callback function
function addListAfterKeyPress(event){
	if(event.keyCode === 13) { 
	}
}
input.addEventListener("keypress",addListAfterKeyPress)
```

#### nested event
```javascript
function hide(e) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget which would refer to the parent <ul> in this context
  e.target.style.visibility = 'hidden';

  //event.target.tagName shows CAPITAL letter
}
ul.addEventListener("click",hide)
```

#### input event
everytime the input change it can detect
```javascript
//don't need to setGradient() for input type, it will call the function everytime the input changes
color1.addEventListener("input", setGradient);
```

**Callback function** <br>
```javascript
input.addEventListener("keypress",addListAfterKeyPress)
```
When that line of javascript runs, we don't want the addListAfterClick function to run because we are just adding the event listener now to wait for click or keypress. Without () means passing a reference to the `addEventListener` without running it.

**onclick oninput** <br>
you can add javascript to the html file with function(), but we have seperation of concern
```javascript
// color1.addEventListener("input", setGradient);
<input oninput="setGradient()" type="color"> 
//can only have one function in oninput
```

### DOM manipulation drawback
use `innerHTML` to change DOM (e.g. add a new element in `<a>`)will cause rerender all things again, and might break reference. We want to minimize the amount of DOM manipulation, such that when you interact with the website, only the part you interact needs to be rendered.

## jQuery
jQuery: javavscript library that is imperative, which means we need to tell the website exactly what to do if this happend.
React: declarative

## NPM
- `npm init` create package.json file in your repo
- `npm install lodash` only install in a project 
- `npm install -g browserify` will install globally, which can use in terminal 
- `npm run built` create a optimized js file that can put on the internet 
- `--save-dev` means the dependencies only use in development by you 
- run command in `scripts:{}` will look for file in `.bin`


```javascript
// browserify syntax
var _ = require('lodash')
const array = [1,2,3]
console.log('answer',_.without(array,3)) //without is a function in lodash

// use broswerify to combine js files in terminal
browserify script.js > bundle.js 
```
NVM(Node Version Manager): can install multiple versions of node and change between them <br>


**package.json**<br>
 dependencies: a new person can install all dependencies when start the  project by `npm install`<br>
 script: run commands in a script by `npm run build`
```javascript
"script":{
	"build":"browserify script.js > bundle.js && live-server"
}
```
<br>

## AJAX
only re-render the part when it has update
```javascript
fetch('/my/url').then(response => {
	console.log(response)
})
```
single page application: load a empty page and build content on the fly



## Version 
**senmantic versioning**: aa.bb.cc <br>
cc:patch release, a bug fix <br>
bb:minor release, add a new feature  <br>
aa:major release, quite different from previous version <br>
Check the version of packages you need to update to: https://semver.npmjs.com/

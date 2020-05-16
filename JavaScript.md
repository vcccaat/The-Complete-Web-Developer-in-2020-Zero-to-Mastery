- [JavaScript basic](#javascript-basic)
  * [Import JavaScript](#import-javascript)
  * [JavaScript types](#javascript-types)
  * [JavaScript comparison](#javascript-comparison)
  * [JavaScript variable](#javascript-variable)
  * [JavaScript condition](#javascript-condition)
  * [JavaScript logical operator](#javascript-logical-operator)
  * [JavaScript function](#javascript-function)
  * [JavaScript data structure](#javascript-data-structure)
  * [JavaScript looping](#javascript-looping)
  * [JavaScript Keywords](#javascript-keywords)
- [JavaScript HTML DOM](#javascript-html-dom)
  * [DOM Selectors](#dom-selectors)
  * [Changing Styles](#changing-styles)
  * [Event](#event)
    + [add new element](#add-new-element)
    + [keyboard event](#keyboard-event)
    + [nested event](#nested-event)
    + [input event](#input-event)
  * [DOM manipulation drawback](#dom-manipulation-drawback)
- [jQuery](#jquery)



## JavaScript basic

### Import JavaScript

inside `<body>  </body>` at the bottom
```html
<script type="text/javascript" src="script.js">
</script>
```

### JavaScript types

* Number 
* String
```javascript
10 + "34"
// "1034"
10 - "3"
// 7, can't subtract string, so 3 changes to number
````
* Boolean
* Undefined
* Null  
```javascript
var aa = null;
var bb = [];
// you can assign things to empty object or array, but can't assign to null
````
* Symbol (new in ECMAScript 6)
* Object

### JavaScript comparison

```
!==
===
>=
<=
>
<
```

### JavaScript variable
```
var
<!-- var name can start with $ or _ -->
<!-- var aa = prompt("enter XXX"), aa is a string, change to number: Number(aa) -->
let (new in ECMAScript 6)  
const (new in ECMAScript 6)
```
**better to have ; after every expression**


### JavaScript condition
```
if
else
else if
<!-- ternary operator -->
<!-- switch -->
```

### JavaScript logical operator

```
&&
||
!
```
### JavaScript function

```javascript
expression:  1+3;  var a =2; 

// the function don't have name, anonamous function or function expression, it was assigned to variable name a 
var a = function name() {}  

// function declaration
function name() {}   

return

//() => (new in ECMAScript 6) 
```

```javascript
function multiple (a,b){
// a and b are parameters
}

multiple(4,6)   // 4 and 6 are arguments

````

### JavaScript data structure

Array
```javascript
var aa = ["a","b","c"]
aa.shift();  //return a, aa === ["b","c"]
aa.pop(); //return c, aa === ["b"]
aa.push("c"); //return 2, number in the list, aa === ["b", "c"]
aa.concat(["d","e"]); //return ["b", "c","d","e"], aa === ["b", "c"] didn't put in original list
aa.sort();  // aa === ["b", "c"]
array.splice(0, 1);  //at position 0, remove one element aa=== ["c"]
```
Object
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

### JavaScript looping

* for
* while
* do 
* forEach (new in ECMAScript 5) 
```javascript
var many = ['a','b','c']
many.forEach(function(value, index) {  // can be just value
	console.log(value, index);
})

````


### JavaScript Keywords

break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield



## JavaScript HTML DOM

browser create DOM (document object model) that can read HTML CSS, javascript can interact with the DOM and change HTML,CSS <br>
`window` is the object discribe the browser, like`window.alert("xx")` , can obmit `window`


### DOM Selectors
```
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
```
var h1 = document.querySelector("h1")
h1.className = "yourDefinedClass"
```
* classList //best
```
<li class="bold red"> aa </li>
document.querySelector("li").classList.add("yourDefinedClass")
```

* classList.add
* classList.remove
* classList.toggle  //back and forth

* innerHTML //DANGEROUS
```
document.querySelector("h1").innerHTML = "AA!!"
<!-- put AA!! into h1 tag -->
```
* .parentElement
* .children

**It is important to CACHE selectors in variables**
```
var h1 = document.querySelector("h1")
```

### Event
[**All events reference**](https://developer.mozilla.org/en-US/docs/Web/Events)<br>
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
* createTextNode  <!-- for li -->
* textContent     <!-- for h -->

```javascript
var li = document.createElement("li");
li.appendChild(document.createTextNode("aaaa"));
document.querySelector("ui").appendChild(li);
```

**get user input**<br>
```javascript
var input = document.getElementById("userinput");
input.value   //get the value

````

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
````

#### nested event
```javascript
function hide(e) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget which would refer to the parent <ul> in this context
  e.target.style.visibility = 'hidden';

  //event.target.tagName shows CAPITAL letter
}
ul.addEventListener("click",hide)
````

#### input event
everytime the input change it can detect
```javascript
//don't need to setGradient() for input type, it will call the function everytime the input changes
color1.addEventListener("input", setGradient);
````

**Callback function** <br>
```javascript
input.addEventListener("keypress",addListAfterKeyPress)
````
When that line of javascript runs, we don't want the addListAfterClick function to run because we are just adding the event listener now to wait for click or keypress. Without () means passing a reference to the `addEventListener` without running it.

**onclick oninput** <br>
you can add javascript to the html file with function(), but we have seperation of concern
```javascript
// color1.addEventListener("input", setGradient);
<input oninput="setGradient()" type="color"> 
//can only have one function in oninput
````

### DOM manipulation drawback
use `innerHTML` to change DOM (e.g. add a new element in `<a>`)will cause rerender all things again, and might break reference. We want to minimize the amount of DOM manipulation, such that when you interact with the website, only the part you interact needs to be rendered.

## jQuery
jQuery: javavscript library that is imperative, which means we need to tell the website exactly what to do if this happend.
React: declarative


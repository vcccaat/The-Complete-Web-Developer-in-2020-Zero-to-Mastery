# Class 6-7 and 9
[quiz css](https://www.w3schools.com/quiztest/quiztest.asp) <br>
[practice css](https://flukeout.github.io/css)<br>
[lookup css tricks](https://css-tricks.com/almanac/)


## CSS intro
cascading style sheet: take the last input as the selected property <br>


* `<head>` in HTML contains information need in the page, put `<link>` here can link to a css file

* or you can use inline css: `style="XX"`

* inside `<head> </head>` create `<style> </style>`

### Critical Render Path
A path the website take to display a page. <br>
To make the page load faster, we can [minify css](https://www.cleancss.com/css-minify/), reduce the file into one line so it become smaller


## Element\selector and property
```CSS
body {
	background-image: url(backgroundimage.jpg);
	background-size: cover;
}


h2, h3 {
	color: #AA4129;  /*change color of text*/
	text-align: center;
	border: 5px solid rgb(255,176,170,0.5); /*the forth one is opacity*/
	cursor: pointer;
	border-bottom: 2px solid pink; /*add underline of text*/
	width: 400px  /*length of the underline*/
}

li {
	list-style: none;
	display: inline-block; /*change to block fit to the content size, default is full block*/
}
```
	

### Class
if we want one selector has different property, we can add `Class="xxtext active"`
```css
.xxtext {
	border: 5px dashed;
}

.active {
	text-color: blue;
}
```

### id
similar to class, but can only use same id once <br>
inside html:
```css
<div id="div1">
	<p class="xxtext"> aa </p>
	<p class="xxtext"> aa </p>
</div>
```

```css
#div1 {
	background: blue;
}
```

### * (all the things)
```css
* {
	text-align: right;
}
```

## Rules
* h2 h3 means all h3 inside h2
* h2 > h3 means to select all h3 has **parent** of h2
`<h2> AA <h3> aa </h3> </h2>` <br>
but can't select h3 here: `<h2> AA <div> <h3> aa </h3> </div> </h2>` 
* h2 + h3 mean to select h3 that exactly after h2
`<h2>AA</h2> <h3> aa </h3>`
* `A.className{}` combine class and selector
* `p: hover` when mouse hover then change 
* `p: last-child` `p:first-child`
* `!important` overwrite all cascading rule 

### Order
* specificity
* !importance
* source order (if import two css file, choose last one)

## Font
```css
p {
	text-decoration: underline;
	text-transform: uppercase;
	line-height: 20px;
	font-style: italic;
	font-weight: bold;
	font-size: 150%;
	font-family: "Times New Roman", Georgia;
	/*if have no times new roman, use georgia*/
	text-transform: capitalize 
	/*each word in a text start with a capital letter*/
}
```
ensure all browser open your website can display the font, download the file or use google font: `<link href="XXXfont" rel="stylesheet">` but load the link make website slower 


## Image
html:
`<img src="http:XXX" width="50px" height="50px">`
css: 
```css
img {
	float: left 
	/*text can float to left embed the image*/
}
```
when you use float, almost every cases, you need to put this in the property after the float is used: `clear: both;`


## Box model
content width and height -- padding -- border -- margin

```html
<!-- create space inside of the box -->
padding: top right bottom left;

<!-- create space outside of the box border-->
margin: 20px; <!-- for top right bottom and left -->
margin: 5px 20px;  <!-- top and bottom 5px, left and right 20px -->
margin-left: XX
```

sometimes you use `margin: 0px;` still have margin because each browser has its default margin, to get away: 
```css
body {
	margin: 0px;
}
```


## Size px em rem

```html
<p> <span> aa </span> </p>

p {
	font-size: 20px;
}

span {
	font-size: 5em; <!-- equal to five times the parent element which is 100px -->
	font-size: 2rem; <!-- equal to 2 time the root element: HTML -->
}
```



# Layout

## Flexbox 
[Complete guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)<br>
[Practice flexbox](http://flexboxfroggy.com/) <br>
[Cheat sheet flexbox](https://darekkay.com/dev/flexbox-cheatsheet.html)

```css
.container {
	display: flex; /*inline-flex similar to inline-block */
	flex-wrap: wrap;  /*become a pic wall */
	justify-content: center; /*flex-start | flex-end |space-between | space-around | space-evenly */
	align-items: flex-end; /*flex-start | stretch | baseline*/
 	align-content: flex-start | flex-end | center | space-between | space-around  /*for more than one row of items */

}

```

## CSS grid
[*grid cheatsheet*](http://cssgridgarden.com/)<br>

flexbox: good for one dimension: col <br>
css grids: both row and columns like image gallary


```html
<!-- first has a container of all the div items -->
<div class="container">
	XX
	XX
</div>
```

responsive css:
```CSS
.container {
	display: grid;  /*similar to flexbox*/ 
	grid-gap: 20px;  /*gap between grid */
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /*complete responsive with auto-fill */
	A /*for all rows  */
}
```

```html
* grid-template-columns: 300px 300px; 
<!-- has two columns, each columns has 300px, can do 25% -->
* grid-template-columns: 1fr 1 fr 2fr 
<!-- three columns, the third column take up 2/4 -->
* grid-template-columns: repeat(3,1fr) 
<!--three columns each 1fr  -->
* grid-template-columns: auto 1fr 2fr
<!-- auto make the grid as the size of the content, total three columns-->

* justify-items: start; <!-- align item to the left of the grid (use developer tool to see) or end: align to right default is stretch-->
* we don't like to use justify-items and align-items to move the item around, without them the content will fill the whole grid
```

change on individual grid:
```css
.green {
	grid-column-start: 1;
	grid-column-end: 3;  /*-1 means expand to all the end*/
	/*that one item start at 1st grid and end at 3*/
	/*same here:*/
	grid-column: 1/3;
	/*or span across 3 grids, better if you make window very small, it will still display the whole pic*/
	grid-column: span 3;
	/*similar to justify-items in the container*/
	align-self: start | end;
}
```

### Put one item to the left\right of the row
`margin-right: auto;` can put the item to the left by taking up all the right side margin by auto amount

## Position
* Absolute:
If a child element has an absolute value then the parent element will behave as if the child isn’t there at all
* Relative: 
If set parent's `position: relative;` its child element, now the properties such as left, right, bottom and top will refer to the parent element (inside parent)
* Fixed:
Is similar to absolute, but unaffected by scrolling, the element continue to be in the same place

[*What is the difference between inline-flex and inline-block in CSS?*](https://www.geeksforgeeks.org/what-is-the-difference-between-inline-flex-and-inline-block-in-css/)
flex compare to block can put the element on the same row. inline means the element will not fill the whole row.




### image gallary

```css
img {
	transition: all 1s; 
	/*all property transition in 1s*/
}

img: hover {
	transform: scale(1.1)
	animation: 
}
```



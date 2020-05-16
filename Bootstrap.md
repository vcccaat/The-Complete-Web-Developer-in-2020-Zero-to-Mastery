**Table of Content** <br> 
- [Bootstrap4](#bootstrap4)
- [Layout](#layout)
  * [Container](#container)
- [Recommended Resources](#recommended-resources)
  * [Save email address](#save-email-address)
  * [Animate css](#animate-css)
  * [Bootstrap theme](#bootstrap-theme)



## Bootstrap4
Bootstrap can use someone's css and build on top of it. <br>

CDN: content delivery network, don't need to include the file in the project, but link to the place host the file. <br>

Add css bootstrap link in the `<head>` <br>

Javascript link put in the bottom of the `<body>`, so it can run after the page is load. <br>

meta tag can be add to `<head>` first, can add new information to the html page, like `viewport` to develop for mobile device; 	`utf-8` encoding for the html text  

To add your own customized css, add the link below the bootstrap link that can overwrite.


## Layout
if the col added up to 12, they are in the same row
```html
<div class="container">
	<div class="row">
		<div class="col col-sm-6">
		1
		</div>
		<div class="col col-sm-3">
		2
		</div>
		<div class="col col-sm-3">  <!-- take up the whole row, if col-sm-4, this element will all put to the next row -->
		3
		</div>
	</div>
</div>	
```

if the size of the window is medium, these 3 elements will take up the whole two rows:
```html
<div class="container">
	<div class="row">
		<div class="col col-sm-6 col-md-12">
		1
		</div>
		<div class="col col-sm-3 col-md-6">
		2
		</div>
		<div class="col col-sm-4 col-md-6">  
		3
		</div>
	</div>
</div>	
```

### Container
```html
<div class="container d-flex align-items-center h-100"> <!-- put the elements in a container, activate flex -->
<!-- make the container have 100% height of the page, so that it can align it to the center -->
	<div class="row"> <!-- put all elements in one row  -->
		<header class="text-center col-12"> 
			<h1> </h2>
		</header>	
		<div class="buffer col-12"></div> <!-- you can add cutomized buffer -->
		<section class="text-center col-12"> <!-- to make the section and header expand to 12 columns, full amount of the container -->
			<hr>
		</section>
	</div>
</div>

```

## Recommended Resources

### Save email address
*MailChimp* is free to allow user subscribe to website <br>


click a button can navigate to a link:
```html
<a href="XX">
	<button> </button>
</a>
```

### Animate css
download [animated css](https://daneden.github.io/animate.css/)

### Bootstrap theme
[Creative Tim](https://www.creative-tim.com/) <br>
[HTML5/CSS3 template 1](http://www.mashup-template.com/templates.html)<br>
[HTML5/CSS3 template 2](https://cruip.com/)<br>
[HTML5/CSS3 template 3](https://mdbootstrap.com/freebies/)<br>
[HTML5/CSS3 template 4](https://startbootstrap.com/templates/)

**Table of Content** <br> 
- [Command line](#command-line)
- [Sublime](#sublime)
- [Internet](#internet)
  * [History](#history)
  * [What happens when you click a website?](#what-happens-when-you-click-a-website-)
  * [HTTP HTTPS](#http-https)
  * [API](#api)
  * [JSON](#json)
  * [AJAX](#ajax)
  * [Full stack](#full-stack)
- [Interview resources](#interview-resources)

## Command line
`open .` open the current directory you are in <br>
`mkdir` create a directory with name behind it <br>
`touch index.html` create a file  <br>
`open -a "sublime text"` -a means application <br>
`open -a "sublime text" index.html` open a file in that application <br>
`mv index.html about.html` change name of the file <br>
`rm about.html` remove a file<br>
`rm -r foldername` remove a folder when you are in the directory above it<br>


## Sublime 
* type html and tab, load all the required content for you 
* `shift + cmd + p ` open control panel 
* `command + ctrl + g` to have multiple cursor for all text that are same


## Internet
### History 
Before www, there was internet, computer connect each other, but hard to communicate each other 
1989 www invented by Tim Berners-Lee: a protocol (common language computer can speak)
Internet is a phone, www is an application
1991 first website 

### What happens when you click a website?
Click google ⮕ <br /> 
ISP (internet service provider)  ⮕ <br /> 
DNS (domain name server) like a phone book store the address of google.com IP address  ⮕ <br /> 
send back to browser


Browser send IP address ⮕ <br /> 
google servers (like a computer, store file)  ⮕ <br /> 
server send HTML CSS Javascript file to the browser 


**How to transmit data** <br>
Router ⮕ Modem of the house ⮕ ISP ⮕internet backbone (physical cable) ⮕ servers


**How to make visit website fast?** <br>
* Location of server (nearer faster)
* How many trips 
* Size of file 


### HTTP HTTPS
Broswer send out **request** using HTTP (language to communicate with outside world) to server, server can send **response** with HTML,CSS,javascript <br>
Request:
* GET  
* POST (add)
* PUT (update)
* DELETE
browser can use query strings (the website link) or the body to send request <br>

Response:(HTTP messege)[https://www.w3schools.com/tags/ref_httpmessages.asp]

**HTTPS**: communication between client(browser) and server is encryted


### API
[search API available](https://public-apis.xyz/)

### JSON 
a form to submit data to server <br>
JSON: object like syntax. XML: HTML like syntax.
```javascript
var obj = JSON.parse({"name":"aa","age":9})
var myJSON = JSON.stringify(obj)
```

### AJAX
A way browser make request to server. without AJAX everytime need to update the page, need to refresh the whole page, now it can only update a small proportion dynamically  <br>
old way: XML HTTP request; <br>
new: jQuery <br> 
newer: fetch('url').then() <br>
```javascript
// fetch can have its own json convert
.then(response=> response.json())
```

### Full stack
jQuery allows javascript to work in no matter what browser or mobile platform 
Apache server: software that server up file -- Node server
PHP language, less popular -- Node.js express.js
postgreSQL, mongoDB


## Interview resources
1. https://haseebq.com/how-to-break-into-tech-job-hunting-and-interviews/
2. http://seldo.com/weblog/2014/08/26/you_suck_at_technical_interviews
3. [Offer Negotiation](https://www.freecodecamp.org/news/how-not-to-bomb-your-offer-negotiation-c46bb9bc7dea/)
4. https://medium.freecodecamp.org/5-key-learnings-from-the-post-bootcamp-job-search-9a07468d2331
5. https://medium.com/on-writing-code/how-to-win-the-coding-interview-71ae7102d685



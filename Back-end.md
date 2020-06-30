**Table of Content** <br> 
- [Node.js](#nodejs)
  * [Node.js module](#nodejs-module)
  * [Express.js](#expressjs)
  * [middleware](#middleware)
- [File system](#file-system)
- [RESTful API: GET, PUT, POST, DELETE](#restful-api--get--put--post--delete)
- [Connect frontend to backend](#connect-frontend-to-backend)
- [Database](#database)
- [SQL](#sql)
  * [conditional selection](#conditional-selection)
  * [SQL function](#sql-function)
- [Connect server to database](#connect-server-to-database)
- [Environmental variable](#environmental-variable)
- [Deployment](#deployment)

<br>

**LAMP Stack** <br>
 a set of open-source software that can be used to create websites, consist of the Linux operating system, the Apache HTTP Server, the MySQL relational database management system, and the PHP programming language

**Application server** <br>
## Node.js
allows computer to run js in a server, which is outside of the browser(it has a javascript engine V8)  <br>

- enter node mode in terminal: `node`; 
- check function in node: `global.setTimeout`;
- exit node: `process.exit()`;
- run node: `node script.js`;
- get directory name: `__dirname`
- Old way(CommonJS): import variable `require()` export variable:`module.exports = {XX:xx}` use imported variable`importName.variableName`, now ES6 don't need
<br>
`JSON.stringify()` converts JavaScript objects into strings. When sending data to a web server the data has to be a string.

### Node.js module 
* `require('fs')`  operation in a file
* `require('http')`  build a server
* `npm install nodemon` allow changing in js file reflect in terminal instantly
```js
 "scripts": {
    "start": "nodemon server.js"
}
```

### Express.js
a library in node to help build a server
`npm install express`

**transmit form data (account sign up) in a POST body to the server** 
```javascript
const express = require('express')
const app = express()
app.get('/',(req,res)=>{ // root direc:/
	res.send('hello')  // can also send html, json
	res.json('hellp')
})
app.post('/profile',(req,res)=>{ //(add a profile)
	res.XXX()  //need to return res!! 
})

// app.put (for update)    app.delete

app.listen(3000)  //端口
```
### middleware
trigger before `app.get()` 
* express 
```javascript
app.use((req,res,next) => {
	console.log()
	next(); //allow express to run after this
})

app.use(express.urlencoded({extended: false})) //get the input form
app.use(express.json());  //when you send json the server can get it
```

* `npm install cors`  a middleware that allow cross-origin request `app.user(cors())`

* **bcrypt** store password as hash
```js
cosnt hash= bcrypt.hashSync(password)

// compare hash and password, return bool
const isvalid = bcrypt.compareSync(req.body.password, data[0].hash)
```


[postman](https://www.postman.com/) API Development and test your server before connect to front-end



## File system
```javascript
const fs = require('fs');
// async with call back function: read code line by line and after finish readfile content, will callback to pass the data to the function
fs.readFile('./hello.txt',(err,data)=>{
	if (err) { console.log('err!!')}
	console.log('1',data.toString()) // need to have encoding by toString, default is utf8 cover many languages
})

// sync, only read the next line if this line finished, so for large file, the program need to wait long time until it finish to continue
const file = fs.readFileSync('./hello.txt')
console.log('2',file.toString()) 

// output 2 1
```
**add text to the file** <br>
`fs.appendFile('hello.txt','hi!', err =>{})`

**create text file and write** <br>
`fs.writeFile()`

**delete file** <br>
`fs.unlink('bye.txt',err => {})`


## RESTful API: GET, PUT, POST, DELETE
A API uses HTTP requests to GET, PUT, POST and DELETE data. <br>
stateless: each request is independent 
**property of request:** <br>
* req.query <br>
use in **get** request: `localhost:3000/?name=andrei&age=31` ? is for query, console.log can output the query
* req.body <br>
use in **post** request: with middleware(like bodyparser: urlencoded or json) can receive the request send in the body, and console.log output the request `req.body.email`
* req.headers <br>
console.log output all headers and the input 
* req.params <br>
when you access to the parameters in the url `app.get('/:id',(req,res)=>{const {id} = req.params})` localhost:8000/12345<br>
if the data is not on the url, `req.body`

```javascript
app.get('/',(req,res)=> {
	res.send(XXX)  
})
```
if fontend react app can fetch the get response, it can console log

**property of response:** <br>
* `res.status(404).send("not found")` can set the response of a request
* send static file in response `app.user(express.static(__dirname + '/public'))`


## Connect frontend to backend
react app use fetch to communicate
```javascript
onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
      })
    }) //everytime use fetch, add .catch
    // get the response from server: res.json()
      .then(response => response.json())
      .then(user => {})
  }
```

 
## Database
database management system (DBMS): a collection of tools delete and insert, lookup data, two types: <br>
**Relational Database**: postgreSQL, oracle, sql <br>
schema: the relation between table<br>
structure: a file stores email, a file stores address <br>
communicate: SQL<br>

**Non relational database(NoSQL)**: mongleDB
<br>
more flexible, don't need to define schema<br>
structure: each user has a file with username, address<br>
communicate: mongoDB query language

## SQL
use brew to install packages`brew update` `brew doctor` first <br>
`brew install postgreSQL` <br>
start the service of this database software: `brew services start postgreSQL`<br>
create a database`createdb nameofDatabase` <br>
access the database through terminal (or access through psequal): `qsql 'nameofDatabase'` <br>
check table: `\d` <br>
exit database: `\q` <br>


```sql
-- create table
CREATE TABLE nameofTable (
	id serial NOT NULL PRIMARY KEY -- auto increase for us when insert, don't need to specify
	columnName dataType NOT NULL, 
	columnName dataType UNIQUE);

-- insert table
insert into nameofTable(columnName,columnName) values (value1, value2);

-- get info
select columnName from nameofTable
 -- or * represent all

-- add column
alter table nameofTable add columnName

-- add value in column
update nameofTable set columnName = 10 where columnName = 'aa'
```

### conditional selection
```sql
-- select name begin with A
select * from users where name like 'A%';

-- ending with y
select * from users where name like '%y';

-- order the column
select * from users order by score desc;
```

### SQL function
```sql
SELECT AVG(score) FROM users;
SELECT SUM(score) FROM users;
SELECT COUNT(name) FROM users;

-- JOIN
select * from users JOIN login 
ON users.name = login.name;

-- delete row
DELETE FROM users WHERE name='Sally';

-- delete table
DROP TABLE users;
```

## Connect server to database
[knex documentary](http://knexjs.org/)<br>
download postgreSQL database package: `npm install pg` <br>
connect server to database: `npm install knex` <br>

Syntax in js:
```sql
const postgres = knex ({ })

-- get
app.get('/profile/:id',(req,res) => {
	const (id) = req.params
	postgres.select('*').from('users').where({id: id})  -- can be just id ES6
	.then(data=> {
		--user return an array, if get the content, [0]
		if (user.length){ --if not empty
			res.json(user[0])
		}else{
		res.status(400).json('not found')
		}
	})
	})


-- insert
app.post('/register',(req,res)=>{
	-- req.body get content past from frontend by fetch{ body: JSON.stringify({})}
	const {email} = req.body
	postgres('users').insert({
	email:email,
	join: new Date()
	}).then(response => {
	res.json(response)
	-- res return the content that post
	})
	.catch(err => res.status(400).json(err))
	-- shoudn't return err to user, security issue, better json('unable to join')
	})


-- update / increment
app.put
postgres('users').where({'id','=',id}).increment('entries',1)
.returning('entries')
.then(entries => {res.json(entries[0])})


-- transaction, insert two table with foreign key
-- correct way for register
postgres.transaction(trx => {
	trx.insert({
		hash:hash,
		email: email
		})
	.into('login')
	.returning('email')
	.then(loginemail => {
		return trx('users')
		.returning('*')
		.insert({
			email:loginemail[0],
			joined: new Date()
			})
		.then(user => {res.json(user[0])})
		})
	})
	.then(trx.commit)
	.catch(trx.rollback)


-- signin by checking password match in login table and return user info in users table
postgres.select('email','hash').from('login')
.where('email','=',req.body.email) --return one row
.then(data => {
	-- check password and hash match
	if (isvalid) {
	return postgres.select('*').from('users')
	.where('email','=',req.body.email)
	.then(user => {
		res.json(user[0])
		})
	}else{res.status(400)}
	})
```
**should put api key in the backend**

## Environmental variable
each environment (the location a project run on) has its own variables, benefit to things that should keey screte or need to be dynamic, like API keys, PORT, database url <br>

set port of server: (for bash) `PORT=3000 node server.js`<br>
get the PORT variable: `process.env.PORT`


## Deployment
hosting app and have more control: anazon web service, heroku, digitalocean <br>

put backend database and frontend to heroku:
```js
brew install heroku/brew/heroku

//create an app in heroku server, with url 
heroku create

// deploy the app  
git push heroku master

// open app on browser
heroku open

// print log
heroku logs --tail

// check whether install database
heroku addons

// connect and enter to sql
heroku pg:psql

//get database info, url
heroku pg:info
heroku config

//login to new app
heroku login
```

before put frontend to server, `npm install serve --s` and in package.json `"scripts": { "start": "serve -s build"}`


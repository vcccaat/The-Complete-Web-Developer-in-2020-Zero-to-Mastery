**Table of Content** <br> 
- [Install](#install)
- [JSX](#jsx)
- [Component](#component)
- [Props](#props)
- [State](#state)
- [Children](#children)
- [Error boundary](#error-boundary)
- [Life cycle](#life-cycle)
- [Redux](#redux)
  * [Action](#action)
  * [Reducer](#reducer)
  * [Store](#store)
  * [React 3 principles](#react-3-principles)
  * [redux connect](#redux-connect)
  * [redux middleware](#redux-middleware)
- [React Tools](#react-tools)


## React intro
One way data flow: change the parent, only their children need to be re-rendered <br>
React helps to re-use component easily, change the view 


## Install
`npm install -g create-react-app` to easy create app using react <br>
or <br>
`npx create-react-app` <br>

**tachyons** <br>
`npm install tachyons`(now can include this in html:`<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css">`) can have easy classname: `<div className='f1 tc'>` means font 1, text center <br>

**Run other's repo** <br>
`npm install` then `npm start` <br>
`npm update` can update dependencies automatically or manually change package.json file and `npm install` <br>
`npm audit` show any vulnerabilities of your repo

**Deploy on github page**
[step](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom)

## JSX
javascript with html-like syntax
* need to close the tag `<input XXX />` but html don't need 
* use `<div className=''>` instead of `class` 
* 
```
return (html....
		{
			javascript
		}
		html...);
```


## Component
component is like a function, and it need to be exported, need to be capitalized <br>
in App.js:
```javascript
// App is just a function
// const App = (props) => {
// 	return ()
// }
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfiled: ''  //can change
		}
	}

	//every time create method use arrow function
	onSearchChange = (event) => {
		this.state.robots //this refer to App, not event
	}

 	render() {
    	return (  
// need to <div> </div> wrapped, only return one thing
     		<SearchName searchChange={this.onSearchChange}> //need to use this. for function in a class
     	);
  }
}
export default App;
//default means only export one component
```
`{this.props.name}` always warpped variable with `{}` <br>

component folder includes pure components <br>
container folder includes all files with class and its css that has states and contain other component

## Props
properties that a parent pass to children and never be modified
**Make props in index.js**
```jsx
ReactDOM.render(
	<div> 
		<Card id=array[0].id name=array[0].name email=array[0].email />
	</div>
	)

// can create one more layer of props
ReactDOM.render(
	<div> <CardList /> </div>)
// in cardlist, define a new variable and assign the map function to loop the array, in return put: <div> {variable} </div>, !!need to give a unique key in loop!!
```

inside Card.js:
```jxs
this.props.name
// or 
const {name, email, id} = props;
// or do destructuring in function parameter
const Card = ({name, email, id}) => {
	<p>{name}</p> }
```
 
How to use string in variable: 
```jsx
<img src={`https://robohash.org/${this.props.id}`} />
```

## State
state is the discription of the app, able to change
```jxs
class{ 
	constructor() {
		super()
		this.state = {}
	}
}
```
**Change state**
every time state changes, it need to render()
```jxs
this.setState({searchfield: event.target.value}) 
//pass an object
```
setState() in React is asynchronous,React will batch multiple calls to setState() into a single call, and then re-render the component a single time, rather than re-rendering for every state change. So geting the state right after you setState might get the old state.<br>
Solution:  use `componentDidUpdate` or a `setState callback (setState(updater, callback)`


## Children
can wrap component which is your children
```jxs
<Scroll> 
	<CardList/>
</Scroll>
```
```jxs
const Scroll = (props) => {
	<div style={{XXX}}>
	{props.children}  //react feature, children is the components it wrapped
	</div>
}
```
## Error boundary
wrap a component, if any error take place in children, it will catch it and show sth instead to the user in the production
```javascript
// in the class ErrorBoundry, make a pre-built function 
componentDidCatch(error,info) {
	this.setState({hasError: true})
}
```

## Life cycle 
**mounting**: start the web page by checking constructor(), componentWillMount(), render(), componentDidMount(), these function are pre-built by react, and it call without parameter<br>

**updating**: touch the web, it rerender component when receive new input <br>

**unmounting**: when a component is removed from a page, like when we change to different page <br>


## Redux
redux can have a clean system to monitor/log the action, data flow. can remove state, all state and action can use props<br>

`npm install redux`  `npm install react-redux` <br>
Action -> Reducer -> Store -> Make change<br>
A action has a type and a payload;<br>
### Action
action.js:
```js
// action take user input: text, return a object
export const setSearchField = (text) => ({
	// can be a variable, create constant.js field track all const string variable
	type: 'CHANGE_SEARCH_FIELD' //the type
	payload: text //the data
})
```
### Reducer
A reducer connect action to the store <br>
reducers.js:
```js
const initialState = {
	searchField: ''
}
// searchrobot reducer, pure function
export const searchrobots = (state=initialState, action={})=>{ //if no action, return empty object
	switch(action.type){ //if receive any action related to searchrobot, do sth
		case 'CHANGE_SEARCH_FIELD':
			return Object.assign({},state,{searchField:action.payload}) // change state, or destructuring return {...state,searchField:action.payload}
		default: return state;
	}
}
```
### Store
A store is a big object describe the state<br>
```javascript
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// create store
const store = createStore(searchRobots)  //reducer

//provider wrap the store, can pass down store to all components in app
ReactDOM.render(
<Provider store={store}>  
<App/>
</Provider>
, document.getelementbyid('root'))
```

### React 3 principles
* single source of truth (initial state)
* state is read only (modify need to create new state with our action)
* change using pure functions (function takes input don't modify anything)

flux pattern: enforce a uni-directional data flow  <br>
Action -> Dispatcher -> Store -> View


### redux connect
connect() connects containers, **higher order function**: a function return another function
```js
import {connect} from 'react-redux'
//searchField become props
const mapStateToProps = state => {
	return {
		searchField: state.searchField
		// put all state in the store here
	} // searchfield come from reducer will be use as props by app
}
// dispatch send actions, onSearchChange become props
const mapDispatchToProps = (dispatch) => {
	return {
	onSearchChange: (event) => dispatch(setSearchField(event.target.value))}
	// put 
}

// subscribe any change in the redux store
export default connect(mapStateToProps,mapDispatchToProps)(App)
```

### redux middleware
1. help to console.log prev state, action and next state:
`npm install redux-logger`
```js
import {applyMiddleware} from 'redux'
cosnt logger= createlogger()
```

2. handle async action in redux
`npm install redux-thunk`
index.js:
```js
import thunkMiddleware from 'redux-thunk'

// put all middleware in the store
const store = createStore(searchRobots, applyMiddleware(thunkMiddleware,logger))
// now i can use state.sesrachrobots.searchfield
```
action.js:
```js
export const requestrobosts = (dispatch) => {
dispatch({type: REQUEST_ROBOTS_PENDING})
fetch('xx')
.then(response=>response.json())
.then(data=> dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
.catch(error=> dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}
```
reducer.js:
```js
const initialState = {
	ispending: false,
	robots:[],
	error:[]
}
export const requestrobots = (state=initialState, action={})=>{
	switch(action.type){
	case REQUEST_ROBOTS_PENDING:
		return Oject.assign({},state,{ispending: true})
	case REQUEST_ROBOTS_SUCCESS:
		return Oject.assign({},state,{robots: action.payload, ispending: false})
	case REQUEST_ROBOTS_FAILED:
	return Oject.assign({},state,{error: action.payload, ispending: false})
	default: return state;
	}
}
```
need to combine reducer into one root reducer: `rootreducer = combinareducer({searchrobots, requestrobots})
add async action to replace componentdidmount`

## React Tools
1. react router: change pages
2. ramda: keep functional programming of js
3. lodash: give extra tool in js
4. glamorous: css
5. styled components: css
6. CSS Moudles
7. gatsby: single page react website
8. next.js: server side rendering
9. material UI component 
10. reselect: for redux 
11. redux sage: async redux
12. immutable: force state become immutable



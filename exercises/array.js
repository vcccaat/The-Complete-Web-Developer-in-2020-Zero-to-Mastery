// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newarray = []
array.forEach(object =>
  newarray.push(object.username + "!")
)

//Create an array using map that has all the usernames with a "? to each of the usernames
const newarray2 = array.map(object => 
  // let { username } = object;  //destructuring with same variable name
   object.username + "?"
)

//Filter the array to only include users who are on team: red
const filterarray = array.filter(object =>
  object.team === "red")

//Find out the total score of all users using reduce
const reducearray = array.reduce((accum,object) =>
  accum + object.score,0)
// need to have 0 to make it as adding number 



// (1), what is the value of i? = index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map( user => {
  user.items.map(item => item+"!")
  return user
})

// only return list with new items
const newlist = array.map(user =>
 user.items.map(item => item + "!")


 const users = { user1: 18273, user2: 92833, user3: 90315 }
//  change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])
// need to return the original user[0]!!!





let arrayOfUsers= (localStorage.getItem("usersdata") === null) ? [] :  JSON.parse(localStorage.getItem("usersdata"));
let currentUser= (localStorage.getItem("currentUser") === null)? {logged: false} : JSON.parse(localStorage.getItem('currentUser'));


export {arrayOfUsers, currentUser};
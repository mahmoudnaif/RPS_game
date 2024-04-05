let arrayOfUsers= (localStorage.getItem("usersdata") === null) ? [] :  JSON.parse(localStorage.getItem("usersdata"));

export {arrayOfUsers};
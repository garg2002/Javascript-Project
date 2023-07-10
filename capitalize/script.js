let firstName = "satyam";

let FirstLetter = firstName[0];

let CapitalFirstLetter = FirstLetter.toUpperCase();

let IsLowerCase = FirstLetter === CapitalFirstLetter.toLowerCase();

console.log(IsLowerCase ? CapitalFirstLetter + firstName.slice(1) : firstName)


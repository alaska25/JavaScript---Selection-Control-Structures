console.log("Hello World!");

let operator1 = parseInt(prompt("Provide a number"));
let operator2 =  parseInt(prompt("Provide another number"));
let sum = operator1 + operator2;
let result;
if(sum < 10){
	console.warn("The sum of two numbers is " +sum);
}
else if(sum >= 10 && sum <=20){
	result = operator2 - operator1;
	alert("The difference of two number is " +result);
}
else if(sum >= 21 && sum <= 29){
	result = operator2 * operator1;
	alert("The product of two number is " +result);
}
else if(sum >= 30){
	result = operator2 / operator1;
	alert("The dividend of two numbers is " +result);
}

let name =prompt("What is your name");
let age = prompt("What is your age?");

if(name == "" || age ==""){
	alert("Are you a time traveler");

}
else {
	alert("Hello "+ name+ ". " + "Your age is " + age);
}

function isLegalAge(age){

	if(parseInt(age) >= 18){
		alert("You are of legal age");

	}
	else{
		alert("You are not allowed here");
	}

}

isLegalAge(age);

switch(parseInt(age)){
	case 18:
		alert("You are now allowed to party");
		break;
	case 21:
		alert("You are now part of adult society");
		break;
	case 65:
		alert("We thank you for your contribution to society");
		break;
	default:
		alert("Are you sure you're not an alien");
		break;
}

try{
	alert(isLegalag(18));
}
catch (error){
	console.warn(error.message);
}


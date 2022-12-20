/*== LOGIN SHOW and HIDDEN 
const signUp = document.getELementById('sign-up'),
	signIn = document.getELementById('sign-in'),
	loginIn = document.getELementById('login-in'),
	loginUp = document.getELementById('login-up')

signUp.addEventListener('click', ()=>{
	//remove classes first if they exist
	loginIn.classList.remove('block')
	loginUp.classList.remove('none')

	//add classes
	loginIn.classList.add('none')
	loginUp.classList.add('block')

})

signIn.addEventListener('click', ()=>{
	//remove classes first if they exist
	loginIn.classList.remove('none')
	loginUp.classList.remove('block')

	//add classes
	loginIn.classList.add('block')
	loginUp.classList.add('none')


	==*/
//request to fetch data from the json file
//create new xmlttp-request object which will hold all the properties of the object
 let http = new XMLHttpRequest();

 //prepare request with open() method
 http.open("get", "pets.json", true);

 //send the request
 http.send();

 //catch the response
 //check the onload eventListener

 http.onload = function(){
	//check for ready state and status properties
	if(this)
 }
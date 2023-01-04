 //EventListener for Login Form
 $('.signup').hide();

 $('#signin, #signup').on(
	 'click', function(){
		 $('.signin, .signup').toggle()
	 }
 )

 //EventListener for Appointment form
 function message(){
	var Name = document.getElementById('name');
	var email= document.getElementById('email');
	var msg = document.getElementById('msg');
	const success =document.getElementById('success');
	const danger =document.getElementById('danger');

	if(Name.value === '' || email.value === '' || msg.value ===''){
		danger.style.display = 'block';
	}
		else{
			setTimeout(()=>{
				Name.value='';
				email.value='';
				msg.value='';
			},2000);
			success.style.display = 'block';
		}

		setTimeout(() =>{
			danger.style.display = 'none';
			success.style.display = 'none';
		}, 4000);
	}

 
 //Display pets
for(let i of pets.data){
	//create card
	let card = document.createElement("div");
	//card should have category and stay hidden initially
	card.classList.add("card", i.category, "hide");

	//image div
	let imgContainer = document.createElement("div");
	imgContainer.classList.add("image-container");
 
	//image tag
	let image = document.createElement("img");
	image.setAttribute("src", i.image);
	imgContainer.appendChild(image);
	card.appendChild(imgContainer);

	//container
	let container = document.createElement("div");
	container.classList.add("container");

	//pet name
	let name = document.createElement("h4");
	name.classList.add("pet-name");
	name.innerText = i.petName;
	container.appendChild(name);

	//gender
	let gender = document.createElement("h9");
	gender.innerText = i.gender;
	container.appendChild(gender);

	//description
	let description = document.createElement("h9");
	gender.innerText = i.description;
	container.appendChild(description);


	//adopt button
	let adoptButton = document.createElement("button6");
    adoptButton.classList.add("adopt-button");
    adoptButton.innerText = "Adopt";
    container.appendChild(adoptButton);

	

	card.appendChild(container);
	document.getElementById("pets").appendChild(card);
}


//parameter passed from button 

function filterProduct(value){
	//button class code
	let buttons = document.querySelectorAll(".button-value");
	buttons.forEach((button) => {
		//check if value equals innerText
		if(value.toUpperCase()== button.innerText.toUpperCase()){
			button.classList.add("active");
		}else{
			button.classList.remove("active");
		}	
	});

	//select all cards
	let elements = document.querySelectorAll(".card");
	//loop through all cards
	elements.forEach((element) => {
		//display all cards on "all" button click
		if(value == "all") {
			element.classList.remove("hide");
		   }
		   else{
			   //check if element contains category class
			   if(element.classList.contains(value)){
				   //display element based on category
				   element.classList.remove("hide");
			   }
			   else{
				   //hide their elements
				   element.classList.add("hide");
			   }
			}
	});
}
//search button click
//will implement this later
document.getElementById("search").addEventListener("click", () =>{
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".pet-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);

    //loop through all elements
    elements.forEach((element,index)=>{
        //check if text includes the search value
        if(element.innertext.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove("hide");
        }
        else{
            //hide others
            cards[index].classList.add("hide");
        }
    }) 
});


//initially display all products
window.onload =() => {
    filterProduct("all")
};




 /*--//URL
//alternative two to fetch data from db.json file
//fetch data
 let http = new XMLHttpRequest();

 //prepare request with open() method
 http.open("get", "pets.json", true);

 //send the request
 http.send();

 //catch the response
 //check the onload eventListener

 http.onload = function(){
	//check for ready state and status properties
	if(this.readyState == 4 && this.status == 200){

		let pets = JSON.parse(this.responseText);
		let output ="";

		for(let item of pets){
			output+= `
			<div class = "pet">
				<image src="${item.image}" alt="${item.image}">
				<h4 class="name">${item.name}</h4>
				<h8 class="gender">${item.gender}</h8>
				<h5 class="description">${item.description}</h5>
				<p class ="wishlist">
				<i class="uil uil-heart"></i></p>
				<button4>Adopt</button4>
			</div>
			`;
		}
		document.querySelector(".pets").innerHTML = output;
	}
 }--*/
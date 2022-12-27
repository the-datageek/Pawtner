//URL

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
 }

 //EventListener for Login Form
 $('.signup').hide();

 $('#signin, #signup').on(
	 'click', function(){
		 $('.signin, .signup').toggle()
	 }
 )
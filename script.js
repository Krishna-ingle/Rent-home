let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
	let card =document.querySelector("#card");
	card.style.visibility = "visible";
}

// console.log(btn1);

let btn_close = document.querySelector("#btnCloseCard");
console.log(btn_close);
btn_close.onclick =() =>{
	let card =document.querySelector("#card");
	card.style.visibility = "hidden";


	// let btn_log =document.querySelector("#btn_login");
	// btn_log.style.visibility = "hidden";
}


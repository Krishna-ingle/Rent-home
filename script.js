let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
	let card =document.querySelector("#card");
	card.style.visibility = "visible";
}
console.log(btn1);

$('#service_2').addClass("active");
$("#service_2").click(function() {
	$('html, body') .animate({
		scrollTop:$("#tool_service").offset().top-112
	}, 5000);
 return false;
});


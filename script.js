function get(argument) {
	return document.querySelector(argument);
}
function getAll(argument) {
	return document.querySelectorAll(argument);
}
function print(argument) {
	console.log(argument);
}

const cajaTexto=get(".main-text");
document.addEventListener("click",e=>{
	if(e.target.matches(".teclado button")){
		cajaTexto.value+= `${e.target.textContent}`;
	}
	});
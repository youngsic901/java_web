/**
 * 
 */
window.onload = () => {
	document.querySelector("#dan").onchange = () => {
		//alert("a");
		let dan = frm.dan.options[frm.dan.selectedIndex].value;
		
		addDanFunc(dan);
	}
	
	document.querySelector("#clear").onclick = clear;
}

function addDanFunc(data){
	let row = null;
	let text = null;
	
	console.log('test');
	row = document.createElement("div");
	text = document.createTextNode(data + "단");
	row.appendChild(text);
	document.getElementById("printTbody").appendChild(row);
	
	for(let i = 1; i <= 9; i++){
	row = document.createElement("div");
	text = document.createTextNode(data + " * " + i + " = " + (data * i));
	row.appendChild(text);
	
	console.log(row);
	document.getElementById("printTbody").appendChild(row);
	}
	
	row = document.createElement("br");
	document.getElementById("printTbody").appendChild(row);
}

function clear(){
	let target = document.querySelector("#printTbody");
	
	while(target.hasChildNodes()){
		target.removeChild(target.childNodes[0]);
	}
}
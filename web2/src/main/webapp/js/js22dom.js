/**
 * 
 */

window.onload = () => {
	document.querySelector("#abcFunc").onclick = abc;
	document.querySelector("#defFunc").onclick = def;
	document.querySelector("#clear").onclick = clsFunc;
}

function abc(){
	// alert("a");
	let aa = document.getElementById("my");
	
	// DOM 명령어 사용하기
	console.log(aa.nodeName + " " +
				aa.firstChild.nodeValue + " " + 
				aa.childNodes[0].nodeValue);
	console.log(aa.getAttribute("id"));
	console.log(aa.getAttribute("comments"));
}

function def(){
	// alert("b");
	let arr = document.getElementsByTagName("input"); // 문소 내에서 input 요소를 모두 선택해 배열로 저장
	console.log("arr 크기 : ", arr.length);
	console.log(arr[0].getAttribute("value"));
	console.log(arr[1].getAttribute("value"));
}

function func(para){
	// alert(para);
	let ele = document.createElement("i"); // i tag 생성
	let text = document.createTextNode(para); // 안녕
	ele.appendChild(text); // <i>안녕</i>
	
	// id가 show인 div 태그의 자식으로 i 태그를 추가
	document.getElementById("show").appendChild(ele);
}

function clsFunc(){
	let target = document.getElementById("show");
	// target.removeChild(target.lastChild);
	
	while(target.hasChildNodes()){
		target.removeChild(target.childNodes[0]);
	}
}
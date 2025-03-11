/**
 * 
 */
/*window.onload = function(){
	alert("a");
}*/

window.onload = () => {
	// alert("aa");
	document.getElementById("colorW").onclick = function(){
		document.body.style.backgroundColor = "white";
	}
	
	document.getElementById("colorG").onclick = () => {
			document.body.style.backgroundColor = "#00ff00";
	}
	
	/*document.getElementById("colorR").onclick = () => {
		document.bgColor = "rgb(255, 0, 0)"; //rgb(100%, 0%, 0%)
	}*/
	
	document.querySelector("#colorR").onclick = () => {
		document.body.style.backgroundColor = "rgb(255,0,0)";
	}
	
	// 이벤트 종류 연습
	document.querySelector(".hello").onclick = function(){
		document.querySelector("#show").innerText = "안녕하세요";
	}
	
	document.querySelector("#calc").ondblclick = function(){
		let ss = `연산결과는 ${10 + 5}`;
		document.querySelector("#show").innerText = ss;
	}
	
	// hover : mouseover + mouseout
	document.querySelector("#irum").onmouseover = function(){
			document.querySelector("#show").innerHTML = "<h2>난 신기해라고 해</h2>";
	}
	
	document.querySelector("#irum").onmouseout = function(){
				document.querySelector("#show").innerHTML = "";
	}
	
	// a tag : click 이벤트가 기본 등록됨. 기본 이벤트 해제
	document.querySelector("#daum").onclick = function(event){
		event.preventDefault(); // 해당 태그에 고유 이벤트 해제
		console.log(event);
		// 다른 기능 구현해보기
		console.log(`x좌표:${event.x} y좌표:${event.y}`);
	}
	
	// select tag
	const sdata = document.querySelector("#sel");
	/*
	sdata.onclick = function(){
		document.querySelector("#show").innerHTML = sdata.value;
		console.log(sdata.value);
	}
	*/
	
	sdata.onchange = function(){
			document.querySelector("#show").innerHTML = sdata.value;
			console.log(sdata.value);
		}
}
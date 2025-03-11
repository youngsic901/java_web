/**
 * 
 */
function func1(){
	document.getElementById("show").innerText = "전통적인 이벤트 처리";
}

let a = 10;
let b = {
	funcNew1:function(){
		document.getElementById("show").innerText = "b 객체의 메소드 처리";
	},
	funcNew2:function(){
		document.getElementById("show").innerHTML = "<h2>b 객체의 멤버 처리</h2>";
	}
}

// ----------------------------------------------------------------------------- 
function aa(){
	alert("kk");
}

// window.onload = aa();
window.onload = function(){ // 익명함수 사용 (일회용 - 초기화 담당)
	// alert("kbs");
	const exBtn1 = document.getElementById("btn1"); // 버튼을 읽어 변수에 기억
	exBtn1.onclick = function(){ // 이벤트 핸들로 이벤트를 장착
		document.getElementById("show").innerText = "클릭1 버튼 선택";
	}
	
	const exBtn2 = document.getElementsByName("byBtn"); // 배열로 저장
	console.log(exBtn2.length);
	exBtn2[0].onclick = function(){
		document.getElementById("show").innerText = "클릭2 버튼 누름";
	}
	exBtn2[1].onclick = function(){
			document.getElementById("show").innerText = "클릭3 버튼 처리";
	}
	
	/*document.getElementById("btn4").onclick= function(){
		document.getElementById("show").innerText = "클릭4";
	}*/
	
	document.getElementById("btn4").onclick = btn4HandlerFunc;
	
	// 이벤트 연결 및 해제
	// addEventListner("이벤트종류", 수행함수명)
	document.getElementById("btn5").addEventListener("click",abcFunc);
	
	function btn4HandlerFunc(){
		document.getElementById("show").innerText = "클릭4";
	}
	
	function abcFunc(){
		document.getElementById("show").innerText = "클릭5";
		
		// 이벤트 해제 : removeEventListener("이벤트종류", 대상함수명)
		document.getElementById("btn5").removeEventListener("click", abcFunc);
	}
	
}
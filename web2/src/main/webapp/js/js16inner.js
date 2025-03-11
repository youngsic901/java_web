/**
 * 
 */
function func1(){
	// alert("a");
	// let str1 = document.getElementById("test1").innerHTML; // js로 대상 선택(전통적)
	let str1 = document.querySelector("#test1").innerHTML; // js로 대상 선택(css의 선택자를 이용)
	// alert(str1);
	document.querySelector("#show1").innerHTML = "<i>" + str1 + "</i>";
	
	let tag1 = "이름 : <input type='text' name='irum'>";
	let tag2 = "나이 : <input type='text' name='nai'>";
	document.querySelector("#test1").innerHTML = tag1 + "<br>" + tag2;
}

function func2(){
	// alert("b");
	let str2 = document.querySelector("#test2").innerText;
	// alert(str2);
	document.querySelector("#show2").innerText = "<i>" + str2 + "</i>";
}
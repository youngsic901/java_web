/**
 * 
 */
window.onload = () => {
	// 계산결과 출력
	console.log("test");
	document.querySelector("#resultButton").onclick = () => {
		let num1 = document.querySelector("#num1");
		let num2 = document.querySelector("#num2");
		let cal = document.getElementsByName("cal");
		let result = document.querySelector("#result");
		
		if(cal[0].checked){
			result.value = Number(num1.value) + Number(num2.value);
		} else if(cal[1].checked){
			result.value = Number(num1.value) - Number(num2.value);
		} else if(cal[2].checked){
			result.value = Number(num1.value) * Number(num2.value);
		} else if(cal[3].checked){
			result.value = Number(num1.value) / Number(num2.value);
		}
	}
	
	document.querySelector("#eraise").onclick = () => {
		document.querySelector("#num1").value = "";
		document.querySelector("#num2").value = "";
		document.getElementsByName("cal")[0].checked = false;
		document.getElementsByName("cal")[1].checked = false;
		document.getElementsByName("cal")[2].checked = false;
		document.getElementsByName("cal")[3].checked = false;
		document.querySelector("#result").value = "";
	}
}
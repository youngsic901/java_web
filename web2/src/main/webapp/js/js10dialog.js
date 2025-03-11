/**
 * 
 */
/*
let irum = "가나다";
let tel = "111-1111";
alert(`이름은 ${irum} \n전화는 ${tel}`); // 메세지 창 (경고 창) 창을 닫을 때까지 실행 일시정지
console.log('alert 창 수행 후 처리됨');
document.write("<br>alert 창 수행 후 처리됨");

let result = confirm("계속할까요?\n버튼 선택"); // 선택창
document.write("<br>선택한 값은 ", result); // true or false
if(result === true) document.write("확인 버튼 누름");

let juso = prompt("사는 곳 입력", "서울");
document.write("<br>주소는 ",juso);
*/

// 실습 : prompt를 사용해 두 수와 연산자가 있는 수식을 입력받아 disp 함수를 호출하여 연산 결과 출력하기

let data = prompt("수식을 입력 : ", "10 + 3");
let arr = []; // 두 수와 연산자를 분리해 기억하기 위함
for(let i = 0; i < 3; i++){
	arr = data.split(' ');
}

function dispData(su1, su2, op){
	// alert(su1 + " " + su2 + " " + op);
	let s1 = parseInt(su1);
	let s2 = parseInt(su2);
	
	let re = "";
	if(op === "+"){
		re = s1 + s2;
	} else if(op === "-"){
		re = s1 - s2;
	} else if(op === "*"){
		re = s1 * s2;
	} else if(op === "/"){
		re = s1 / s2;
	} else {
		re = "연산오류";
	}
	
	alert("연산 결과 : " + re);
}

dispData(arr[0], arr[2], arr[1]);
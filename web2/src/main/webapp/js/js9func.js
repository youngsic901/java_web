/**
 * 
 */

let count = 0;
function aa(){
	count += 1;
	let imsi = count; // 합수 내에서만 유효한 지역변수
	document.write(count + "번 수행<br>");
}

aa(); // 함수 호출
document.write("뭔가를 하다가 ...<br>");
aa(); // 함수 호출
document.write("함수는 참조형 타입 : ", typeof aa);
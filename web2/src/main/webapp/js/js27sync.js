/**
 * 
 */
/*
function myProcess(){ // 동기 처리 연습용 함수
	// Javascript는 single thread를 사용함으로 Event Loop를 이용해 멀티 태스킹의 효과를 볼 수 있다.
	// 동기 처리 (순차적)
	const now = new Date();
	const delay = now.getTime() + 3000;
	
	while(new Date().getTime() < delay){
		// 뭔가를 수행 : 예 - 네트워크, 웹크롤링, 웹 자료 읽기...
	}
	console.log('수행완료');
}
*/

function myProcess(){ // 비동기 처리 연습용 함수
	// setTimeout(); // 비동기 처리를 목적으로 지원하는 내장함수
	setTimeout(() => { // callback 함수는 3초 후에 지원됨
		console.log('완료');
	}, 3000);
}

console.log("hello");	// 처리 요청1
myProcess();			// 처리 요청2
console.log("world");	// 처리 요청3
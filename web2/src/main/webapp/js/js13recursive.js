/**
 * 
 */

console.log('거듭 제곱 내장함수 : ', Math.pow(2, 3));
// pow 함수의 결과를 얻는 사용자 함수 만들기
// 방법1 : 전통적 for loop
function test1(x, n){
	let result = 1;
	
	// 반복문으로 x를 n번 곱하기
	for(let i = 0; i < n; i++){
		result *= x;
	}
	return result;
}

console.log('전통적 for loop 결과', test1(2, 3));

// 방법2 : 재귀적 생각으로 loop

function test2(x, n){
	if(n == 1){
		return x;
	} else {
		return x * test2(x, n - 1); // 함수가 자신을 호출
	}
}

console.log('재귀적 loop 결과 ', test2(2, 3));

// 방법2-1 : 재귀적 loop : 삼항 연산자
function test3(x, n){
	return(n === 1)?x:(x * test3(x, n - 1));
}

console.log('재귀적 loop 결과2 ', test3(2, 3));

// 방법2-2 : 재귀적 loop : 화살표 함수
const test4 = (x, n) => (n === 1)?x:(x * test4(x, n - 1));

console.log('재귀적 loop 결과3 ', test4(2, 3));
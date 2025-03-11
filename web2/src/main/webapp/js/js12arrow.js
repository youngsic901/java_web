/**
 * 
 */

// 매개변수 복수
let sum1 = function(a, b){
	return a + b;
}

console.log(sum1(2, 3));

// 위 함수를 화살표 함수로 표현
let sum2 = (a, b) => a + b; // 익명함수의 주소를 치환
console.log(sum2(2, 3));

//매개변수 단수
let double1 = function(n){
	return n * 2;
}
console.log(`double1 : ${double1(3)}`);

// 매개변수가 하나일 시 ()를 생략 가능하다.
let double2 = n => n * 2;
console.log(`double2 : ${double2(3)}`);

// 매개변수 가 없는 경우 ()를 생략할 수 없다.
let sayHi = () => console.log(`Hello`);
sayHi();

let age = 33;
let welcome = (age < 30)?() => console.log(`안녕`) : () => console.log(`반가워`);
welcome();

let sumFunc = (a, b) => {
	let imsi = a + b;
	return imsi;	// 본문이 복수인 경우 값 반환 시 return 키워드를사용
}

console.log(`합은 ${sumFunc(3, 4)}`);

// callback 처리
// callback 함수는 간단히 말하면 매개변수로 함수 객체를 전달해서 호출 함수 내에서 매개변수 함수를 실행하는 것을 말한다.
console.log(`-------------------`);
// 반복문 처리
function myfunc(...para){
	console.log(`para 크기 : ${para.length}, ${para}`);
	
	for(let i = 0; i < para.length; i++){
		console.log(para[i]);
	}
	
	for(let s of para){
		console.log(s);
	}
	
	console.log('forEach ---');
	// forEach(callbackFn, [,arg])함수는 배열을 순회해서 각 요소를 콜백함수로 처리한다.
	// 배열의 각 요소에 대해 주어진 콜백 함수를 적용해서 순서대로 한 번씩 실행합니다.
	para.forEach(function(obj){
		console.log(obj);
	});
	
	(para.forEach(obj => console.log(obj)));
}
myfunc('a','b','c','d');

console.log('콜백 지원 내장함수 ---');
// setInterval() : 일정한 시간 간격(interval)으로 지정된 함수를 반복적으로 실행
// setInterval(() => console.log(new Date()), 2000); // setInterval(수행함수, 시간)
// set Timeout() : 지정된 시간이 경과한 후에 한 번만 특정 함수를 실행
// setTimeout(() => console.log("3초 후에 실행됨"), 3000); // setTimeout(수행함수, 시간)
setTimeout(function(){
	console.log("3초 후에 실행됨");
}, 3000);
/**
 * 
 */

function func1(){
	document.write("난 func1이야");
}

func1();
document.write("<br>");
let my = func1;
my();

function func2(a, b = 20){
	let c = a + b;
	return c;
	// 함수에서 return문이 없거나 return; 한 경우에는 undefined를 반환한다.
}

let re = func2(5, 6);
document.write("<br>re : " + re);
let re2 = func2("자바스크립트", "만세");
document.write("<br>re2 : " + re2);
let re3 = func2(3);
document.write("<br>re3 : " + re3);

function func3(){ // 매개변수가 선언되지 않은 경우
	document.write("<br>매개변수 갯수 : " + arguments.length);
	document.write("<br>전달 받은 변수 값 : " + arguments[0] + " " + arguments[1]); // arguments는 예약어
}

func3();
func3(3,4);
func3(3, 4, 5);
func3("good", "korea");

function hap(){
	let tot = 0;
	for(let i = 0; i < arguments.length; i++){
		tot += arguments[i];
	}
	return tot;
}

document.write("<br>hap : ", hap(1, 2, 3));
document.write("<br>hap : ", hap(1, 2, 3, 4, 5));
document.write("<br>hap : ", hap("자바", "스크립트"));

document.write("<hr>익명함수---------------<br>");
(function(){
	document.write("함수에 이름이 없는 경우 : 1회용 - 주로 초기화 작업할 때 사용");
})();
 
 const test = (function(n1, n2){ // 익명함수를 변수에 치환. 함수표현식이라고 함
	document.write("<br>두 수의 합은 " + (n1, n2));
 })
 
 test(2, 3);
 let test2 = test;
 test2(4, 5);
 
 document.write("<br><b>선언적함수(이름이 있는 함수)와 함수표현식(익명함수)의 차이 ---</b>");
 //hoisting : 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것
 func4();
 function func4(){
	document.write("<br>선언적 함수 호출 (함수 객체는 메모리에 계속 존재)");
 }
 func4();

 //kbs(); 
 let kbs = function(){
	document.write("<br>함수표현식 호출(휘발성, 동적, 1회용)");
 }
kbs();
kbs(); // 익명함수는 선언한 다음에만 부를 수 있음

document.write("<p/>중첩 함수(내부 함수)");
function func5(){
	function fu1(){
		document.write("<br>fu1 수행");
	}
	
	function fu2(){
		document.write("<br>fu2 처리");
	}
	
	fu1();
	fu2();
}
func5();
//fu1(); // 내부함수라서 실행 불가

function func6(a, b){
	function abcFunc(x){
		return x * x;
	}
	
	return Math.sqrt(abcFunc(a) + abcFunc(b));
}

document.write("<br>", func6(3, 4));

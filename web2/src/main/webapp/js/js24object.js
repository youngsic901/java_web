/**
 * 
 */
// 객체 선업 방법
// Object는 원시타입과 달리 다양한 데이터를 가질 수 있다.
window.onload = () => {
	// 1. new 연산자 사용. 객체 생성자 사용
	let obj1 = new Object();
	obj1.irum = "홍길동"; // 멤버 변수
	obj1.nai = 22;
	obj1.juso = "강남구 테헤란로 123";
	obj1.getJuso = function(){ return obj1.juso }; // 메소드
	
	console.log(obj1);
	console.log(typeof(obj1), obj1.toString());
	
	let str1 = obj1.irum + "님의 나이는 " + obj1.nai + ", 주소 : " + obj1.getJuso();
	document.getElementById("disp1").innerHTML = str1;
	
	let obj2 = obj1; //  주소 복사(얕은 복사, shallow copy)
	obj1.irum = "고길동";
	let str2 = obj2.irum + "님의 나이는 " + obj2.nai + ", 주소 : " + obj2.getJuso();
	document.getElementById("disp2").innerHTML = str2;
	
	// 2. literal(json 형태의 데이터)을 사용한 객체
	// JavaScript Object Notation (JSON)은 Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷입니다. 
	// 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용. 과거의 XML을 대체하고 있다.
	let myObj = {
		irum:"한국인", // key:value 형태의 property로 구성
		nai:33,
		showNai:function(msg){ // 메소드
			return this.nai + msg; // 메소드에서 this 키워드를 사용하면 객체 멤버에 접근 가능
		}
	}
	console.log(typeof(myObj),myObj);
	// 참고 : this의 처리 시점
	// this는 바인딩이 객체가 생성되는 시점에 결정된다.
	// 1) 일반 함수를 호출할 때는 this가 최상위 객체(global, window)를 가리킴
	// 2) 메소드를 호출할 때는 호출된 객체를 가리킴
	// 3) new를 사용하여 객체를 생성한 경우에는 객체를 가리킴
	
	let str3 = myObj.irum + "님의 나이는 " + myObj.nai + " " + myObj["nai"] +  " " + myObj.showNai("살");
	document.getElementById("disp3").innerHTML = str3;
	
	// 중첩 객체
	let myFriend = {
		name:"신기루",
		age:26,
		otherFriend : {
			name:"박치기",
			job:"프로그래머"
		}
	}
	
	let str4 = myFriend.name + "님의 나이는 " + myFriend.age + " " + myFriend.otherFriend.job;
	document.getElementById("disp4").innerHTML = str4;
	
	// literal을 이용한 미니 계산기 작성
	/*let calculator = {
		sum(){
			return this.a + this.b;
		},
		mul(){
			return this.a * this.b;
		},
		read(){
			this.a = +prompt('첫번째 숫자 : ', 1); // + : 문자열을 숫자로 변경
			// => Number(prompt('첫번째 숫자 : ', 1))
			this.b = +prompt('두번째 숫자 : ', 2);
		}
	};
	
	calculator.read();
	console.log(calculator.sum());
	console.log(calculator.mul());*/
	
	//3. 생성자 함수를 사용한 객체
	function Person(name){
		// this = {}; // 기본적으로 생성됨
		this.name = name; // Person 객체에 name이라는 public property를 정의
		
		this.setName = function(newName){ // 메소드를 정의할 때는 익명함수를 사용
			this.name = newName;
		};
	}
	
	let pp = new Person("손오공");
	document.getElementById("disp5").innerHTML = pp.name;
	
	let pp2 = new Person();
	document.getElementById("disp6").innerHTML = pp2.name;
	
	pp2.setName("사오정"); //setter로 값 주입
	document.getElementById("disp7").innerHTML = pp2["name"];
	
	// 생성자 함수를 이용한 미니 계산기 작성
	/*function Calculator2() {
		this.read = function(){
			this.a = +prompt('첫번째 숫자 : ', 1); // + : 문자열을 숫자로 변경
			// => Number(prompt('첫번째 숫자 : ', 1))
			this.b = +prompt('두번째 숫자 : ', 2);
		}
		this.sum = function(){
			return this.a + this.b;
		}
		this.mul = function(){
			return this.a * this.b;
		}
	};
	let calculator2 = new Calculator2();
	calculator2.read();
	console.log(calculator2.sum());
	console.log(calculator2.mul());*/
	
	let arr1 = [];
	let arr2 = new Array();
	
	console.log(arr1.constructor); // Array() { [native code] }
	console.log(arr2.constructor); // Array() { [native code] }
	
	arr1.push("kbs");
	arr1.push("sbs");
	arr1.push("mbc");
	arr1.push("ytn");
	// arr1.sort(); // ascending sort
	// arr1.reverse(); // descending sort
	
	console.log("arr1 크기: ", arr1.length);
	for(i in arr1){
		console.log(arr1[i]);
	}
	console.log("===");
	arr1.pop(); // 배열의 마지막 요소 제거
	for(i in arr1){
		console.log(arr1[i]);
	}
}
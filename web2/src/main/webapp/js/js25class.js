/**
 * 
 */
class Class1{
	// 멤버변수는 let을 쓰지 않는다.
	// 멤버변수 name;은 생성자로 값을 받는 경우 생략 가능
	constructor(name){
		this.name = name;
		this.addr = "서울";
	}
	
	sayHi(){
		document.write("<br>", this.name);
		document.write("<br>", this.addr);
		
		let msg = "프로그래머"; // 지역변수는 let을 적는다.
		return `<br>이름은 ${this.name} ${msg}`;
	}
}

let class1 = new Class1("신기해");
document.write(class1);
document.write(class1.sayHi());
document.write("<br> 이름은 ", class1.name);
document.write("<br> 주소는 ", class1.addr);

document.write("<br>😍새로운 객체 생성 ^^;");
let class2 = new Class1("백두산");
document.write(class2.sayHi());

document.write("새로운 클래스 생성----------------------");
class Class2{
	
	// constructor(){} // 생성자 오버로딩 지원 안함
	
	constructor(name, age){
		this.name = name;
		this.age = age;
		this.subject = "자바스크립트";
	}
	
	printData(){
		document.write(`<br>이름은 ${this.name}이고 나이는 ${this.age}`);
		document.write(`<br>수강 과목은 ${this.subject}`);
	}
	
	get getSubject(){
		return this.subject;
	}
	
	set setSubject(subject){ // set 없이 subject에 값을 줄 수 있다. 가독성을 위해 사용하는 것
		this.subject = subject;
	}
}

let myclass = new Class2("저팔계", 33);
myclass.printData();
document.write("<br> 이름은 ", myclass.name);
document.write("<br> 나이는 ", myclass.age);

myclass.subject = "파이썬";
document.write("<br> 과목은 ", myclass.subject);

//myclass.setSubject("MariaDB");
myclass.setSubject="MariaDB";
document.write("<br> 과목은 ", myclass.getSubject);

document.write("<hr>");

class Class3{
	#name; // private 멤버 변수
	age; // public 멤버 변수
	static addr = "서울";
	
	constructor(name, age){
		this.#name = name;
		this.age = age;
	}
	
	showData(){
		document.write("<br>", this.#name, this.age);
	}
}

const person = new Class3('공기밥', 23);
document.write(person);
document.write("<br>", person.age);
document.write("<br>", Class3.addr);
document.write("<br>", person.name); // undefined
person.showData();



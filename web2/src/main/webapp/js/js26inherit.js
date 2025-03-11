/**
 * 
 */
class Animal{
	 
	 constructor(name){
		this.name = name;
		this.speed = 0;
		this.move = "움직임";
	 }
	 
	 run(speed){
		this.speed = speed;
		document.write(`<br>${this.name} : speed ${this.speed}`);
		document.write(`<br>${this.move}`);
	 }
	 
	 stop(){
		this.speed = 0;
		document.write(`<br>${this.name} : stop ~~~~`);
	 }
	 
	 disp(){
		document.write(`<br>동물임을 널리 알리노라`);
	 }
}

class Rabbit extends Animal{
	// leg = 2; // 2를 치환했으나 의미가 없어짐 => 생성자에서 leg 정의
	
	constructor(name, leg){
		super(name); // 부모 생성자 호출
		this.leg = leg;
	}
	
	stop(){
		super.stop();
		this.hide();
		this.disp();
		super.disp();
	}
	
	disp(){ // method overriding
		document.write(`<br>토끼`);
		document.write(`<br>${this.move} ${super.move}`);
		// super 키워드는 메소드 오버라이딩일 때만 가능
	}
	
	hide(){ // Rabbit 고유 메소드
		document.write(`<br>${this.name} : 숨어 버리다  ~~~~`);
	}
}

class Dog extends Animal {
	constructor(name){
		super(name); // 부모 생성자 호출
	}
	
	disp(){ // method overriding
		document.write(`<br>댕댕이 : ${this.move}`);
	}
}

window.onload = function(){
	const ani = new Animal('동물 수퍼 클래스');
	ani.disp();
	ani.run(5);
	ani.stop();
	
	document.write(`<hr>상속을 이해하자`);
	const rabbit = new Rabbit('산토끼', 4);
	rabbit.disp();
	rabbit.run(10);
	rabbit.stop();
	
	document.write(`<hr>상속을 이해하자2`);
	const dog = new Dog('한봉지');
	dog.disp();
	dog.run(3);
	dog.stop();
	
	document.write(`<hr>다형성을 이해하자`);
	let poly = rabbit;
	poly.disp();
	
	poly = dog;
	poly.disp(); // poly.disp(); 라는 코드는 같지만 내용이 달라진다.
}
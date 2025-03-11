/**
 * 
 */
let aa = new Array();
// 배열 요소의 자료형은 동적
aa[0] = 10; aa[1] = 10.5; aa[3] = '결과는 '; aa[4] = '안녕'; aa[5] = true;
aa[6] = {kbs:9, sbs:5}; // json format

document.write(typeof aa, " <-- 보세요 참조형<br>");
let kk = 3;
document.write(`${aa[kk]} aa[0] : ${aa[0]} aa[1] : ${aa[1]} 배열 크기는 ${aa.length}`);
document.write("<br>", aa[2]); // undefined
document.write("<br>", aa[4], " ", aa[5], " ", aa[6].kbs, " ", aa[6]['sbs']);

document.write("<br>");
let bb = new Array(100, 200, 300); // 선언과 동시에 초기치 저장
for(let i = 0; i < bb.length; i++){
	document.write(bb[i] + " ");
}

document.write("<br>");
let cc = []; // 배열 리터럴. 비어 있는 배열 선언
cc[0] = "배열";
cc.push(23);
cc.push("테헤란로");
cc.push(2005, 2, 27); // 이렇게 명시하는것도 가능
document.write(cc[0], " ", cc[1], " ", cc[2], " ", cc[3], " ", cc[4], " ", cc[5], " " );
document.write("<br> 배열 크기 ", cc.length);
cc[99] = '와우';
document.write("<br> 배열 크기 ", cc.length);

document.write("<hr>");
let dd = new Array();
for(let m = 0; m < 10; m++){ // 배열에 값 저장 반복
	dd[m] = m + 1;
}

for(let m = 0; m < 10; m++){ // 배열에 값 반복 출력
	document.write(dd[m] + " ")
}

document.write("<br>");
let animal = ['호랑이', '사자', '고양이'];
for(let ani = 0; ani < animal.length; ani++){
	document.write(animal[ani] + " ");
}

document.write("<br>");
let [kbs, mbc] = [9, 11];
document.write(`<br>kbs:${kbs} mbc:${mbc}`);

document.write("<br>");
let myArr = [ // 배열 요소의 자료형엔 제약이 없다.
	'안녕', true, 3.5, {name: '홍길동'},
	function() { // 함수도 배열에 넣을 수 있음
		document.write("함수 처리");
	}
];
document.write(myArr[0]);
document.write(myArr[3].name);
myArr[4]();

document.write("<br>");
let arrLiteral = [ // 배열 리터럴
	[1, 2, 3],['a', 'b'], [4.5, 6.6]
];
document.write(arrLiteral);
document.write('<br>', arrLiteral[1]);
document.write('<br>', arrLiteral[1][1]);

document.write("<br>");
// 배열 요소 출력 : for
let korea = ['연필', '노트', '지우개'];
document.write(korea);

// for 방법1
for(let i = 0; i < korea.length; i++){
	document.write(korea[i] + " ");
}

// for 방법2
for(let i of korea){
	document.write(i + " ");
}

// for 방법3
for(let i in korea){
	document.write(korea[i] + " ");
}

document.write("<br>");
/*
let output = '';
for(let k in document){
	output += '[' + k + ']' + document[k] + '<br>';
}
document.write(output);
*/

// 배열 요소 제거 : delete, splice
let ar = ['i', 'go', 'home'];
delete ar[1]; // 배열 요소값은 삭제되나, 자리가 남음
document.write(ar, ' ', ar.length); // 크기 유지

ar = ['i', 'go', 'home'];
ar.splice(1, 1); // 인덱스 지점(부터), 삭제 갯수
document.write(ar, ' ', ar.length); // 크기 축소

ar = ['i', 'go', 'home'];
ar.pop(); // 배열의 마지막 요소 삭제, 크기 축소 LIFO
ar.shift(); // 배열의 첫 요소 삭제, 크기 축소  FIFO
document.write(ar, ' ', ar.length);

document.write("<br>");
ar.push("good"); // 추가 append
ar.splice(2, 0, 'kbs', 'sbs'); // 삽입 insert 2번째 인덱스 이후부터 0개 삭제후 삽입
document.write(ar, ' ', ar.length);

document.write("<hr>");
// 구조 분해 할당 : 배열, 객체의 값들을 추출하여 한 번에 여러 변수에 할당함
let nums = [1, 2, 3, 4];
let [a1, a2, a3] = nums;
document.write(`${a1} ${a2} ${a3}`);

document.write("<br>");
let persons = {name: '이기자', age: 23, gender: '남'};
let {name: irum, age: nai, gender:ge} = persons;
document.write(`${irum} ${nai} ${ge}`);

document.write("<br>");
let {name, age, gender} = persons; // key와 변수명이 같다면 이렇게 작성해도 무방
document.write(`${irum} ${nai} ${gender}`);

// 전개 연산자(spread operator)
// 배열이나 객체를 '...' 연산자와 함께 사용하면 배열, 객체 내의 값을 분해된 값으로 전달
document.write("<br>");
let digits = [..."0123abc"];
document.write(digits, " ", digits.length);

let a = [1, 2, 3];
let b = [0, a, 4];
document.write("<br>", b,  ", 크기:", b.length);
let c = [0, ...a, 4];
document.write("<br>", c,  ", 크기:", c.length);

document.write("<br>");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // 배열 결합 (전통적)
document.write(arr3, " ", arr3.length);

document.write("<br>");
const arr4 = [...arr1, ...arr2]; // 배열 결합 (spread operator)
document.write(arr4, " ", arr4.length);

document.write("<br>", arr1);
arr1.push(...arr2);
document.write("<br>", arr1);
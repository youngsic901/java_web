/**
 * 
 */

document.write("내장함수 중 문자 관련 예 ---");
let str = "java script Language";
document.write(`<br>str.charAt(2) : ${str.charAt(2)}`);
document.write(`<br>str.indexOf('v') : ${str.indexOf('v')}`);
document.write(`<br>str.indexOf('K') : ${str.indexOf('K')}`);
document.write(`<br>str.substring(1, 3) : ${str.substring(1, 3)}`); // 1이상 3 미만 지점에 문자열 출력
document.write(`<br>str.slice(1, 5) : ${str.slice(1, 5)}`); // 시작인덱스 이상, 끝인덱스 미만
// ...

document.write("내장함수 중 스타일 관련 예 ---");
document.write(`<br>str.bold() : ${str.bold()}`);
document.write(`<br>str.big().strike().fontsize(24) : ${str.big().strike().fontsize(24)}`);

document.write("내장함수 중 수학 관련 예 ---");
document.write(`<br>Math.abs(-7) : ${Math.abs(-7)}`);
document.write(`<br>Math.round(3.6) : ${Math.round(3.6)}`);
document.write(`<br>Math.random() : ${Math.random()}`);

// ...

document.write("내장함수 중 날짜 관련 예 ---");
let d = new Date();
document.write(`<br>Date() : ${Date()}`);
document.write(`<br>d : ${d}`);
document.write(`<br>${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${d.getHours()}시`);
// ...

document.write("내장함수 중 기타 예 ---");
document.write(`<br>parseInt() : ${parseInt("3.7") + 5}`); // 버림
document.write(`<br>parseFloat() : ${parseFloat("3.7") + 5}`); // 실수화

// 별도 창 열기 : open('파일명','출력형태','속성')
// open('js1.html','_blank', 'width=300, height=200,left=100,top=200,resizable=yes');
open('https://www.naver.com','_blank', 'width=300, height=200,left=100,top=200,resizable=yes');
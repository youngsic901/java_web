/**
 * 
 */
let a = 1;

while(a <= 3){
	document.write("a는 ", a, "<br>");
	a++;
}
document.write("반복문 수행 후 ", a, "<br>");

let b = 1;
do{
	document.write("b는 ", b, "<br>");
	b++;
}while(b <= 3);

document.write("<br>");
let c = 0;
while(true){
	c += 1;
	if(c === 3) continue;
	if(c === 5) break;
	document.write("c는 ", c, "<br>");
}
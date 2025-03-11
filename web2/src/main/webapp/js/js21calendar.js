/**
 * 
 */
window.onload = () => {
	document.querySelector("#btnShow").addEventListener("click", func);
}

function func(){
	// alert("a");
	// 현재 날짜
	let now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth();
	let day = now.getDate();
	console.log(`${year} ${month + 1} ${day}`);
	
	// 현재 월의 1일은 무슨 요일?
	let setDate = new Date(year, month, 1);
	let firstDay = setDate.getDate();
	console.log(firstDay);
	let yoil = setDate.getDay(); // 요일 반환 0(일) ~ 6(토)
	console.log(yoil); // 2025 3 1은 토요일이므로 6을 반환
	
	// 현재 월의 날 수?
	const nalsu = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	
	// 2월 날수는 윤년 체크
	if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
		// 윤년은 2월에 29일
		nalsu[1] = 29;
	}
	
	let str = makeCalendar(yoil, nalsu[month], year, month + 1, day);
	
	document.querySelector("#disp").innerHTML = str; // disp 태그에 테이블 삽입
	
	// 버튼 보이기
	document.querySelector("#etc").style.display = "";
}

function makeCalendar(yoil, nalsu, year, month, day){
	console.log(yoil + " " + nalsu + " " + year + " " + month + " " + day);
	let str = `<table border='1' width='250'>`;
	str += `<tr><th colspan='7'>${year}년 ${month}월</th></tr>`;
	str += `<tr>`;
	let weekTitle = new Array("일", "월", "화", "수", "목", "금", "토");
	for(let i = 0; i < weekTitle.length; i++){
		str += `<th>${weekTitle[i]}</th>`
	}
	str += `</tr>`; // 년 월 요일명 출력 완료
	
	// 날 수 채우기
	let no = 1;
	let currentCell = 0;
	// 이번 달은 몇주인가?
	let ju = Math.ceil((nalsu + yoil) / 7);
	console.log(`이번 달은 ${ju}주`);
	
	for(let r = 0; r < ju; r++){ // 행
		str += `<tr style='text-align:center'>`;
		for(let col = 0; col < 7; col++){ // 열
			console.log(yoil);
			if(currentCell < yoil || no > nalsu){
				// 예: 첫 주에 1일이 수요일이면 이전은 공백처리, 마지막 주는 그 달의 날 수 까지만 출력
				str += `<td>&nbsp;</td>`;
				currentCell++;
			} else {
				console.log( "요일: " + new Date(year, month + 1, no).getDay());
				console.log( "날짜: " + new Date(year, month + 1, no).getDate());
				
				if(no === day){
					str += `<td style='background-color:skyblue'>${no}</td>`;
				} else if(col === 0){
					str += `<td style='color:red'>${no}</td>`;
				} else if(col === 6){
					str += `<td style='color:blue'>${no}</td>`
				} else {
					str +=`<td>${no}</td>`;
				}
				no++;
			}
		}
		str += `</tr>`;
	}
	str += `</table>`;
	return str;
}
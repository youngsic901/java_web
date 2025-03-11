/**
 * 
 */
window.onload = () => {
	class Calendar {
		constructor() {
			this.now = new Date();
			this.year = this.now.getFullYear();
			this.month = this.now.getMonth();
			this.day = this.now.getDate();
			this.yoil = null;
			this.nalsu = [31,28,31,30,31,30,31,31,30,31,30,31];
		}

		setCalendar(){
			// console.log(`${this.year}-${this.month + 1}-${this.day}`);

			let setDate = new Date(this.year, this.month, 1);
			// console.log(firstDay);
			this.yoil = setDate.getDay();
			// console.log(this.yoil);

			if(this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0) {
				this.nalsu[1] = 29;
			} else {
				this.nalsu[1] = 28;
			}
		}

		setPrevYear(){
			this.year -= 1;
		}

		setNextYear(){
			this.year += 1;
		}

		setPrevMonth(){
			this.month -= 1;
			if(this.month < 0){
				this.month = 11;
				this.year -= 1;
			}
		}

		setNextMonth(){
			this.month += 1;
			if(this.month > 11){
				this.month = 0;
				this.year += 1;
			}
		}

		makeCalendar(){
			console.log(this.year);
			// console.log(this.yoil + " " + this.nalsu[this.month - 1] + " " + this.year + " " + this.month + " " + this.day);
			let str = `<table border='1' width='250'>`;
			str += `<tr><th colspan='7'>${this.year}년 ${this.month + 1}월</th></tr>`;
			str += `<tr>`;
			let weekTitle = ["일", "월", "화", "수", "목", "금", "토"];
			for(let i = 0; i < weekTitle.length; i++){
				str += `<th>${weekTitle[i]}</th>`
			}
			str += `</tr>`;

			let no = 1;
			let currentCell = 0;
			console.log(this.nalsu);
			console.log(this.yoil);
			let ju = Math.ceil((this.nalsu[this.month] + this.yoil) / 7);
			console.log("날수 : " + this.nalsu[this.month]);
			console.log(`이번 달은 ${ju}주`);

			for(let r = 0; r < ju; r++){ // 행
				str += `<tr style='text-align:center'>`;
				for(let col = 0; col < 7; col++){ // 열
					console.log(this.yoil);
					if(currentCell < this.yoil || no > this.nalsu[this.month]){
						// 예: 첫 주에 1일이 수요일이면 이전은 공백처리, 마지막 주는 그 달의 날 수 까지만 출력
						str += `<td>&nbsp;</td>`;
						currentCell++;
					} else {
						// console.log( "요일: " + new Date(this.year, this.month + 2, no).getDay());
						// console.log( "날짜: " + new Date(this.year, this.month + 2, no).getDate());

						if(this.year === new Date().getFullYear() && this.month === new Date().getMonth() && no === this.day){
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

			document.querySelector("#disp").innerHTML = str;

			document.querySelector("#etc").style.display = "";
		}
	}
	let calendar = new Calendar();
	console.log(calendar.year);

	document.querySelector("#btnShow").onclick = () => {
		calendar.setCalendar();
		calendar.makeCalendar();
	}

	document.querySelector("#btnPyear").onclick = () => {
		calendar.setPrevYear();
		calendar.setCalendar();
		calendar.makeCalendar();
	}

	document.querySelector("#btnPmonth").onclick = () => {
		calendar.setPrevMonth();
		calendar.setCalendar();
		calendar.makeCalendar();
	}

	document.querySelector("#btnNmonth").onclick = () => {
		calendar.setNextMonth();
		calendar.setCalendar();
		calendar.makeCalendar();
	}
	document.querySelector("#btnNyear").onclick = () => {
		calendar.setNextYear();
		calendar.setCalendar();
		calendar.makeCalendar();
	}
}
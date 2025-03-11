/**
 * 
 */
window.onload = () => {
	document.getElementById("sel").onchange = () => { // select 태그에는 onchange권장
		let sangpum = comment = "";
		
		let sel = frm.sel.options[frm.sel.selectedIndex].value;
		console.log(frm.sel.selectedIndex, " ", sel);// 1  '1000'
		let sang = frm.sel.options[frm.sel.selectedIndex].text;
		// alert(sang + " " + sel);
		
		sangpum = sang;
		if(sel === '1000'){
			comment = "볼펜은 모나미";
		} else if(sel === '2000'){
			comment = "내 일상을 잘 정리해 둠";
		} else if(sel === '3000'){
			comment = "mouse";
		}
		
		// console.log(sangpum + " " + comment);
		
		addRowFunc(sangpum, comment); // table에 tr 추가
	}
}

function addRowFunc(sangpum, comment){
	// tr 작업
	let row = document.createElement("tr");
	let col = addColFunc(sangpum);
	row.appendChild(col); // <tr><td>볼펜</td></tr>
	
	col = addColFunc(comment);
	row.appendChild(col); // <tr><td>볼펜</td><td>볼펜은 모나미</td></tr>
	
	document.getElementById("myTbody").appendChild(row);
}

function addColFunc(data){
	// td 작업
	let col = document.createElement("td");
	let text = document.createTextNode(data);
	col.appendChild(text);
	return col;
}
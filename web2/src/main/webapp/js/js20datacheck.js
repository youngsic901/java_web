/**
 * 
 */
window.onload = () => {
	document.querySelector("#btnSend").onclick = chkDataFunc;
	document.querySelector("#btnClear").onclick = clearFunc;
}

function chkDataFunc(e){
	e.preventDefault();   // submit 기능 해제
	
	// 입력자료 오류 검사 후 서버로 자료 전송
	// name이 공백 또는 숫자로 입력된 경우 오류로 취급
	if(frm.name.value === "" || isNaN(frm.name.value) === false){
		frm.name.focus();
		alert("이름은 문자열로만 입력 하세요");
		return;
	}
	
	// id 3자 이사 입력 허용
	if(frm.id.value.length < 3){
		frm.id.focus();
		alert("id는 3자 이상 입력하세요");
		return;
	}
	
	//정규표현식 : 여러 용도 중 입력자료 오류 확인 시에도 많이 활용
	let str = "1234Abc가나다45배 asdf1 23고파 *&^~!@#";
	console.log(str.match(/[1]/)); // 문자열.match(/정규표현식/) : 일치하는 값 찾기
	console.log(str.match(/[1]/g)); // global : 해당되는 모든 값 반환
	console.log(str.match(/[0-9]/g)) // 숫자만
	console.log(str.match(/\d/g)) // 숫자만
	console.log(str.match(/\D/g)) // 숫자만 빼고
	console.log(str.match(/[0-9 ]/g)) // 숫자와 공백
	console.log(str.match(/[가고]/g))
	console.log(str.match(/[가-힣]/g)) // 한글만 한글자 씩
	console.log(str.match(/[가-힣]+/g)) // 한글만 (한글 이외의 새로운 문자가 나올 때까지)
	console.log(str.match(/\d{2}/g)) // 숫자 연속 2자리만
	console.log(str.match(/\d{2,3}/g)) // 숫자 연속 2자 또는 3자만
	
	// 이메일 검사 (ex:abc@abc.com)
	const regExp = /[0-9a-zA-Z][_0-9a-zA-z]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
	if(!frm.email.value.match(regExp)){
		alert("이메일을 정확히 입력하세요");
		frm.age.focus();
		return;
	}
	
	// 나이 검사
	const regExp2 = /^[0-9]{1,2}$/;
	if(!frm.age.value.match(regExp2)){
		alert("나이를 정확히 입력하세요");
		frm.age.focus();
		return;
	}
	
	document.frm.action="js20form.jsp";
	frm.method="get";
	frm.submit();
}

function clearFunc(){ // reset + 추가 기능
	// alert("b");
	// frm.name.focus(); // 아래와 결과 동일
	document.querySelector("#name").focus();
}
window.onload = () => {
	document.querySelector("#btnOk").onclick = getFunc;
}

function getFunc(){
	// alert("a");
	frmGet.submit(); // 자료를 들고 서버의 서블릿 파일을 요청
	
}
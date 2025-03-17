function funcUpdate(){
    let code = prompt("수정할 코드 입력", "");
    if(code !== "" && code !== null){
        location.href = "jspex16up.jsp?code=" + code;
    }
}

function funcDelete(){
    alert("b");
}
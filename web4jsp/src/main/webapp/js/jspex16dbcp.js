function funcUpdate(){
    let code = prompt("수정할 코드 입력", "");
    if(code !== "" && code !== null){
        location.href = "jspex16up.jsp?code=" + code;
    }
}

function funcDelete(){
    let code = prompt("삭제할 코드 입력", "");
    if(code !== "" && code !== null){
        if(confirm("정말 삭제할까요?")){
            location.href = "jspex16del.jsp?code=" + code;
        }
    }
}
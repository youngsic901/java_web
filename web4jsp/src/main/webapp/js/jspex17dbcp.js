function funcDelete(code){
    if(code !== "" && code !== null){
        if(confirm("정말 삭제할까요?")){
            location.href = "jspex17del.jsp?code=" + code;
        }
    }
}

function funcUpdate(code){
    if(code !== "" && code !== null){
        location.href = "jspex17up.jsp?code=" + code;
    }
}

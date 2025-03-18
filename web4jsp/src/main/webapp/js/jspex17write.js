window.onload = function() {
    document.querySelector("#btnWrite").onclick = addGuestbook;
    document.querySelector("#btnList").onclick = returnList;
}

function addGuestbook() {
    if(document.querySelector("#writer").value === null || document.querySelector("#writer").value === ""){
        alert("누가 작성하는지 입력해 주세요");
        return;
    } else if(document.querySelector("#title") === null || document.querySelector("#title").value === ""){
        alert("제목이 반드시 필요합니다.");
        return;
    } else if(document.querySelector("#contents").value === null || document.querySelector("#contents").value === ""){
        alert("내용이 반드시 필요합니다.");
        return;
    }

    document.querySelector("#frm").submit();
}

function returnList() {
    location.href = "jspex17dbcp.jsp"
}
window.onload = function() {
    document.querySelector("#back").onclick = function() {
        history.back();
    }
    document.querySelector("#btnOk").onclick = function() {
        // 입력자료 오류검사 생략
        frm.submit();
    }
}


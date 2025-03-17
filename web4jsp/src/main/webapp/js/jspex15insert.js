window.onload = () => {
    document.querySelector("#btnIns").onclick = func;
}

function func() {
    if(insFrm.sang.value === ""){
        alert("상품명 입력");
        insFrm.sang.focus();
    } else if(insFrm.su.value === ""){
        alert("수량 입력");
        insFrm.su.focus();
    } else if(insFrm.dan.value === ""){
        alert("단가 입력");
        insFrm.dan.focus();
    }

    insFrm.submit();
}
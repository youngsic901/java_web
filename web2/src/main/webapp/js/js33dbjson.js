window.onload = function() {
    document.querySelector("#btnOk").onclick = showFunc;
    document.querySelector("#btnOk2").onclick = showFunc2;
}

let xhr;
function showFunc(){
    // alert("test");

    xhr = new XMLHttpRequest();
    xhr.open("GET", "js33dbjson.jsp", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            processFunc();
        }
    }
    xhr.send();
}

function processFunc(){
    let datas = xhr.responseText;

    let parseData = JSON.parse(datas);
    // alert(parseData.sangpum.length);
    let str = "";
    for(let i = 0; i < parseData.sangpum.length; i++){
        str += parseData.sangpum[i].code + " " +
        parseData.sangpum[i].sang + " " +
        parseData.sangpum[i].su + " " +
        parseData.sangpum[i].dan + "<br>";
    }

    document.querySelector("#disp").innerHTML = str;
}

// ---fetch---------------------------------------
function showFunc2(){
    fetch("js33dbjson.jsp") // 내부적으로 Promise 객체에 의해 비동기 처리됨
        .then(response => {
            if(!response.ok){ // response.ok는  true or false 반환
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json(); // JSON 형태의 문자열을 JSON 타입으로 형변환
        })
        .then(parseData => {
            processFunc2(parseData);
        })
        .catch(error => console.log("fetch err : ", error));
}

function processFunc2(parseData){
    alert(parseData.sangpum.length);

    let str = "";
    for(let i = 0; i < parseData.sangpum.length; i++){
        str += parseData.sangpum[i].code + " " +
            parseData.sangpum[i].sang + " " +
            parseData.sangpum[i].su + " " +
            parseData.sangpum[i].dan + "<br>";
    }

    document.querySelector("#disp").innerHTML = str;
}
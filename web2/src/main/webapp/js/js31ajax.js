window.onload = function(){
    document.getElementById("btnOk1").onclick = function(){
        startFunc(); // onclick 이벤트에서 파라미터를 받고 싶으면 이렇게
    }
    document.getElementById("btnOk2").onclick = startXml;
    document.getElementById("btnOk3").onclick = startJson;
    document.getElementById("btnOk4").onclick = startJson2;
    document.getElementById("btnOk5").onclick = startJson3;
}

let xhr;

function startFunc(){
    //* AJAX 예제 (JS의 XMLHttpRequest 클래스를 이용하는 방식) -------------
    xhr = new XMLHttpRequest();
    // xhr.open("GET", "js31text.txt", true); // "요청방법", "대상파일", 비동기(true)
    xhr.open("GET", "js31csv.txt", true);
    xhr.onreadystatechange = function() {
        // alert(xhr.readyState); // 요청의 처리 상태를 나타내는 프로퍼티 0 ~ 4
        if (xhr.readyState === 4){ // 통신 상태 확인
            // alert(xhr.status); // 3자릿수의 숫자로 HTTP 상태코드를 나타내는 프로퍼티
            if(xhr.status === 200) { // 요청한 파일 상태 확인(양호)
                process();
            }
        }
    };
    xhr.send();
}
function process(){
    // alert("요청성공");
    // alert(xhr.responseText);
    let data = xhr.responseText;
    // js31text.txt 자료를 읽어서 출력
    // document.querySelector("#disp").innerText = data;
    
    // let imsi = document.createTextNode(data); // DOM 사용
    // document.querySelector("#disp").appendChild(imsi);

    // js31csv.txt 자료 읽어 출력-----------------------------------
    // 원본 자료가 엔터로 구분된 2행이므로 행분리 작업
    // alert(data);
    let rowData = data.split(String.fromCharCode(13)); // ascii코드 13은 CR (엔터키)
    // alert(rowData.length);
    let str = "";
    for(let i = 0; i < rowData.length; i++){
        // alert(rowData[i]);
        let colData = rowData[i].split(",") // 열은 ,로 구분

        for(let j = 0; j < colData.length; j++){
            str += colData[j] + " ";
        }
        str += "<hr>";
    }
    document.querySelector("#disp").innerHTML = str;
}

function startXml(){
    xhr = new XMLHttpRequest();
    // xhr.open("GET", "js31text.txt", true); // "요청방법", "대상파일", 비동기(true)
    xhr.open("GET", "js31.xml", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){ // 통신 상태 확인
            processXml();
        }
    };
    xhr.send();
}

function processXml(){
    // alert(xhr.responseText);
    // alert(xhr.responseXML); // XML 객체 읽기 : DOM 사용 가능
    let data = xhr.responseXML;
    let itemNode = data.getElementsByTagName("item");
    // alert(itemNode.length);
    let codeNode = data.getElementsByTagName("code");
    let sangNode = data.getElementsByTagName("sangpum");

    let str="";
    for(let i = 0; i < itemNode.length; i++){
        str += codeNode[i].childNodes[0].nodeValue + " ";
        str += sangNode[i].firstChild.nodeValue + " ";
        str += codeNode[i].getAttribute("price");
        str += "<br>";
    }
    document.querySelector("#disp").innerHTML = str;
}


function startJson(){
    xhr = new XMLHttpRequest();
    xhr.open("GET", "js31.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){ // 통신 상태 확인
            processJson();
        }
    };
    xhr.send();
}
function processJson(){
    let data = xhr.responseText;
    // alert(data);
    let parseData = JSON.parse(data); // 문자열을 JSON 타입으로 객체화 : 배열 처리 가능
    // alert(parseData);
    // alert(parseData.sangpum.length);

    let str = "";
    for(let i = 0; i < parseData.sangpum.length; i++){
        str += parseData.sangpum[i].code + " " + parseData.sangpum[i].sang + "<br>";
    }
    document.querySelector("#disp").innerHTML = str;
}
function startJson2(){
    const url = "js31.json";
    // fetch : XMLHttpRequest 객체가 자동 지원 내부적으로 Promise 객체가 지원.
    fetch(url).then(res=>{
        if(res.status === 200){
            return res.json();
        } else {
            console.error(`HTTP error! status=${res.status}`);
        }
    }).then(jsonData => {
        processJson2(jsonData);
    }).catch(err=>{
        console.log(err);
    });
}

function processJson2(jsonData){
    let str = "";
    for(let i = 0; i < jsonData.sangpum.length; i++){
        str += jsonData.sangpum[i].code + " " + jsonData.sangpum[i].sang + "<br>";
    }
    document.querySelector("#disp").innerHTML = str;
}

async function startJson3(){
    const url = "js31.json";
    const response = await fetch(url);
    const data = await response.json();
    processJson2(data);
}
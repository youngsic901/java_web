window.onload = () => {
    document.querySelector("#btnOk").onclick = showFunc;
}

let xhr = "";
function showFunc() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "js32dbxml.jsp", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            processFunc();
            processFunc2();
        } // 단계적으로 처리하므로 else 사용 안됨
    }
    xhr.send();
}

function processFunc() {
    let datas = xhr.responseXML;
    // alert(datas);
    let sangpumNode = datas.getElementsByTagName("sangpum");
    let codeNode = datas.getElementsByTagName("code");
    let sangNode = datas.getElementsByTagName("sang");
    let suNode = datas.getElementsByTagName("su");
    let danNode = datas.getElementsByTagName("dan");

    let str = "<table border='1'>";
    str += "<tr><th>코드</th><th>품명</th><th>수량</th><th>단가</th></tr>"
    for(let i = 0; i < sangpumNode.length; i++) {
        str += "<tr>";
        str += "<td>" + codeNode[i].firstChild.nodeValue + "</td>";
        str += "<td>" + sangNode[i].firstChild.nodeValue + "</td>";
        str += "<td>" + suNode[i].firstChild.nodeValue + "</td>";
        str += "<td>" + danNode[i].firstChild.nodeValue + "</td>";
        str += "</tr>";
    }
    str += "</table>";

    document.querySelector("#disp").innerHTML = str;
}
// map()함수는 배열의 각 요소를 순회하여 콜백 함수를 적용한 결과를 모아 새로운 배열을 반환하는 함수
// join()함수는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
// const arr = ['바람', '비', '물']; cosole.log(arr.join('')); 결과 : 바람비물
function processFunc2(){
    let datas = xhr.responseXML;
    let sangpumNode = datas.getElementsByTagName("sangpum");

    let str = `<table border='1'>`;
    str += `<tr><th>코드</th><th>품명</th><th>수량</th><th>단가</th></tr>
        ${Array.from(sangpumNode).map(sangpum =>`
            <tr>
                <td>${sangpum.querySelector("code").textContent}</td>
                <td>${sangpum.querySelector("sang").textContent}</td>
                <td>${sangpum.querySelector("su").textContent}</td>
                <td>${sangpum.querySelector("dan").textContent}</td>
            </tr>
            `).join('')}
        </table>
        `;
        document.querySelector("#disp2").innerHTML = str;
}
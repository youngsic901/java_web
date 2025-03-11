window.onload = () => {
    document.querySelector("#btn1").onclick = funcJs;
    document.querySelector("#btn2").onclick = funcFetch;
    document.querySelector("#btn3").onclick = funcAsync;
    document.querySelector("#btn4").onclick = funcAxios;

    document.querySelector("#btnApi1").onclick = funcApi1;
    document.querySelector("#btnApi2").onclick = funcApi2;
}

let xhr;
function funcJs(){ // btn1
    xhr = new XMLHttpRequest();

    xhr.open("GET", "js36my.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            processFunc();
        }
    }
    xhr.send();
}
// function processFunc(){
let processFunc = () => {
    let datas = xhr.responseText;
    let parseData = JSON.parse(datas);
    let str = "";
    for(let i = 0; i < parseData.sangpum.length; i++){
        str += parseData.sangpum[i].code + " ";
        str += parseData.sangpum[i].sang + "<br>";
    }
    document.querySelector("#show1").innerHTML = str;
}

function funcFetch(){ // btn2
    const url = "js36my.json";
    fetch(url) // fetch(url, {method:"GET"}) get이면 해당 코드로 생략 가능
        .then(res => {
            if(res.status === 200) {
                return res.json(); // json객체로 변환
            } else {
                console.log(`HTTP error: status = ${res.status}`);
            }
        })
        .then(jsonData => { // JSON.parse()가 된 상태
            let str = "";
            for(let i = 0; i < jsonData.sangpum.length; i++){
                str += jsonData.sangpum[i].code + " ";
                str += jsonData.sangpum[i].sang + "<br>";
            }
            document.querySelector("#show2").innerHTML = str;
        })
        .catch(err => {
            console.error(err);
        });
}

async function funcAsync(){ // btn3
    const url = "js36my.json";
    const response = await fetch(url);
    const parseData = await response.json();

    let str = "";
    for(let i = 0; i < parseData.sangpum.length; i++){
        str += parseData.sangpum[i].code + " ";
        str += parseData.sangpum[i].sang + "<br>";
    }
    document.querySelector("#show3").innerHTML = str;
}

function funcAxios(){ // btn4
    const url = "js36my.json";
    // axios : 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.
    axios.get(url)
    .then(res => {
        console.log(res.data);          // 서버가 제공하는 응답 데이터
        console.log(res.status);        // HTTP 상태 코드
        console.log(res.statusText);    // HTTP 상태 메세지
        console.log(res.headers);       // HTTP 헤더 정보
        console.log(res.config);        // Axios가 제공하는 구성 정보

        return res.data;
    })
    .then(jsonData => { // JSON.parse()가 된 상태
        let str = "";
        for(let i = 0; i < jsonData.sangpum.length; i++){
            str += jsonData.sangpum[i].code + " ";
            str += jsonData.sangpum[i].sang + "<br>";
        }
        document.querySelector("#show4").innerHTML = str;
    })
    .catch(err => {
        console.error(err);
    });
}

function funcApi1(){
    const REST_API_KEY = `764729df3264ca58e90cb860dddd1fa8`;
    const bookname = document.querySelector("#book").value;
    const query = `?query=${bookname}`;

    fetch(`https://dapi.kakao.com/v3/search/book${query}`, {
        method: 'get',
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
        }
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data.documents.length);
            console.log(data.documents);

            let str = "";
            for(let i = 0; i <data.documents.length; i++){
                str += data.documents[i].authors + ", " +
                    data.documents[i].title + ", " +
                    data.documents[i].price + ", " +
                    data.documents[i].publisher + "<br>";
            }

            document.querySelector("#showApi1").innerHTML = str;
        })
        .catch(err => {
            console.error(err);
        });
}
function funcApi2(){
    const REST_API_KEY = `764729df3264ca58e90cb860dddd1fa8`;
    const bookname = document.querySelector("#book").value;
    const query = `?query=${bookname}`;

    axios.get(`https://dapi.kakao.com/v3/search/book${query}`, {
        method: 'get',
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
        }
    })
    .then(res => {
        return res.data;
    })
    .then(data => {
        console.log(data.documents.length);
        console.log(data.documents);

        let str = "";
        for(let i = 0; i <data.documents.length; i++){
            str += data.documents[i].authors + ", " +
                data.documents[i].title + ", " +
                data.documents[i].price + ", " +
                data.documents[i].publisher + "<br>";
        }

        document.querySelector("#showApi2").innerHTML = str;
    })
    .catch(err => {
        console.error(err);
    })
}
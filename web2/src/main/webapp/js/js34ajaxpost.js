window.onload = () => {
    document.querySelector("#btnGet").onclick = getFunc;
    document.querySelector("#btnPost").onclick = postFunc;
}

let xhr;
function getFunc() {
    let irum = frm.name.value;
    let nai = frm.age.value;
    // alert(irum + " " + nai);
    xhr = new XMLHttpRequest();
    let fname = "js34getpost.jsp?irum=" + irum + "&nai=" + nai;
    // alert(fname);

    xhr.open("GET", fname, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            process1();
        }
    }
    xhr.send();
}

function process1() {
    alert(xhr.responseText);
}

function postFunc() {
    // alert("b");
    let irum = frm.name.value;
    let nai = frm.age.value;

    xhr = new XMLHttpRequest();

    let fname = "js34getpost.jsp";
    xhr.open("POST", fname, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            process1();
        }
    }

    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send("irum=" + irum + "&nai=" + nai);
}
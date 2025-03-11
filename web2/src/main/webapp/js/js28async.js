window.onload = () => {
    /*
    function myProcss(){
        // 비동기 처리를 목적으로 비동기 안에 여러 개의 비동기 처리를 하면 콜백지옥에 빠짐
        // 코드를 이해하기 어려워짐
    console.log("시작");

        setTimeout(() => {
            console.log("콜백1 완료");

            setTimeout(() => {
                console.log("콜백2 완료");

                setTimeout(() => {
                    console.log("콜백3 완료");
                }, 2000);
            }, 2000);
        }, 2000);
    }

    myProcss();
    console.log("끝");
    */

    // Promise의 등장 : 매개변수는 2개
    /*const myPromise = new Promise((resolve, reject) => {
        // Promise 객체가 만들어지면 내부적으로 executor에 의해 자동 실행된다.
        setTimeout(() => {
            resolve("이 값이 then 메소드의 매개변수로 전달됨");
            // new Promise(executor) :  state : "pending"   resolve('메세지')  state : "fulfilled"
            //                          result : undefined -------------->    result : "메세지"
        }, 2000);
    });

    // Promise는 then 메소드를 갖고 있다.
    myPromise.then((res) => { // resolve가 처리되면 then을 만남(실행)
        console.log('then 처리됨 : ',  res);
    });*/

    // Promise chaining
    const myPromise = (seconds) => new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = 2;
            if(a % 2 === 0) {
                resolve("이 값이 then 메소드의 매개변수로 전달됨");
            } else {
                reject('에러 : reject이 실행되면 catch 메소드로 받을 수 있다.');
            }
        }, seconds);
    });

    myPromise(2000).then((res) => {
       console.log("then 처리됨 1");
       console.log(res);
       return myPromise(2000); // 다음 then 메소드가 호출됨
    })
    .then(res => {
        console.log("then 처리됨2");
        console.log(res);
        return myPromise(2000); // 다음 then 메소드를 호출 가능
    })
    .catch((res) => {
        console.log('error : ', res);
    }); // finally를 적을 수도 있다 : then, catch와 상관없이 늘 실행

    // 예를 들어 웹 서비스에서 사용자 로그인 인증처리를 한다면
    /*
    myPromise(userInfo)
     .then(parseValue)
     .then(auth)
     .then(display)
    */
}
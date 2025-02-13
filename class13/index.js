const countDownBoxEl = document.querySelector('.container__countDownBox')
const targetDate = new Date('2025-12-31 23:59:59')

let endTime = new Date(targetDate).getTime() // Prototype의 속성. 자바스크립트의 모든 객체는 프로토타입(부모 객체)와 연결되어 있음. getTime() 메서드는 표준시에 따라 지정된 날짜의 시간에 해당되는 숫자 값을 반환.
let period = endTime - new Date().getTime() // 타깃날짜에서 오늘날짜를 빼주어 카운트다운의 기간을 설정한다.

//카운트다운 UI에 들어갈 데이터
let days = ""
let hours = ""
let minutes = ""
let seconds = "" 

function countDown() {
    period = endTime - new Date().getTime() // 밀리세컨드를 반환

    //정적 Math.floor() 메서드는 항상 반올림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환한다.

    const daysValue = Math.floor(period / (1000 * 60 * 60 * 24))
    const hoursValue = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesValue = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60))
    const secondsValue = Math.floor((period % (1000 * 60)) / (1000))

    days = daysValue
    hours = hoursValue
    minutes = minutesValue
    seconds = secondsValue
}

setInterval(() => {
    countDown()

    countDownBoxEl.innerHTML = `<div class="container__countDownBox__countDown">
            <div class="layout">
                <span class="layout__text">마감</span>
                <div class="layout__time">${days}일</div>
                <div class="layout__time">${hours}시간</div>
                <div class="layout__time">${minutes}분</div>
                <div class="layout__time">${seconds}초</div>
                <span class="layout__text">전 이에요.</span>
            </div>
        <button class="button">이력서 열람하기</button>
    </div>`
   

}, 1000) // settimeout은 한 번만 불러오지만, setInterval은  일정한 시간 간격을 두고 반복해서 실행할 때 사용한다.
    

    





//정적 Math.floor() 메서드는 항상 반올림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환한다.



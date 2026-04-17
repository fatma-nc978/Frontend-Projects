const days = document.querySelector("#daysSpan");
const hours = document.querySelector("#hoursSpan");
const minutes = document.querySelector("#minutesSpan");
const seconds = document.querySelector("#secondsSpan");

updateCountdown();

function updateCountdown() {
    const newYearTime = new Date("Jan1, 2027 00:00:00").getTime(); //yeni yıl zmamanını verir.
    console.log(newYearTime);
    const currentTime = new Date().getTime();  //şu anki zamanı milisaniye olarak verir.
    console.log(currentTime);
    const gap = newYearTime - currentTime;

    const second = 1000; //hepsinin milisaniye cinsinden karşılığı
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    days.textContent = d;

    const h = Math.floor((gap % day) / hour);
    hours.textContent = h;

    const m = Math.floor(((gap % day) % hour) / minute);
    minutes.textContent = m;

    const s = Math.floor((((gap % day) % hour) % minute) / second);
    seconds.textContent = s;

    setTimeout(updateCountdown, 1000);
}

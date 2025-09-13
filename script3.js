    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let digitalClock = document.getElementById("digitalClock");
    function updateClock() {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * 6;
      let ss = day.getSeconds() * 6;
      hour.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
      min.style.transform = `rotateZ(${mm}deg)`;
      sec.style.transform = `rotateZ(${ss}deg)`;
      // Digital clock
      let h = day.getHours();
      let m = day.getMinutes();
      let s = day.getSeconds();
      let ampm = h >= 12 ? "PM" : "AM";
      h = h % 12; 
      h = h ? h : 12;
      m = m < 10 ? "0"+m : m;
      s = s < 10 ? "0"+s : s;

      digitalClock.innerHTML = `${h}:${m}:${s} ${ampm}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
const timeEl = document.querySelector('time');
const audio = document.querySelector('audio');

const alarmTime = "1/9/2020 4:07:00 PM";
function printTime(){
  const time = new Date();
  const timeString = `${time.getHours()} : ${time.getMinutes()} :   ${time.getSeconds()}`;
  
  
  timeEl.textContent = timeString
  
  // Alarm detection
  const now = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`
  console.log('now', now)
  if(Date.parse(now) === Date.parse(alarmTime)){
    timeEl.classList.add('tada')
    audio.play()
    console.log('Alarm is ringing!!!!!!!!!!!!!!!!!!!!!!')
  }
}


setInterval(()=> {
  printTime()
}, 1000)


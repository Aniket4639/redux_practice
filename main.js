const body=document.body;
const endTime=new Date();

const hoursE1 =document.getElementById('hours');
const minutesE1 =document.getElementById('minutes');
const secondsE1 =document.getElementById('seconds');
console.log(Date());
const updateCountdown=()=>{
    
    const endTime=new Date();
    const hours=endTime.getHours();
    const minutes=endTime.getMinutes();
    const seconds=endTime.getSeconds();
    
    
    
    hoursE1.innerHTML=hours<10?'0'+hours:hours;
    minutesE1.innerHTML=minutes<10?'0'+minutes:minutes;
    secondsE1.innerHTML=seconds<10?'0'+seconds:seconds;
}
setInterval (updateCountdown,1000);
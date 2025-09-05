function updateTime(){
    const now=new Date();
    const hour=String(now.getHours()).padStart(2,'0');
    const min=String(now.getMinutes()).padStart(2,'0');
    const sec=String(now.getSeconds()).padStart(2,'0');

    document.getElementById("hour").textContent=hour;
     document.getElementById("min").textContent=min;
      document.getElementById("sec").textContent=sec;
}
updateTime();
    setInterval(updateTime,1000);

    

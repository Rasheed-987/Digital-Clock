const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec",];
let theYear=new Date().getFullYear();
 let theMonth=new Date().getMonth();
 let month=monthNames[theMonth];
let theDate=new Date().getDate();
const theDay= new Date().getDay();
    const day=dayNames[theDay];
    const theHour=new Date().getHours();
    console.log(theHour);
    const theMinute=new Date().getMinutes();

// let theSecond= new Date().getSeconds();
// document.querySelector(".theSecond").textContent=theSecond;
document.querySelector(".theDate").textContent=theDate;
document.querySelector(".theYear").textContent = theYear;
document.querySelector(".theMonth").textContent=month;
document.querySelector(".theDay").textContent=day;
document.querySelector(".theHour").textContent=theHour;
document.querySelector(".theMinute").textContent=theMinute;


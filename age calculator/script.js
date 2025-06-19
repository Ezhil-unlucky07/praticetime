

function agecalculate(){
  const indate = document.getElementById("date").value;
    const inmonth = document.getElementById("month").value;
    const inyear= document.getElementById("year").value;
    const result = document.getElementById("result");
    const currentyear = new Date().getFullYear();
    const currentmonth = new Date().getMonth()+1;
    const span1 = document.getElementById("span1");
    const span2 = document.getElementById("span2");
    const span3 = document.getElementById("span3");
    const span4 = document.getElementById("span4");
    const span5 = document.getElementById("span5");
    const span6 = document.getElementById("span6");
    let yearres = 1;
    
  //validation for inputs
if(indate.trim()==="" || inmonth.trim()===""  || inyear.trim()==="" ){
   document.getElementById("results").style.display = "none"
        result.textContent = "Enter a Input"
        yearres= 0;

}
else{
        if(indate>31||indate<=0||inmonth>12||inmonth<=0||inyear>currentyear||inyear<1950){
             result.textContent = "Enter a Valid Input"
              document.getElementById("results").style.display = "none"
             yearres= 0;
        }
  }

switch (yearres) {
  case 1:
    document.getElementById("results").style.display = "block";
    if(currentmonth<inmonth){
      const years = currentyear-inyear;
      span1.textContent = years-1;
      result.textContent = " ";
    }
    else{
      const years = currentyear-inyear;
      span1.textContent = years;
      result.textContent = " ";
    }
    calculate();
    break;
  
  
}
function calculate(){
  if(currentmonth==inmonth && currentyear==inyear){
    let days = currentmonth-inmonth;
    span3.textContent = days;
  }
  else if(inmonth>currentmonth && currentyear==inyear){
    document.getElementById("results").style.display = "none";
       result.textContent = "Enter a Valid Month  Input"
  }
  const montyear = currentyear-inyear;
  const months = montyear*12;
  span2.textContent = months-(inmonth-currentmonth);

 const day = new Date(inyear,inmonth -1,indate);
 let today = new Date();
 const daysres = today-day;
 const totaldays = Math.floor(daysres / (1000*60*60*24));
 span3.textContent = Math.abs(totaldays);

 const  totalhours =  totaldays*24;
 span4.textContent = totalhours;

 const totalmin = totaldays*(60*24);
 span5.textContent =  totalmin ;

 const totalsec = totaldays * (86400);
 span6.textContent = totalsec;
}

}


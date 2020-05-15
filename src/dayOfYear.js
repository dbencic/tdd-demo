function dayOfYear(year, month, day) {
    let months = [31, 28, 31, 30, 31, 
        30, 31, 31, 30, 31, 30, 31];
    
    let sum = 0;
    for(var i=0; i<month-1; i++) {
        sum+=months[i];
    }
    let leap = (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
    if(month > 2 && leap) {
        sum += 1;
    } 
    return (sum + day);
}

function dayOfTheYear2(year, month, day) {
    //sva 3 argumenta su cijeli brojevi
    let broj_dana=0;
    // prolazi to tog datuma
    for(let i = 1; i<month; i++){
      //31
      if(i==1||i==3||i==5||i==7||i==8||i==10){broj_dana=broj_dana+31;}
      //30
      if(i==4||i==6||i==9||i==11){broj_dana=broj_dana+30;}
      // veljaća
      if(i==2){
        if((year%4)==0){broj_dana=broj_dana+1;}
        broj_dana=broj_dana+28;
      }
        
    }
  broj_dana=broj_dana+day;
  return broj_dana;
}

module.exports = dayOfYear;
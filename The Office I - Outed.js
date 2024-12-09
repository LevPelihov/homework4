function outed(meet, boss){
    let sumMeet = 0;
    let length = Object.keys(meet).length ;
    
    for( let key in meet) {
      if (key == boss){
      meet[key] = meet[key] * 2;
        }
      sumMeet += meet[key];
      
    }
    let srMeet = sumMeet / length;
    if (srMeet <= 5)  {
     return 'Get Out Now!';
    }
    else{
      return 'Nice Work Champ!'
    }
  }
  console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));
  console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'));
  console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'));
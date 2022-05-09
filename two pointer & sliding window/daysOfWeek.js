const daysOfWeek=(day,n)=>{
    let value=0
    let object={
        0:"Sunday",
        1:"Monday",
        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
       5:'Friday',
       6:'Saturday'
    }
   for(let key in object){
    if(day=object[key]){
        value=Number(key)+(n%7)
    }

   }
   let found_date=value%7
  for(let key in object)
  {
      if(key==found_date)
      {
          console.log(object[key])
      }
  }

}

daysOfWeek("Wednesday",9)
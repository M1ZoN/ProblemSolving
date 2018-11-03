{
  const check = (arr) =>{
    let checkArr = [];
    let noThere = [];
    for(let i = 0; i<20;i++){
      checkArr[i] = i+1;
    }
    for(let i in checkArr){
      if(!arr.includes(checkArr[i])){
        noThere.push(checkArr[i]);
      }
    }
    
      return noThere;
  }
  const arr = [1,3,5,7,8,9,10,11,12,13,16,17,20];  
  console.log(check(arr));
};
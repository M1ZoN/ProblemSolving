{
  const check = (arr) =>{
    let obj = {};
    let output = [];
    for(let i in arr){
      if(arr[i] in obj){
        obj[arr[i]] +=1;
      }
      else{
        obj[arr[i]] = 1;
      }
    }
    
    for(let property in obj){
      if(obj[property] >1){
        output.push(property);
      }
    }
    return output;
  }
  const arr = [1,2,2,2,2,3,3,3,4,4,4,5,5,5,6,7,8,9];  
  console.log(check(arr));
};
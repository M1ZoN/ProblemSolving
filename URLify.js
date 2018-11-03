{
  const check = (thisWord, count) =>{
    let arr = thisWord.split('');  
    for(let i=0;i<count;i++){
      if(arr[i]===" "){
        arr.splice(i,1,"%20");
      }
    }
    return arr.join('');
  }
  const word = "Mr John Smith    ";  
  console.log(check(word, 13));
};
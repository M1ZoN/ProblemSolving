function rot13(str) { // LBH QVQ VG!
  let newStr = [];
  for(let i in str){
    if(str.charCodeAt(i)>64 && str.charCodeAt(i)<91){
    let num = str.charCodeAt(i) - 65;
    num = (num+13)%26+65;
    newStr.push(String.fromCharCode(num));
    }
    else{
    newStr.push(String.fromCharCode(str.charCodeAt(i)));        
    }
  }
  return newStr.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));

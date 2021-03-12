module.exports = function check(str, bracketsConfig) {
  let strConfig = bracketsConfig.map(item => item.join(''));
  
  for (let i = 0; i < strConfig.length; i++) {
    if (str.includes(strConfig[i])) {
      str = str.replace(strConfig[i], '');
      i = -1;
    }
  }
   if(str.length === 0){ 
     return true
    }else {
      return false
    };
}

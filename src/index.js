module.exports = function check(str, bracketsConfig) {
  let result = [];
  let openBrackets =[];
  let closedBrackets = [];
  let sameBrackets = ['|', '7', '8'];
  for(let i=0; i<bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0]);
    closedBrackets.push(bracketsConfig[i][1]);
  }
  for(let letter of str){
    if(openBrackets.includes(letter)){
      if(result[result.length-1] === letter && sameBrackets.includes(letter)){
        result.pop();
      }else{
        result.push(letter);
      }
    }else if(closedBrackets.includes(letter)){
      let pair = openBrackets[closedBrackets.indexOf(letter)];
      if(result[result.length-1] === pair){
        result.pop();
      }else{
        result.push(letter);
        break;
      }
    }
  }
  return (result.length === 0);
}

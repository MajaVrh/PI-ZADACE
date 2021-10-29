let zagrade = (s) => {
  let stog = [];

  for (let i = 0; i < s.length; i++) {
    let zadnji = stog[stog.length - 1];
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stog.push(s[i]);
    } 
    else if (
      (zadnji == "(" && s[i] == ")") ||
      (zadnji == "[" && s[i] == "]") ||
      (zadnji == "{" && s[i] == "}")
    ) {
      stog.pop();
    } 
    else {
      return false;
    }
  }
  return stog.length ? false : true;
};
console.log(zagrade("[()]()()")); // → true
console.log(zagrade("{[((()))]}")); // → true
console.log(zagrade("({)}")); // → false

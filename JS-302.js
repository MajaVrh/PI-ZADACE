function isti_znakovi(str){
    let  x= 0;
    for(let i = 0; i<str.length; i++) 
       {
       if(str[i] == str[i+1]) x++;
       }
    return x;
 }
isti_znakovi('abccdddefg');
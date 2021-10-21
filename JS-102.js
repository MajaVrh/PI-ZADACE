let bodovi = prompt("Unesi broj bodova");
let prosjek = (bodovi/168)*100;
let ocjena;
if (prosjek>= 89){ocjena=5;}
else if(prosjek>=76 && prosjek<89){ocjena=4;}
else if (prosjek>=63 && prosjek<76){ocjena=3;}
else if (prosjek>=50 && prosjek<63){ocjena=2;}
else {ocjena=1;}
let poruka;
if(ocjena>1){ poruka=`Čestitamo, Vaša prosjek ocjena je ${ocjena}`;} 
console.log(poruka);
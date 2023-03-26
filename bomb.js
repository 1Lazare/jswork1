let presidentKey = true;
let primeMinisterKey = false;
let generalOfArmiesKey = true;
let masterKey = true ; 

const bombWillLaunch = masterKey || (presidentKey && primeMinisterKey && generalOfArmiesKey) ; 
console.log (bombWillLaunch) ;
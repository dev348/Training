"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    // return"dev"
}
function getUpper(val) {
    return val.toLowerCase();
}
function signUpUser(name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
}
signUpUser("dev", "sunm@g.com", true);
signUpUser("dev", "sunm@g.com");
addTwo(4);
getUpper("HJSDFLDS");
// //function way 
// function getValue(myVal : number): boolean{
//     if(myVal >5){
//         return true
//     }
//     return "200 ok"
// }
var getHello = function (a) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero are ".concat(hero);
});
// console.log(heros.map(function (hero) {
//     return "hero are ".concat(hero);
// }))
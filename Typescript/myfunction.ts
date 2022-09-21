function addTwo(num : number) : number{
    return num + 2
    // return"dev"
}

function getUpper(val : string){
    return val.toLowerCase()
}

function signUpUser(name : string,email : string,ispaid : boolean = false){}

signUpUser("dev","sunm@g.com",true)
signUpUser("dev","sunm@g.com")

addTwo(4);
getUpper("HJSDFLDS");

// //function way 

// function getValue(myVal : number): boolean{
//     if(myVal >5){
//         return true
//     }
//     return "200 ok"
// }

const getHello =(a: string ): string => {
    return ""
}
const heros =["thor","spiderman","ironman"]
// const heros =[1,2,3]

heros.map((hero): string =>{
    return `hero are ${hero}`
})

function consoleError(errmsg : string) : void{
    console.log(errmsg);
}

function  handleError(errmsg : string): never{
 throw new Error(errmsg)
}


export {}


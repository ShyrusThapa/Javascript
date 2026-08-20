let name="shyrus";
let age= 21
console.log(name, age)

const roll=10;
console.log(roll) //unchangable

// old way var a=10


//datatypes
//primitive -- number, string, boolean, null,bigint,symbol

let num=10;
console.log(num);

let c = "The name is Cyrus";
console.log(c);

let login= true;
console.log(login);

//bigint
let num2=345368458n;
console.log(num2);


let obj= {
    name:"Rolex",
    account:007,
    age:22,
    category:'genz'
}
console.log(obj);


//functions

function add(){
    console.log("Hello");
}
add();

let s= function add(){
    console.log("Hello World");
}
s();

//type finding

let x= 80;
console.log(typeof x);

let sname= "Bj";
console.log(typeof sname);

let x1= true;
console.log("The type is" , typeof x1)

//formating
a= 20;
b=30;
c=a+b;
console.log("The sum of " +  a + " and " + b +  " is " + c );

let arr= [10,"hero"];
console.log(typeof arr); //object nai ho array vanda pani

 //strings

 let str= "Rolex"
 console.log(str[3])

 //non primitive data types are mutable
 let arr2=[10,20,50,80];
 arr2.push(90);
 console.log(arr2);

//see
 let a1= 10;
 let b1=a;
 b1=20;
 console.log(a1,b1);

 //object
 let objj= {
    namee: "Ram",
    agee:30
 }
 let objj2=objj;
 objj2.namee="shyam";
 console.log(objj);
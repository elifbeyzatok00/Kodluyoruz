// renkli yorum satırları için Better Comments extension indirdik

    //
    //*
    //?
    //!
    //TODO


document.write("Hello World!"); //? ekrana yazdırma
console.log("Hello World!");  //? konsola yazdırma 

alert("Hoş geldiniz");

// var let const

var name_ = "hi-kod";
console.log(typeof name_);

var age = 3;

//! var variable = ; //* undefined
    var variable2 = null; //* null

//* operatörler
var x = 5;
x += 6;
console.log(x);

var y = 5;
y -= 3;
console.log(y);

var d = 5;
d *= 2;
console.log(d);


//* assignment operatörler
// = atama
// == eşittir
// === veri tipi ve değer bakımından eşit mi?

var a = 5;
var b = 5;

if(a == b){
    alert('a ve b eşit');
}if(a === b){
    alert('a ve b veri tipi ve değer bakımından eşit');
}else{
    alert('a ve b eşit değildir');
}

//modules operator %
var year = 2023;
var kalan = year % 5;
console.log(kalan);


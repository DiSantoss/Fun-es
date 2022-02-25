/*
 o apply linka nesse caso o parametro simplesmente ao que o
 this está apontando. sem o apply esse this.nome fica como se fosse 
 indefinido, e quando é acrescentado o apply, ele faz o link justamente 
 com o parametro. 

 */

//exmplo1
 /*
const pessoa1 = {
    nome : 'André',

}

const pessoa2 = {
    nome : 'John'
}

function getSomething() {
    console.log(this.nome)
}

//exemplo2
getSomething.apply(pessoa1);
*/

/*
const numbers1 = {
    num1 : 10,
    num2 : 5,
}

const numbers2 = {
    num1 : 5,
    num2 : 10,
}

function getNumbers (a,b) {
    console.log(this.num1 + this.num2 + a + b)
}

getNumbers.apply(numbers1,[5,2])

*/





/*

 const pessoa = {
    firstName :"André",
    lastName :"Soares",
    Id : 1,
    fullName : function () {
        return this.firstName + " " + this.lastName;
    },
    getId : function () {
        return this.Id;
    }
}
pessoa.getId() 

*/



/*


 const pessoa = {
    nome : 'Leandro',
};

function getSomething() {
    console.log(this.nome)
}


getSomething.call(pessoa)
 

*/



/*
const myObj = {
    num1 : 8,
    num2: 2,

};

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj,1,5)

*/

/*
const MyObjouValores = 
{
    num1 : 5,
    num2 : 10, 
};


function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b)
}

soma.apply(MyObjouValores,[10,5])

*/

/*
const double = x => x * 2

console.log(double(9))
*/
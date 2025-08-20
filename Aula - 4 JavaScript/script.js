// let varlet = 100 // escopo de função local
// var variavel = 10 // escopo global 
// const varconst = 1// igual a defaine
// let Varundefined = undefined

// const nome = "JuJu^-^";
// const Idade = 17;
// let Divas = ["Letição", "MaluS2", "Jheni>_<", "Las<3"];
// const obj =
// {
//     nome: "Lays",
//     Idade: 17,
//     Trabalho: "Bosch"
// } // objeto 

// function soma(x, y) { 
//     return x + y; 
// } // função normal

// const somar = function (a, b) {
//      return a - b; 
// } // função anonima 

// const sub = (a, b) => (a * b);// função flacha

// console.log(nome + " Tem " + Idade + " Anos ");
// console.log(Divas[0]);
// Divas.forEach((element) => console.log(element));
// console.log(obj);
// console.log(sub(4, 5));
// console.log(somar(6, 4));

// let title = document.getElementById('EL1').innerHTML;// só o elemento e sem e o tudo
// console.log(title);

// const ReceberTexto = () =>{
//     let inputtitle = document.getElementById('EL2').value;
//     console.log(inputtitle);
// }

const TrocarCor = () =>{
    let Redon = document.getElementById('Redondo');
    Redon.classList.remove('ok')
    Redon.classList.add('bad');

}

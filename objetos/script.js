var pessoa = {
  nome: 'Claudio',
  idade: 42,
}
//Crie um objeto com os seus dados pessoais
//Deve possuir duas propriedades: nome e sobrenome

var dados = {
  nome: 'Claudio',
  sobrenome: 'Santos',
}

//Crie um método no Objeto anterior que retorne seu nome completo
dados.nomeCompleto = function (){
  return `${this.nome} ${this.sobrenome}`;
}

//Modifique o valor da propriedade preço para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

//Crie um objeto de um cachorro da raça labrador, de cor preta, com 10 anos
//e que later ao ver um homem

var cachorro ={
  raca: 'labrador',
  cor: 'preto' ,
  idade: '10 anos',
  latir(pessoa){
    if(pessoa === 'Homem'){
      return 'Late';
    }else {
      return 'Nada';
    }
  }
}
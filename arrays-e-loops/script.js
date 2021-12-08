//Crie um array com os anos que o Brasil ganhou a Copa
//1959, 1962, 1970, 1994, 2002
var brasilCampeao =[1959, 1962, 1970, 1994, 2002]

//Interaja com o Array utilizando um loop, para mostrar no console a seguinte mensagem:
// `O Brasil ganhou a Copa de ${ano}`

for (var i = 0; i < brasilCampeao.length; i++){
  console.log(`O Brasil ganhou a Copa de ${brasilCampeao[i]}`);
}

//Interaja com um loop nas frutas e pare ao chegar em Pera
var frutas =['Banana','Maçã','Pera','Uva','Melancia']
for (var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera'){
    break;
  }
}
/*
Crie um array com 5 items (tipos variados).
*/
var arr = [ 1, 'bolsa', function(x,y) {return x+y;}, [1,2,3], { casaco: 'verde'}]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(item) {
arr.push(item);
return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem( [{sofá: 'cinza', cadeira: 'branca'}, function(){}, [5,6,7]] )

[ 1,
  'bolsa',
  [Function],
  [ 1, 2, 3 ],
  { casaco: 'verde' },
  { bola: 'azul' },
  [ { 'sofá': 'cinza', cadeira: 'branca' },
    [Function],
    [ 5, 6, 7 ] ] ]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
  
'O segundo elemento do segundo array é ' + arr[6][1]
'O segundo elemento do segundo array é function (){}'

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
'O primeiro array tem ' + arr.length + ' itens.'
'O primeiro array tem 7 itens.'

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

'O segundo array tem ' + arr[6].length + ' itens.'
'O segundo array tem 3 itens.'

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

var count =10;
 while(count <= 20) {
... if (count % 2 === 0) {console.log(count)};
... count++;
... }
10
12
14
16
18
20

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var count = 10;
while (count < 20) {
... if (count % 2 !== 0) {console.log(count);}
... count++;
... }
11
13
15
17
19
  
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
  
for (var count = 100; count <= 120; count++) {
... if (count % 2 === 0) {console.log(count)};
... }

console.log( 'Números ímpares entre 111 e 125:' );

for(var count = 111; count <= 125; count++) {
... if (count % 2 !== 0) { console.log(count)}
... }
111
113
115
117
119
121
123
125

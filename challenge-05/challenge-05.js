/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = ['carla', 8, false, null, 90]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function Arr (arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arr(qualquer)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arr, ind) {
  return arr[ind];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var outroarray = [8,'casa',true, undefined, 0];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arr(outroarray) // [ 8, 'casa', true, undefined, 0 ]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
   var objLivro = { 
     livro1: { quantidadePaginas: 200, autor: 'Jose da Silva', editora: 'Osasco'},
     livro2: { quantidadePaginas: 350, autor: 'Henrieque Souza', editora: 'Saraiva'},
     livro3: { quantidadePaginas: 100, autor: 'Carla Porto', editora: 'Eu mesma'}
   };
     if (nome === undefined) { return objLivro;} {return objLivro.nome;}
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()
{ livro1:
   { quantidadePaginas: 200,
     autor: 'Jose da Silva',
     editora: 'Osasco' },
  livro2:
   { quantidadePaginas: 350,
     autor: 'Henrique Souza',
     editora: 'Saraiva' },
  livro3:
   { quantidadePaginas: 100,
     autor: 'Carla Porto',
     editora: 'Eu mesma' } }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
function bookQuant(nome){
  "O livro book(nome).objLivro. tem [X] páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

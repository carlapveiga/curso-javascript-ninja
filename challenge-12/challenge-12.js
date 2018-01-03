(function() {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */

  var person = {name: 'Carla', lastname: 'Veiga', age: 26}
  console.log( 'Propriedades de "person":', person );
  /*
  
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  
  console.log(Object.keys(person));
  
  /*
  Crie um array vazio chamado `books`.
  */
  
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  
  books.push({name: 'Guerra e Paz', pages: 400})
  books.push({name: 'Extraordinário', pages: 140})
  books.push({name: 'Orgulho e Preconceito', pages: 320})
  
  console.log( '\nLista de livros:');

  /*
  Mostre no console todos os livros.
  */
  console.log(books)

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop())

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log(books)

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  
  console.log( '\nLivros em formato string:' );

  /*
  Mostre os livros nesse formato no console:
  */
  
 
  var strBooks = JSON.stringfy(books)
  console.log(strBooks)
  
  
  /*
  Converta os livros novamente para objeto.
  */
  
  //console.log( '\nAgora os livros são objetos novamente:', JSON.parse(strBooks));

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  books

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['c','a','r','l','a','p','o','r','t','o','v','e','i','g','a'];
              
  console.log( '\nMeu nome é:', myName );
  
  
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  
  console.log(myName.join(''))
  
  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  myName.reverse()
  console.log(myName.join(''))

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  myName.sort()
  console.log(myName.join(''))
  
})()

/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Challenge 21</title>

</head>
<body>
	<input type="text" data-js="input"> 
	<button type="submit" data-js="start">Start</button>
	<button type="submit" data-js="stop">Stop</button>
	<button type="submit" data-js="reset">Reset</button>
    <script src="challenge-21.js"></script>
	
		
</body>
</html>

(function(win, doc) {
	$input = doc.querySelector('[data-js="input"]');
	$buttonStart = doc.querySelector('[data-js="start"]');
	$buttonStop = doc.querySelector('[data-js="stop"]');
	$buttonReset = doc.querySelector('[data-js="reset"]');
	
	$input.value = 0;
	
	var temporizador;

	$buttonStart.addEventListener('click', function () {
		function startTimer () {
			$input.value++;
			
			temporizador = setTimeout(startTimer, 1000);
		}
		
		startTimer()
		
	}, false);
	
	$buttonStop.addEventListener('click', function() {
		clearTimeout(temporizador);
	}, false);
	
	$buttonReset.addEventListener('click', function() {
		$input.value = 0;
		clearTimeout(temporizador);
	}, false);

})(window, document);

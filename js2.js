const message = 'Hello world' // Try edit me
var chi1 = Number(prompt('число дай', ));
var znak = prompt('что с ним сделать?', );
var chi2 = Number(prompt('еще число', ));


if (znak == '/'){sum = chi1 / chi2}
  if(znak == '*'){sum = chi1 * chi2}
    if(znak == '+'){sum = chi1 + chi2}
      if(znak == '-'){sum = chi1 - chi2}
      else {

      };
// Update header text
document.querySelector('#header').innerHTML = 'ну на ответ  ' + sum

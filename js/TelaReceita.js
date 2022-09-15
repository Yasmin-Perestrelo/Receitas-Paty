// 50 receitas

var btn1 = document.getElementById('btn-Bolos');
var bolos = document.querySelector('.bolos');

btn1.addEventListener('click', function () {

  if (doces.style.display = 'none') {
    bolos.style.display = 'block';
    btn1.style.color = '#F47B6A';
    btn2.style.color = '#373737';
    btn3.style.color = '#373737';
    salgados.style.display = 'none';
  }
  else if (salgados.style.display = 'none'){
    bolos.style.display = 'block';
    btn1.style.color = '#F47B6A';
    btn2.style.color = '#373737';
    btn3.style.color = '#373737';
    doces.style.display = 'none';
  }
  else {
    bolos.style.display = 'none';
  }
});

var btn2 = document.getElementById('btn-Doces');
var doces = document.querySelector('.doces');

btn2.addEventListener('click', function () {

  if (bolos.style.display = 'none') {
    doces.style.display = 'block';
    btn1.style.color = '#373737';
    btn2.style.color = '#F47B6A';
    btn3.style.color = '#373737';
    salgados.style.display = 'none';
  }
  else if (salgados.style.display = 'none'){
    doces.style.display = 'block';
    btn1.style.color = '#373737';
    btn2.style.color = '#F47B6A';
    btn3.style.color = '#373737';
    bolos.style.display = 'none';
  }
  else {
    doces.style.display = 'none';
  }
});

var btn3 = document.getElementById('btn-Salgados');
var salgados = document.querySelector('.salgados');

btn3.addEventListener('click', function () {

  if (bolos.style.display = 'none') {
    salgados.style.display = 'block';
    btn1.style.color = '#373737';
    btn2.style.color = '#373737';
    btn3.style.color = '#F47B6A';
    doces.style.display = 'none';
  }
  else if (doces.style.display = 'none'){
    salgados.style.display = 'block';
    btn1.style.color = '#373737';
    btn2.style.color = '#373737';
    btn3.style.color = '#F47B6A';
    bolos.style.display = 'none';
  }
  else {
    salgados.style.display = 'none';
  }
});
const ph = document.querySelectorAll('.slides img');
console.log(ph);
let count = 0;

ph.forEach(i => {

  i.addEventListener('dblclick', (e) => {

    i.style.width= i.style.width ? null : '1100px';
    i.style.height= i.style.height ? null : '600px';
    i.style.position = i.style.position ? null : 'relative';
    i.style.right = i.style.right ? null : '48px';
    i.style.bottom = i.style.bottom ? null : '120px';
    document.querySelector('.section').style.backgroundColor = document.querySelector('.section').style.backgroundColor ? null : 'rgba(0, 0, 0, 0.5)';
    i.style.zIndex = i.style.zIndex ? null : '9';

    document.querySelectorAll('.slides p').forEach(j => {
        j.style.textAlign = j.style.textAlign ? null : 'center';
        j.style.position = j.style.position ? null : 'relative';
        j.style.left = j.style.left ? null : '320px';
    })
  })
})
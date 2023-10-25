const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click',function(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const  newColor = randColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText =newColor;
    h1.style.color ="white";

    function randColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;

    }


})


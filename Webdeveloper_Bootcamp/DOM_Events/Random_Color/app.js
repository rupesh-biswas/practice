const button = document.querySelector('button');
const h1 = document.querySelector('h1')
button.addEventListener('click', () => {
    const { newColor, h1Color } = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    h1.style.color = h1Color;
})
// rgb(255,255,255)

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (r + g + b < 100) {
        h1Color = '#ffffff';
    }
    else {
        h1Color = '#000';
    }
    return { newColor: `rgb(${r}, ${g}, ${b})`, h1Color: h1Color };
}
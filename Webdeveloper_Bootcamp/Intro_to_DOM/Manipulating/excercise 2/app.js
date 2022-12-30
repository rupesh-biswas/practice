const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const h1_spans = document.querySelectorAll('h1 span');
let i = 0;

for (let span of h1_spans) {
    span.style.color = colors[i];
    i += 1
}

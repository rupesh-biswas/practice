// setTimeout(() => {
//     document.body.style.background = 'red';
//     setTimeout(() => {
//         document.body.style.background = 'orange';
//         setTimeout(() => {
//             document.body.style.background = 'yellow';
//         }, 3000)
//     }, 2000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 3000, () => {
    delayedColorChange('orange', 3000, () => {
        delayedColorChange('yellow', 3000, () => {
            delayedColorChange('green', 3000, () => {
                delayedColorChange('blue', 3000, () => {

                })
            })
        })
    })
})




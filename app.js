let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");
buttons.forEach(button => {
    // clicked event for each individual button
    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num; // store clicked button value in [value] 
        screen.value = screen.value + value; // screen.value = value
    })
})

equal.addEventListener('click', (e) => {
    if (screen.value === '') {
        screen.value == "";
    } else {
        screen.value = eval(screen.value);
    }
});

clear.addEventListener('click', (e) => {
    screen.value = "";
});

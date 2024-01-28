const color = document.querySelector('.color');
const button = document.querySelector('.btn');
const stop =document.getElementById('stop');
console.log('hello')
console.log(stop);
const randomNumber = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID;

const startChangingColor = function() {
    if (!intervalID) {
        intervalID = setInterval(changeBG, 2000);
    }
    function changeBG() {
        let bgcol = randomNumber();
        document.body.style.backgroundColor = bgcol;
        color.textContent = bgcol;
        button.style.backgroundColor=bgcol;
        stop.style.backgroundColor=bgcol;
        // Clear transition after changing the color
        setTimeout(() => {
            document.body.style.transition = "";
        }, 300);
        document.body.style.transition = "all ease-in-out 300ms";
    }
};

const stopChangingColor = function() {
    clearInterval(intervalID);
    intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

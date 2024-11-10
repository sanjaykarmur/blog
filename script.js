
        function setInitialTheme() {
         
            var body = document.body;
            body.style.backgroundColor = 'lightgrey';
            body.style.color = 'black';
        }

function switchTheme() {
    var body = document.body;
    var button = document.getElementById('themeButton');

    //device vibration for 1ms
    if (navigator.vibrate) {
        navigator.vibrate(1);
    }

    if (body.style.backgroundColor === 'lightgrey') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        button.textContent = 'Light Theme';
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
    } else {
        body.style.backgroundColor = 'lightgrey';
        body.style.color = 'black';
        button.textContent = 'Dark Theme';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
    }
}

        window.onload = setInitialTheme;

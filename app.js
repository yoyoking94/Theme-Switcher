function changeTheme() {
    const nav = document.querySelector('nav')
    const input = document.querySelector('#switch')
    const elements = document.querySelectorAll("a");

    elements.forEach((element) => (element.style.color = "#fff"));
    document.querySelector('header').style.color = "#fff";

    input.addEventListener('change', () => {
        if (input.checked) {
            console.log("Dark side !");

            elements.forEach((element) => (element.style.color = "#ffffff"));

            document.querySelector('*').style.color = "#ffffff";
            document.querySelector('nav').style.backgroundColor = "#333333";
            document.querySelector('nav').style.color = "#fff";
            document.querySelector('body').style.backgroundColor = "#5c5c5c";
            document.querySelector('footer').style.backgroundColor = "#333333";
        } else {
            console.log("The force !");

            elements.forEach((element) => (element.style.color = "#333333"));

            document.querySelector('*').style.color = '#333333';
            document.querySelector('nav').style.backgroundColor = "#f5f5f5";
            document.querySelector('nav').style.color = "#333";
            document.querySelector('body').style.backgroundColor = "#ffffff";
            document.querySelector('footer').style.backgroundColor = "#f5f5f5";
        }
    })

    window.addEventListener('scroll', () => {
        var y = window.scrollY;

        if (y > 50 && input.checked) {
            nav.style.background = "#333333"
        } else if (y > 50) {
            nav.style.background = "#F5F5F5"
            document.querySelector('nav').style.color = "#333";
            elements.forEach((element) => (element.style.color = "#333"));
        } else {
            nav.style.background = ""
            document.querySelector('nav').style.color = "#fff";
            elements.forEach((element) => (element.style.color = "#fff"));
        }
    })
}

function redirection() {

}

changeTheme()